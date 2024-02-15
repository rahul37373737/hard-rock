import React, { useState, useEffect } from "react";
import MenuItems from "../items/MenuItems.js";
import { getMenuItems, addMenuItem } from "./Api.js";
import Addmenu from "../items/Addmenu.js";
// import Deletemenu from "../items/Deletemenu.js";
import "./Admindashboard.css";
// import Modal from "react-modal";

const AdminDashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showloader, setShowloader] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [menuData, setMenuData] = useState([
    // {
    //   id: 1,
    //   name: "Item 1",
    //   description: "Description for Item 1",
    //   price: 10,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 2,
    //   name: "Item 2",
    //   description: "Description for Item 2",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 3,
    //   name: "Item 3",
    //   description: "Description for Item 3",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 4,
    //   name: "Item 4",
    //   description: "Description for Item 4",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 5,
    //   name: "Item 5",
    //   description: "Description for Item 5",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 6,
    //   name: "Item 6",
    //   description: "Description for Item 6",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 7,
    //   name: "Item 7",
    //   description: "Description for Item 7",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 8,
    //   name: "Item 8",
    //   description: "Description for Item 8",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // },
    // {
    //   id: 9,
    //   name: "Item 9",
    //   description: "Description for Item 9",
    //   price: 15,
    //   image:
    //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    // }
  ]);
  const fetchmenuItems = async () => {
    try {
      const items = await getMenuItems();
      setMenuData(items);
      setShowloader(false);
    } catch (error) {
      console.log(error, " there is a error");
      setShowloader(false);
    }
  };

  useEffect(() => {
    fetchmenuItems();
  }, []);

  const handleAddMenuItem = async (formData) => {
    try {
      const newItem = await addMenuItem(formData);
      setMenuData((prevMenuData) => [...prevMenuData, newItem]);
      setShowAddModal(false);
      setShowloader(true);
      console.log("data has been added succesfully");
    } catch (error) {
      console.log("Error adding menu item:", error);
    }
  };

  // const handleMenuItemDeleteClick = (menuItem) => {
  //   setSelectedMenuItem(menuItem);
  //   setShowDeleteModal(true);
  // };
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button
        className="add-menu-item-button"
        onClick={() => setShowAddModal(true)}
      >
        Add Menu Item
      </button>
      <div className="menu-items-container">
        <MenuItems menuData={menuData} isAdmin={true} />
      </div>
      <div className="add-menu-item-button-container"></div>
      <Addmenu
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddMenuItem}
      />
    </div>
  );
};

export default AdminDashboard;
