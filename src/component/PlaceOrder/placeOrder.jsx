

import React, { useState } from 'react';
import './placeOrder.css';

const PlaceOrder = ({ symbol, price, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    // const handleBuy = () => {
    //     console.log(`Buying ${quantity} of ${symbol} at $${price} each (Total: $${(quantity * price).toFixed(2)})`);
    //     onClose(); // Close the panel after buying
    // };
    //
    // const handleSell = () => {
    //     console.log(`Selling ${quantity} of ${symbol} at $${price} each (Total: $${(quantity * price).toFixed(2)})`);
    //     onClose(); // Close the panel after selling
    // };
    const handleBuy = () => {
        const total = (quantity * price).toFixed(2);
        console.log(`Buying ${quantity} of ${symbol} at $${price} each (Total: $${total})`);
        onClose();
        onOrder({ type: "buy", symbol, quantity, price }); // Notify parent
    };

    const handleSell = () => {
        const total = (quantity * price).toFixed(2);
        console.log(`Selling ${quantity} of ${symbol} at $${price} each (Total: $${total})`);
        onClose();
        onOrder({ type: "sell", symbol, quantity, price }); // Notify parent
    };


    return (
        <div className="placeorder-container">
            <div className="placeorder">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{symbol}</h2>
                <p>Price: ${price.toFixed(2)}</p>
                <div className="quantity-control">
                    <button onClick={decreaseQuantity}>−</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <p>Total: ${(quantity * price).toFixed(2)}</p>
                <div className="order-buttons">
                    <button onClick={handleBuy}>Buy</button>
                    <button onClick={handleSell}>Sell</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;




