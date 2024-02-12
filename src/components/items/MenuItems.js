// import "./swiggy.avif";
import React from "react";
import "./itemslist.css";

const MenuItems = ({ menuData, addToCart }) => {
  return (
    <div className="menu-items">
      {menuData.map((item) => (
        <div key={item._id} className="menu-item">
          <h3>{item.item_name}</h3>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t6av3q7weumzdozcmowp"
            alt="NO Imag"
          />
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
