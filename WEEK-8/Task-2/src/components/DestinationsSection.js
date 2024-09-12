// DestinationsSection.js
import React from "react";

function DestinationsSection() {
  const destinations = [
    {
      name: "Paris",
      description: "The city of lights and love.",
      image: "paris.jpg",
    },
    {
      name: "Tokyo",
      description: "A city where tradition meets the future.",
      image: "tokyo.jpg",
    },
    {
      name: "New York",
      description: "The city that never sleeps.",
      image: "nyc.jpg",
    },
  ];

  return (
    <section id="destinations" className="destinations-section">
      <h2>Popular Destinations</h2>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
