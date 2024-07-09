/** @format */

import React from "react";
import "./Section.css";
import CallIcon from "../../assets/images/callUs.svg";
import SupportIcon from "../../assets/images/support.svg";

const SectionComponent = () => {
  return (
    <section className="section-component">
      <div className="section-content">
        <h1>Which one you want?</h1>
        <div className="section-actions">
          <div className="action-item">
            <img src={SupportIcon} alt="" />
            <span>Support</span>
          </div>
          <div className="action-separator"></div>
          <div className="action-item">
            <img src={CallIcon} alt="" />
            <span>Call us now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
