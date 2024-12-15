import React from "react";
import "./features.css";

function Features() {
  const features = [
    { title: "Flexible Rental Periods", description: "Options for daily, weekly, monthly, or long-term rentals." },
    { title: "Try Before You Buy", description: "Test new tech before committing to a purchase." },
    { title: "Sustainability", description: "Encourages a circular economy by reducing e-waste through reuse." },
  ];

  return (
    <section id="features" className="features">
      <h2>Platform Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
