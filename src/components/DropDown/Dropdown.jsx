/** @format */

import React, { useState } from "react";
import "./Dropdown.css";
import dropdownIcon from "../../assets/images/Vector.svg";
import DropdownArrow from "../../assets/images/dropdown_arrow_down.svg";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vehicle Type");

  const options = [
    { value: "SUV", label: "SUV" },
    { value: "Mini", label: "Mini" },
    { value: "Commercial", label: "Commercial" },
    { value: "Electric", label: "Electric" },
    { value: "Premium", label: "Premium" },
    { value: "Compact", label: "Compact" },
    { value: "People Movers", label: "People Movers" },
    { value: "Economy", label: "Economy" },
    { value: "Standard", label: "Standard" },
    { value: "Intermediate", label: "Intermediate" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption}
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
              <img src={dropdownIcon} alt="icon" className="dropdown-icon" />{" "}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
