/** @format */

import React from "react";
import "./Header.css";
import EditIcon from "../../assets/images/edit.png";
import DollarLogo from "../../assets/images/logo.svg";
import ArrowIcon from "../../assets/images/arrow.svg";
import UserIcon from "../../assets/images/user.svg";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={DollarLogo} alt="Dollar Logo" />
    </div>
    <div className="nav-input">
      <div>
        <p className="place-name">Dubai Airport - Terminal 1</p>
        <p className="date-time">18 May | 12:30 AM</p>
      </div>
      <div>
        <img src={ArrowIcon} alt="to" className="arrow-icon" />
      </div>
      <div>
        <p className="place-name">Dubai Airport - Terminal 2</p>
        <p className="date-time">27 Jun | 12:30 AM</p>
      </div>
      <img src={EditIcon} alt="edit" className="edit-icon" />
    </div>
    <div className="user-actions">
      <button>
        <img src={UserIcon} alt="edit" className="edit-icon" />
        <span className="btn-name"> Login | Register</span>
      </button>
    </div>
  </header>
);

export default Header;
