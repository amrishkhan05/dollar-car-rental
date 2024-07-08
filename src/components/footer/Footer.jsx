/** @format */
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-sections">
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li>Rental Policies</li>
          <li>Refund Policies</li>
          <li>Driver Policies</li>
          <li>Other Policies</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help & Support</h4>
        <ul>
          <li>Get Support</li>
          <li>Complaints</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect with us</h4>
        <ul>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Call us Now</h4>
        <ul>
          <li>800 - 4710 (Dubai)</li>
          <li>800 - 9100 (Abu Dhabi)</li>
          <li>+971 - 4 - 336 - 5065 (International Reservations)</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="logo">dollar</div>
      <div className="footer-bottom-info">
        <span>Copyright © 2024 Dollar Inc. All Rights Reserved</span>
        <span>Privacy & Policy | Terms of Use | Refund | Sitemap</span>
      </div>
    </div>
  </footer>
);

export default Footer;
