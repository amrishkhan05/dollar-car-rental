/** @format */

import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/redlogo.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import TikTokIcon from "../../assets/images/tiktok.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li>
              <a href="/rental-policies">Rental Policies</a>
            </li>
            <li>
              <a href="/refund-policies">Refund Policies</a>
            </li>
            <li>
              <a href="/driver-policies">Driver Policies</a>
            </li>
            <li>
              <a href="/other-policies">Other Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help & Support</h4>
          <ul>
            <li>
              <a href="/support">Get Support</a>
            </li>
            <li>
              <a href="/complaints">Complaints</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with us</h4>
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Call us Now</h4>
          <ul>
            <li>800 - 4710 (Dubai)</li>
            <li>800 - 9100 (Abu Dhabi)</li>
            <li>+971 - 4 - 336 - 5065 (International Reservation)</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img
            src={Logo}
            alt="Dollar Car Rental Logo"
            className="footer-logo"
          />
          <p>Copyright © 2024 Dollar Inc. All Rights Reserved</p>
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy & Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/refund">Refund</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={TwitterIcon} alt="Twitter" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={TikTokIcon} alt="TikTok" />
          </div>

          <p>United Arab Emirates (UAE)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
