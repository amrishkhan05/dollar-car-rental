/** @format */

import React, { useEffect, useState } from "react";
import Filters from "../components/filter/Filter";
import Cars from "../components/Cars/Cars";
import "./Home.css";
import { fetchCarDetails } from "../services.js/cars.service";
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
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
  },
  {
    name: "Nissan Centra",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Automatic",
    price: "1,850",
    duration: "21 Days",
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
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
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
  },
  {
    name: "Toyota Camry",
    type: "or Similar",
    category: "Sedan",
    seats: "4+",
    bags: "2+",
    transmission: "Automatic",
    price: "1,850",
    duration: "21 Days",
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
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
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
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
    image:
      "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg",
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
