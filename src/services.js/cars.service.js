/** @format */

import axios from "axios";

const BASE_URL =
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20";
const imageUrl =
  "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg";
export const fetchCarDetails = async () => {
  try {
    const response = await axios.get(BASE_URL);
    let data = response.data.results;
    if (!data) {
      console.error("No car details found");
      return [];
    }
    // console.log("Car details fetched successfully:", data);
    // data.forEach((car) => {
    //   return {
    //     name: car.model,
    //     type: car.vehicle_type,
    //     image: imageUrl,
    //     price: car.price,
    //     duration: car.duration,
    //     seats: getRandomSeat(),
    //     bags: car.bags,
    //     gear: car.gear_shift,
    //   };
    // });
    // console.log("Car details fetched successfully:");
    return response.data.records;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return [];
  }
};

function getRandomSeat() {
  const seats = [4, 5, 2, 6, 7, 8];
  const randomIndex = Math.floor(Math.random() * seats.length);
  return seats[randomIndex];
}
