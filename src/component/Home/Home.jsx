import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>this is home page</h1>
        </div>
    );
};

export default Home;