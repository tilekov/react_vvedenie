import React from 'react';

import './ProductCard.css'

const ProductCard = ({car, getInfo}) => {
    // console.log(car);
    return (
        <div>
            <div className="car-desc">
                <h2 style={{cursor: "pointer"}} onClick={() => getInfo(car)}>{car.model}</h2>
                <h3>Order Online for Touchless Delivery Custom Order</h3>
            </div>
            <img className="car-image" src={car.image} alt="" />
        </div>
    );
};

export default ProductCard;