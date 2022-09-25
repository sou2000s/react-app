const totalPrice = (cart) => {
    const reducer = (curr , pre) =>  pre + curr.price  ; 
    const total = cart.reduce(reducer , 0)
    return total;
}

export {totalPrice}