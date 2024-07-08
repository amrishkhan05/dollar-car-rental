/** @format */

import React from "react";
import Filters from "../components/filter/Filter";
import Cars from "../components/Cars/Cars";
import "./Home.css";

const cars = [
  {
    name: "BMW 2 Series",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/bmw-2-series.jpg", // Replace with actual image URL
  },
  {
    name: "Nissan Centra",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/nissan-centra.jpg", // Replace with actual image URL
  },
  {
    name: "Toyota Corolla",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/toyota-corolla.jpg", // Replace with actual image URL
  },
  {
    name: "Toyota Camry",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/toyota-camry.jpg", // Replace with actual image URL
  },
  {
    name: "Toyota Rav 4",
    type: "or Similar",
    category: "SUV",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/toyota-rav4.jpg", // Replace with actual image URL
  },
  {
    name: "BMW Z4 Convertible",
    type: "or Similar",
    category: "Premium",
    seats: "4+",
    bags: "2+",
    transmission: "Manual",
    price: "1,850",
    duration: "21 Days",
    image: "https://example.com/bmw-z4-convertible.jpg", // Replace with actual image URL
  },
];

const HomePage = () => (
  <div className="home-page">
    <Filters />
    <div className="car-list">
      {cars.map((car) => (
        <Cars key={car.name} car={car} />
      ))}
    </div>
  </div>
);

export default HomePage;
