import React from "react";
import "./gadgets.css";
import projectorImg from "../assets/projector.jpeg";
import TabImg from "../assets/tab.jpeg";
import DroneImg from "../assets/drone1.png";

function Gadgets() {
  const gadgets = [
    { name: "Projector", price: "1000Rs/day", image: projectorImg },
    { name: "Tab", price: "500Rs/day", image: TabImg },
    { name: "Drone", price: "$2500Rs/day", image: DroneImg },
  ];

  return (
    <section id="gadgets" className="gadgets">
      <h2>Available Gadgets</h2>
      <div className="gadget-list">
        {gadgets.map((gadget, index) => (
          <div key={index} className="gadget">
            <img src={gadget.image} alt={gadget.name} />
            <h3>{gadget.name}</h3>
            <p>{gadget.price}</p>
            <button className="btn">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gadgets;
