import React, { useState } from "react";
import "./LeftSidebar.css";

function LeftSidebar({ products, setProducts }) {
  let initialValue = { brandName: "", price: "", offer: "", imageUrl: "" };

  const [formValue, setFormValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      image: formValue.imageUrl.startsWith("http")
        ? formValue.imageUrl
        : `/images/${formValue.imageUrl}`,
      name: formValue.brandName,
      price: parseInt(formValue.price, 10) || 0,
      discount: formValue.offer.replace("%", "") + "%",
    };

    setProducts([...products, newProduct]);
    setFormValue(initialValue);
  };
  return (
    <div className="sidebar-left">
      <div className="filter-section">
        <h3>Size - UK/India</h3>
        {[6, 7, 8, 9, 10].map((size) => (
          <label key={size}>
            <input type="checkbox" />
            {size}
          </label>
        ))}
      </div>
      <div className="form-left">
        <form onSubmit={handleClick}>
          <legend>Product Details</legend>
          <input
            type="text"
            name="brandName"
            className="input-brand"
            placeholder="Brand Name"
            value={formValue.brandName}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            className="input-number"
            placeholder="Enter Price"
            value={formValue.price}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter Image URL"
            className="input-url"
            value={formValue.imageUrl}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="offer"
            className="input-offer"
            value={formValue.offer}
            onChange={handleInputChange}
            placeholder="Offer %"
            required
          />
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default LeftSidebar;
