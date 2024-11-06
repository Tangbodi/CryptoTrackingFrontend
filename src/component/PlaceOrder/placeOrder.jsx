import React, { useState } from 'react';
import './placeOrder.css'
const PlaceOrder = ({ symbol }) => {
    console.log(symbol+"order")
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleBuy = () => {
    console.log(`Buying ${quantity} of ${symbol}`);
  };

  const handleSell = () => {
    console.log(`Selling ${quantity} of ${symbol}`);
  };

  return (
    <div className='placeorder'>
      <h2>{symbol}</h2>
      <div>
        <button onClick={decreaseQuantity}>−</button>
        <input
          type="number"
          value={quantity}
          readOnly
        />
        <button onClick={increaseQuantity}>+</button>
      </div>
      <div>
        <button onClick={handleBuy} >
          Buy
        </button>
        <button onClick={handleSell} >
          Sell
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
