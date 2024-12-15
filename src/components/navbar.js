import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">QuickRent</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#gadgets">Gadgets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="btn">Sign Up</button>
    </nav>
  );
}

export default Navbar;
