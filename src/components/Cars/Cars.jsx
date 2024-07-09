/** @format */

import React from "react";
import "./Cars.css";
import GearShift from "../../assets/images/vector.png";
import Suitcase from "../../assets/images/suitcase.png";
import Profile from "../../assets/images/profile.png";

const Card = ({ car }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">{car.name}</div>
        <div className="card-subtitle">or Similar | {car.category}</div>
        <div className="">
          <img src={car.image} alt={car.name} className="card-image" />
        </div>
        <div className="card-info">
          <span className="info-badge">
            <img src={Profile} alt="Seats" className="vector-icon" />
            {car.seats}
          </span>
          <span className="info-badge">
            <img src={Suitcase} alt="Bags" className="vector-icon" />
            {car.bags}
          </span>
          <span className="info-badge">
            <img src={GearShift} alt="Gear" className="vector-icon" />
            {car.transmission}
          </span>
        </div>
        <div className="card-price">
          AED {car.price}{" "}
          <span className="card-duration">/ {car.duration} Days</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
