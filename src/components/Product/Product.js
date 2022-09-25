import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({handleAddToCart, product}) => {
  // const {handleAddToCart, product} = props;
  const {name , img , price , seller , ratings}= product;

    return (
        <div className='product'>
           <img src={img } alt='iamge not found' />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p className='product-price'>Price: ${price}</p>
           <p><small>Seller: {seller}</small></p>
           <p><small>Ratings: {ratings} stars</small></p>
           </div>
           <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
            <p style={{marginRight:'5px'}}>Add to Cart</p>
            {/* <FontAwesomeIcon icon=''></FontAwesomeIcon> */}
            <FontAwesomeIcon icon={faShoppingCart}/>
           </button>
        </div>
    );
};

export default Product;