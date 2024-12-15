import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Gadgets from "./components/gadgets";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Gadgets />
      <Contact />
    </div>
  );
}

export default App;
