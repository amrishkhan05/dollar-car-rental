/** @format */

import React from "react";
import "./Cars.css";

const Cars = ({ car }) => (
  <div className="car-card">
    <img src={car.image} alt={car.name} className="car-image" />
    <div className="car-details">
      <h3>{car.name}</h3>
      <p>
        {car.type} | {car.category}
      </p>
      <div className="car-info">
        <span>{car.seats}</span>
        <span>{car.bags}</span>
        <span>{car.transmission}</span>
      </div>
      <div className="car-price">
        <span>AED {car.price}</span> / {car.duration}
      </div>
    </div>
  </div>
);

export default Cars;
