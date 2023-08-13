import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart }) => {
    // console.log(tshirt)
    const {name,picture,price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;