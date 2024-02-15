import React, { createContext, useContext, useReducer, useEffect } from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import reducer from "./reducer";
import { getMenuItems } from "../components/Pages/Api"; // Assuming you have an API module with getMenuItems function

// create a context
export const CartContext = createContext();

const initialState = {
  items: [], // Initialize items as an empty array since products will be fetched from the API
  totalAmount: 0, // Initialize totalAmount as 0
  totalItems: 0,
  quantity: 1
};

const Cart = () => {
  // Use useEffect hook to fetch menu items from API when component mounts
  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const menuItems = await getMenuItems();
        // Dispatch an action to update state with fetched menu items
        dispatch({ type: "SET_PRODUCTS", payload: menuItems });
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }

    fetchMenuItems();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  // inPlace of useState we will use the useReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...state, clearCart, removeItem, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;
