import React, { useState, useEffect, useRef } from "react";
import "../styles/home_about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faChalkboardTeacher, faAward } from "@fortawesome/free-solid-svg-icons";

export default function Home_about() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Intersection Observer to trigger counting when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="home_about row" ref={ref}>
      {/* Left side content: school description */}
      <div className="col-md-6 col-sm-12">
        <h1 className="school_name">Olanike Dairo Schools</h1>
        <p className="school_about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat laudantium esse quisquam voluptas maxime nam, voluptatum similique assumenda magni autem aliquid maiores earum? Molestias sit asperiores recusandae esse nisi!a
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat laudantium esse quisquam voluptas maxime nam, voluptatum similique assumenda magni autem aliquid maiores earum? Molestias sit asperiores recusandae esse nisi!a
        </p>
      </div>

      {/* Right side content: statistics */}
      <div className="col-md-6 col-sm-12 row statistics">
        <StatisticCard
          icon={faAward}
          value={500}
          title="Students"
          isVisible={isVisible}
        />
        <StatisticCard
          icon={faSchool}
          value={45}
          title="Classrooms"
          isVisible={isVisible}
        />
        <StatisticCard
          icon={faChalkboardTeacher}
          value={50}
          title="Teachers"
          isVisible={isVisible}
        />
      </div>
    </div>
  );
}

function StatisticCard({ icon, value, title, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 1000; // 2 seconds
      const incrementTime = Math.floor(duration / end); // Increment per tick

      const counter = setInterval(() => {
        start += 1;
        setCount((prev) => (prev < end ? prev + 1 : end));

        if (start === end) {
          clearInterval(counter); // Stop when we reach the target value
        }
      }, incrementTime);
    }
  }, [isVisible, value]);

  return (
    <div className="col-sm-4 col-12 text-center p-4">
      <FontAwesomeIcon className="icons" icon={icon} />
      <h1>{count}</h1>
      <p>{title}</p>
    </div>
  );
}
