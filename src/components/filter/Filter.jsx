/** @format */

import React, { useState } from "react";
import "./Filter.css";
import Dropdown from "../DropDown/Dropdown";
const Filters = () => {
  const [isSortOpen, setSortOpen] = useState(false);

  const toggleSort = () => setSortOpen(!isSortOpen);

  return (
    <div className="filters">
      <div className={`custom-select ${isSortOpen ? "open" : ""}`}>
        <div className="custom-select-trigger" onClick={toggleSort}>
          Sort By: None
          <span className="arrow">▼</span>
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
      <Dropdown />
    </div>
  );
};

export default Filters;
