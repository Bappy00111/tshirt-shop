import React from 'react';
import './Cart.css'

const Cart = ({cart,handleDelet}) => {
    console.log(cart)
    // const {name,price} = cart
    return (
        <div className='cart-container'>
            <h1>order summare : {cart.length}</h1>
            {
                cart.map(tshirt => <p>{tshirt.name} <button onClick={()=>handleDelet(tshirt._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;