/** @format */

import React, { useState } from "react";
import "./Dropdown.css";
import DropdownArrow from "../../assets/images/dropdown_arrow_down.svg";

const Dropdown = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (!selectedOption) return name;
    return name.includes("Vehicle Type")
      ? `${name} (${selectedOption.label})`
      : selectedOption.label;
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {getDisplayValue()}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          <img src={DropdownArrow} alt="dropdown icon" />
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.icon && (
                <img src={option.icon} alt="icon" className="dropdown-icon" />
              )}
              {/* // <img src={option.icon} alt="icon" className="dropdown-icon" /> */}
              <span className="dropdown-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
