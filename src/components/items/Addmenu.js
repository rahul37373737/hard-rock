import React, { useState } from "react";
import Modal from "react-modal";
import "./itemslist.css";

const AddMenu = ({ isOpen, onClose, onAdd }) => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", itemName);
    formData.append("quantity", itemQuantity);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("images", image);
    onAdd(formData);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="modal-content">
        <h2>Add New Menu Item</h2>
        <form onSubmit={handleSubmit} encType="multipart/from-data">
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
          <label>
            Item Quantity:
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              name="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <label>
            category:
            <textarea
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Add Item</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddMenu;
