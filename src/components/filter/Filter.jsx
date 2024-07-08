/** @format */

import React, { useState } from "react";
import "./Filter.css";

const Filters = () => {
  const [isSortOpen, setSortOpen] = useState(false);

  const toggleSort = () => setSortOpen(!isSortOpen);

  return (
    <div className="filters">
      <div className={`custom-select ${isSortOpen ? "open" : ""}`}>
        <div className="custom-select-trigger" onClick={toggleSort}>
          Sort By: None
        </div>
        <div className="custom-options">
          <span className="custom-option">Price: Low to High</span>
          <span className="custom-option">Price: High to Low</span>
        </div>
      </div>
      <select>
        <option>Vehicle Type</option>
        <option>Sedan</option>
        <option>SUV</option>
        <option>Convertible</option>
      </select>
      <select>
        <option>Gear Shift</option>
        <option>Manual</option>
        <option>Automatic</option>
      </select>
      <select>
        <option>Bags</option>
        <option>2+</option>
        <option>4+</option>
      </select>
      <select>
        <option>Seats</option>
        <option>4+</option>
        <option>6+</option>
      </select>
    </div>
  );
};

export default Filters;
