/** @format */

import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">dollar</div>
    <div className="nav">
      <div className="location-info">
        <span>Dubai Airport - Terminal 1</span>
        <span>to</span>
        <span>Dubai Airport - Terminal 2</span>
        <span>18 May | 12:30 AM</span>
        <span>to</span>
        <span>27 Jun | 12:30 AM</span>
      </div>
      <div className="user-actions">
        <button>Login | Register</button>
      </div>
    </div>
  </header>
);

export default Header;
