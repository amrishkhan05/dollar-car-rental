/** @format */

// src/App.js
import React from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/Home";
import Footer from "./components/footer/Footer";
import Section from "./components/Section/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <HomePage style={{ borderRadius: "0 0 25px 25px" }} />
      <Footer />
    </div>
  );
}

export default App;
