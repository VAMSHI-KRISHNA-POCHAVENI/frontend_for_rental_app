import React from "react";
import "./hero.css";
import startImage from "../assets/OIP.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Favorite Gadgets, Just a Rent Away!</h1>
        <p>Discover our extensive selection of gadgets, designed to meet your unique needs.</p>
        <button className="btn-cta">Explore</button>
      </div>
      <div className="hero-image">
        <img src={startImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
