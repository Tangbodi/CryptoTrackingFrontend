import React, { useState } from 'react';
import './placeOrder.css'
import { placeOrderAPI } from '../../request/api';

const PlaceOrder = ({ symbol, id, onClose }) => {

    const [side, setSide] = useState("BUY");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleOrderPlacement = () => {
        const cryptoId = id;
        const userId = sessionStorage.getItem('user-id');
        const parsedQuantity = parseInt(quantity, 10);
        const parsedPrice = parseFloat(price);
        const params = {
            userId,
            cryptoId,
            symbol,
            quantity: parsedQuantity, 
            type: side === 'BUY' ? 1 : 0, 
            price: parsedPrice,
        };
        console.log(`Order placed: ${side === 'BUY' ? 1 : 0} ${quantity} of ${symbol} at ${price} with id ${id} the user is ${userId}`);

        placeOrderAPI(params)
            .then((response) => {
                console.log('Order response:', response.data);
                onClose();
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Backend returned an error:', error.response.data);
                } else if (error.request) {
                    console.error('No response from backend:', error.request);
                } else {
                    console.error('Error setting up request:', error.message);
                }
            });

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

export default PlaceOrder;
