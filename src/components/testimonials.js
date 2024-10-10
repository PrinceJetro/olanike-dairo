import React, { useState, useEffect } from "react";
import "../styles/TestimonialSlider.css";
import testimonial_data from "../data/testimonial_data";


function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonial_data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic scrolling effect using setInterval
  useEffect(() => {
    const interval = setInterval(goToNext, 4000); // Change every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="testimonial-slider">
        <h1>Testimonials</h1>
      <div className="testimonial-card">
        <img
          src={testimonial_data[currentIndex].image}
          alt={testimonial_data[currentIndex].name}
          className="testimonial-image"
        />
        <h3 className="testimonial-name">{testimonial_data[currentIndex].name}</h3>
        <p className="testimonial-text">{testimonial_data[currentIndex].text}</p>
      </div>
      <div className="testimonial-nav">
        {testimonial_data.map((_, index) => (
          <span
            key={index}
            className={`testimonial-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
