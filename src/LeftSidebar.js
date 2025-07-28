import React, { useState } from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");

  const handleInputBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleInputPrice = (e) => {
    setPrice(e.target.value);
  };
  const handleInputOffer = (e) => {
    setOffer(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(brand);
    console.log(price);
    console.log(offer);
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
        <form action="post" onSubmit={handleClick}>
          <legend>Product Details</legend>
          <input
            type="text"
            name="brandName"
            className="input-brand"
            placeholder="Brand Name"
            value={brand}
            onChange={handleInputBrand}
            required
          />
          <input
            type="number"
            name="price"
            className="input-number"
            placeholder="Enter Price"
            value={price}
            onChange={handleInputPrice}
            required
          />
          <input
            type="url"
            name="imageUrl"
            placeholder="Enter Image URL"
            className="input-url"
          />
          <input
            type="text"
            name="offer"
            className="input-offer"
            value={offer}
            onChange={handleInputOffer}
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
