import React, { useState } from "react";

const AddMenuItemModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenuItem = {
      name,
      description,
      price: parseFloat(price),
      image
    };
    onAdd(newMenuItem);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Menu Item</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label>Image URL:</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItemModal;
