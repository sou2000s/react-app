import React, { useEffect, useState } from 'react';
import {  totalPrice } from '../../utilities/function';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
//    let newCart ;
    const handleAddToCart = (product) => {
        console.log(product);
         const newCart = [...cart , product]
        setCart(newCart)
        }
        // const total = totalPrice(newCart)
    return (
        <div className='shop-container'>
            <div className="products-container">
              {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}> </Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            
                {/* <h1>Total Price: {total}</h1> */}
                    
            </div>
        </div>
    );
};

export default Shop;