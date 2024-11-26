import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import students_in_class from "../images/enhanced/students_in_class.jpg";
import students_in_bus from "../images/enhanced/students in the school bus mod.jpg";
import students_in_computer_lab from "../images/enhanced/students in computer lab.jpg";
import students_in_chemistry_lab from "../images/enhanced/students in chemistry lab.jpg";
import nursery from "../images/nursery.jpg";
import fineart from "../images/fineart.jpg"
import homeecons from "../images/homeecons.jpg"

const slides = [
  {
    url: students_in_class,
    title: "Classroom Learning",
    description: "Pupils engaged in focused learning inside the classroom.",
  },
  {
    url: nursery,
    title: "Nursery Class",
    description: "The foundational class where young children begin their learning journey, building essential skills for future education.",
  },
  {
    url: students_in_bus,
    title: "School Bus Ride",
    description: "Pupils enjoying a safe journey to school on the bus.",
  },
  {
    "url": fineart,
    "title": "Fine Art Studio",
    "description": "Students working creatively on various art projects."
  },
  {
    "url": homeecons,
    "title": "Home Economics Laboratory",
    "description": "Students learning practical skills such as sewing."
  },
  {
    url: students_in_computer_lab,
    title: "Computer Lab",
    description: "Students working on computer-based assignments in the lab.",
  },
  {
    url: students_in_chemistry_lab,
    title: "Chemistry Experiment",
    description: "Students conducting experiments in the chemistry laboratory.",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000); // Change every 7 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency on currentIndex to update the next slide

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
