import React from "react";
import "./itemslist.css";
import "./swiggy.avif";
// import { CartState } from "../context/context.js";

const MenuItems = ({ menuData, addToCart, removeFromCart, isAdmin }) => {
  return (
    <div className="menu-items">
      {menuData?.map((item) => (
        <div key={item._id} className="menu-item">
          <h3>{item?.name}</h3>
          <img height="100px" src={item.images} alt=" swiggy.avif" />
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <div>
            {isAdmin ? (
              <button>Delete</button>
            ) : (
              <>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => removeFromCart(item._id)}>
                  Remove from Cart
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
