import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast  from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast('you have alredy added')
        }
        else {

            const newCart = [...cart, tshirt]
            setCart(newCart)
        }


    }

    const handleDelet = (id) => {
        const reamingItem = cart.filter(pd => pd._id !== id)
        setCart(reamingItem)


    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleDelet={handleDelet}
                ></Cart>

            </div>
        </div>
    );
};

export default Home;