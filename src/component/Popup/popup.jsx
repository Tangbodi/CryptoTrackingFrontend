import React, { useState } from 'react';
import './popup.css'
const Popup = ({ symbol, onClose }) => {
    const [side, setSide] = useState("BUY");  // Default side is BUY
    const [quantity, setQuantity] = useState(1);  // Default quantity
    const [price, setPrice] = useState(0);  // Default price

    const handleOrderPlacement = () => {
        console.log(`Order placed: ${side} ${quantity} of ${symbol} at ${price}`);
        // Logic to place the order can go here
        onClose(); // Close the popup after order placement
    };

    return (
        <div className="popup-container">
            <div className="popup-content">
                <h2>Place Order</h2>
                <div className="order-form">
                    <div className="form-group">
                        <label>Symbol:</label>
                        <span>{symbol}</span>
                    </div>

                    <div className="form-group">
                        <label>Side:</label>
                        <select value={side} onChange={(e) => setSide(e.target.value)}>
                            <option value="BUY">BUY</option>
                            <option value="SELL">SELL</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Quantity:</label>
                        <input 
                            type="number" 
                            value={quantity} 
                            min="1" 
                            onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </div>
  
                    <div className="form-group">
                        <label>Price:</label>
                        <input 
                            type="number" 
                            value={price} 
                            min="0" 
                            step="0.01" 
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <button onClick={handleOrderPlacement}>Place Order</button>
                    </div>


                    <div className="form-group">
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
