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
    Olanike Dairo Primary School and Olanike Dairo Secondary School are dedicated to providing quality education in an inclusive and nurturing environment. We aim to foster growth and development in every student, preparing them for future success through dedicated teaching and community engagement.
    <br /><br />
    Our primary school focuses on building a strong foundation for students through a well-rounded curriculum. Emphasis is placed on developing critical thinking skills, creativity, and a love for learning. The school strives to create an environment where each child can flourish academically and socially.
  </p>
</div>
      {/* Right side content: statistics */}
      <div className="col-md-6 col-sm-12 row statistics">
        <StatisticCard
          icon={faAward}
          value={1000}
          title="Learners Impacted"
          isVisible={isVisible}
        />
        <StatisticCard
          icon={faSchool}
          value={3}
          title="Centers of Discovery"
          isVisible={isVisible}
        />
        <StatisticCard
          icon={faChalkboardTeacher}
          value={50}
          title="Inspiring Mentors"
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
