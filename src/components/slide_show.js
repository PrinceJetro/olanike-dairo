import React, { useState } from "react";
import "../styles/slideshow.css";
import slides from "../data/slides";


function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="slider-btn left-btn" onClick={goToPrevious}>❮</button>
      
      <div className="slider-content">
        <img src={slides[currentIndex].url} alt="slider" className="slider-img" />
        
        <div className="slider-text">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      
      <button className="slider-btn right-btn" onClick={goToNext}>❯</button>
    </div>
  );
}

export default ImageSlider;
