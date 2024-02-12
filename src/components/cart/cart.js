import React from "react";

const CartModal = ({ cartItems, handleClose }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      <button onClick={handleClose}>Close</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartModal;
