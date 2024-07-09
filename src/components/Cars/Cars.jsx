/** @format */

import React from "react";
import "./Cars.css";
import Vector from "../../assets/images/vector.png";
import Suitcase from "../../assets/images/suitcase.png";
import Profile from "../../assets/images/profile.png";

const Card = ({ car }) => {
  return (
    <div className="card">
      <img src={car.image} alt={car.model} />
      <div className="card-title">{car.model}</div>
      <div className="card-subtitle">or Similar | {car.type}</div>
      <div className="card-info">
        <span>
          <img src={Profile} alt="seats" /> {car.seats}+
        </span>
        <span>
          <img src={Suitcase} alt="bags" /> {car.bags}+
        </span>
        <span>
          <img src={Vector} alt="" />
        </span>
      </div>
      <div className="card-price">
        AED {car.price} / {car.duration} Days
      </div>
    </div>
  );
};

export default Card;
