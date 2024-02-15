import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext
} from "react";
import { Modal, DropdownButton, Badge } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { getMenuItems } from "./Api.js";
import MenuItems from "../items/MenuItems.js";
import "./userdashboard.css";

const initialState = {
  cartItems: []
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        )
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const UserDashboard = () => {
  const [menuData, setMenuData] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  useEffect(() => {
    // Update document title with cart item count
    document.title = `(${state.cartItems.length}) Cart Items`;
  }, [state.cartItems]);

  const fetchMenuItems = async () => {
    try {
      const items = await getMenuItems();
      setMenuData(items);
    } catch (error) {
      console.log(error, " there is a error");
    }
  };

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { _id: itemId } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    setShowCart(false); // Close modal after clearing cart
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      <div className="button-container">
        <div className="user-dashboard">
          <h1>Sun Rise</h1>
          <DropdownButton
            id="cart-dropdown"
            title={
              <>
                <BsCart />{" "}
                <Badge variant="secondary">{state.cartItems.length}</Badge>
              </>
            }
            onClick={() => setShowCart(true)}
          />
          <MenuItems
            menuData={menuData}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>

      <Modal show={showCart} onHide={() => setShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {state.cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <span
                  className="remove-cart-item"
                  onClick={() => removeFromCart(item._id)}
                ></span>
              </li>
            ))}
          </ul>
          <button className="clear-cart-button" onClick={clearCart}>
            Clear Cart
          </button>
        </Modal.Body>
      </Modal>
    </CartContext.Provider>
  );
};

export default UserDashboard;
