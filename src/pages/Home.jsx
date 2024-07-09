/** @format */

import React, { useEffect, useState } from "react";
import Filters from "../components/filter/Filter";
import Cars from "../components/Cars/Cars";
import "./Home.css";
import { fetchCarDetails } from "../services.js/cars.service";
import Car from "../assets/images/car.png";
const cars = [
  {
    name: "BMW 2 Series",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
  {
    name: "Nissan Centra",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Automatic",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
  {
    name: "Toyota Corolla",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
  {
    name: "Toyota Camry",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Automatic",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
  {
    name: "Toyota Rav 4",
    category: "SUV",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
  {
    name: "BMW Z4 Convertible",
    category: "Premium",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: Car,
  },
];
const HomePage = () => {
  return (
    <div className="home-page">
      <Filters />
      <div className="car-list">
        {cars.map((car) => (
          <Cars key={car.name} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
