/** @format */

import React, { useState } from "react";
import "./Filter.css";
import Dropdown from "../DropDown/Dropdown";
import SuvIcon from "../../assets/images/suv.svg";
import MiniIcon from "../../assets/images/mini.svg";
import CommercialIcon from "../../assets/images/commercial.svg";
import LowtoHigh from "../../assets/images/lowtoHigh.svg";
import HightoLow from "../../assets/images/highToLow.svg";
import Popular from "../../assets/images/popularity.svg";
import GearShift from "../../assets/images/gear-shift1.svg";
import Automatic from "../../assets/images/Subtract.svg";

const vehicleTypes = [
  { value: "SUV", label: "SUV", icon: SuvIcon },
  { value: "Mini", label: "Mini", icon: MiniIcon },
  { value: "Commercial", label: "Commercial", icon: CommercialIcon },
];

const bags = [
  { value: "1+", label: "1+" },
  { value: "2+", label: "2+" },
  // add other bag options with their respective icons...
];

const gearShift = [
  { value: "Manual", label: "Manual", icon: GearShift },
  { value: "Automatic", label: "Automatic", icon: Automatic },
];

const seats = [
  { value: "2+", label: "2+" },
  { value: "4+", label: "4+" },
  // add other seat options with their respective icons...
];

const sortOptions = [
  { value: "Low to High", label: "Low to High", icon: LowtoHigh },
  { value: "High to Low", label: "High to Low", icon: HightoLow },
  { value: "Popular", label: "Popular", icon: Popular },
];

const Filters = () => {
  const [isSortOpen, setSortOpen] = useState(false);

  const toggleSort = () => setSortOpen(!isSortOpen);

  return (
    <div className="filters">
      <Dropdown name="Sort By" options={sortOptions} />
      <Dropdown name="Vehicle Type" options={vehicleTypes} />
      <Dropdown name="Gear Shift" options={gearShift} />
      <Dropdown name="Bags" options={bags} />
      <Dropdown name="Seats" options={seats} />
    </div>
  );
};

export default Filters;
