import React, { useState, useEffect, useContext, createContext } from "react";
import MenuItems from "../items/MenuItems.js";
import "./userdashboard.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  getMenuItems,
  getBreakfastItems,
  getLunchItems,
  getShakesItems
} from "./Api.js";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const UserDashboard = () => {
  const [menuData, setMenuData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const items = await getMenuItems();
      setMenuData(items);
    } catch (error) {
      console.log(error, " there is a error");
    }
  };

  const fetchBreakfastItems = async () => {
    try {
      const items = await getBreakfastItems();
      setMenuData(items);
    } catch (error) {
      console.log(error, " there is a error");
    }
  };

  const fetchLunchItems = async () => {
    try {
      const items = await getLunchItems();
      setMenuData(items);
    } catch (error) {
      console.log(error, " there is a error");
    }
  };

  const fetchShakesItems = async () => {
    try {
      const items = await getShakesItems();
      setMenuData(items);
    } catch (error) {
      console.log(error, " there is a error");
    }
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <div className="button-container">
        <div className="user-dashboard">
          <div className="dashboard-buttons">
            <Link to="/all">
              <button className="dashboard-button" onClick={fetchMenuItems}>
                All
              </button>
            </Link>
            <Link to="/breakfast">
              <button
                className="dashboard-button"
                onClick={fetchBreakfastItems}
              >
                Breakfast
              </button>
            </Link>
            <Link to="/lunch">
              <button className="dashboard-button" onClick={fetchLunchItems}>
                Lunch
              </button>
            </Link>
            <Link to="/shakes">
              <button className="dashboard-button" onClick={fetchShakesItems}>
                Shakes
              </button>
            </Link>
          </div>
          <h1>Sun Rise</h1>
          <div className="cart-icon" onClick={toggleCart}>
            <BsCart />
            <span className="cart-count">{cartItems.length}</span>
          </div>
          {showCart && (
            <div className="cart-modal">
              <div className="cart-modal-content">
                <span className="close" onClick={toggleCart}>
                  &times;
                </span>
                <h2>Cart Items</h2>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      <div>{item.name}</div>
                      <div>{item.description}</div>
                      <div>{item.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <MenuItems menuData={menuData} addToCart={addToCart} />
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default UserDashboard;
