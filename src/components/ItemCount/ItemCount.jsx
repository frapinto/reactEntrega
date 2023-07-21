import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrement = () => setCount((prevCount) => (count > initial ? prevCount - 1 : prevCount));

  const handleIncrement = () => setCount((prevCount) => (count < stock ? prevCount + 1 : prevCount));

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button className="count-button" onClick={handleDecrement}>-</button>
        <span className="count-value">{count}</span>
        <button className="count-button" onClick={handleIncrement}>+</button>
      </div>

      <button className="add-to-cart-button" onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default ItemCount;
