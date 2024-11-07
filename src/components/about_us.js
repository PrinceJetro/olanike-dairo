import React from 'react';
import "../styles/about_us.css";
import Navbar from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import world from "../images/world.png";
import ManagementTeam from './management_team';
import Footer from './footer';
import students from "../images/students_in_class1.jpg"
import students2 from "../images/students_in_class2.jpg"
import AnimateOnScroll from './animateOnScroll';


export default function About_us() {
  return (
    <div className="container-fluid p-0 m-0 about_us">
      <Navbar />
        <div className='about_us_intro'>
            <h1>About Us</h1>
        </div>
        
      {/* about-learn Section */}
      <AnimateOnScroll>
      <div className="about-learn-div">
        <div className="div1">
          <h1 className="about-learn-header">Learn - Explore - Grow</h1>
          <p className="about-learn-paragraph">
            We are a team dedicated to providing excellent educational experiences. Our mission is to make learning accessible, engaging, and impactful for students worldwide. Through innovative teaching methods and interactive resources, we aim to foster growth and development in every individual. <br/><br/>
            Our vision is to empower learners to explore new opportunities, acquire critical skills, and achieve their goals in a rapidly changing world. We believe in the transformative power of education and are committed to providing high-quality learning experiences that inspire and motivate.
          </p>
        </div>
        <img src={students} />
      </div>
      </AnimateOnScroll>

      {/* Core Values */}
      <AnimateOnScroll>
      <div className='core_values'>
        <div className='core-values-text-div'>
          <h1>Our Values</h1>
          <p>
            At our core, we believe in the power of knowledge, collaboration, and innovation. We value integrity, responsibility, and excellence in all that we do. Our commitment to creating inclusive and dynamic learning environments drives our approach to teaching and engagement. <br/>
            We embrace diversity, encourage open-mindedness, and strive to provide opportunities for everyone to succeed.
          </p>
        </div>
        <AnimateOnScroll>
        <div className='core-values-value-div'>
          <div>
            <FontAwesomeIcon className='awesome' icon={faBriefcase} />
            <h1>Our Vision</h1>
            <hr />
            <p>Our vision is to create a world where everyone has access to the tools and resources they need to achieve their dreams through learning and development.</p>
          </div>
          <div>
            <FontAwesomeIcon className='awesome' icon={faMagnifyingGlass} />
            <h1>Our Mission</h1>
            <hr />
            <p>Our mission is to deliver an innovative, accessible, and supportive learning experience that helps individuals discover their potential and make a lasting impact on the world.</p>
          </div>
          <div className='bg-light values-div p-3'>
            <img src={world} />
            <h1>Our Mission</h1>
            <hr />
            <ul>
                <li>Empower individuals to succeed in their personal and professional lives</li>
                <li>Foster a culture of continuous learning and growth</li>
                <li>Provide high-quality resources and support for learners of all backgrounds</li>
                <li>Encourage innovation, creativity, and critical thinking</li>
                <li>Support collaboration and teamwork in achieving shared goals</li>
                <li>Promote inclusivity and diversity in learning environments</li>
                <li>Inspire positive change through education</li>
            </ul>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll>
      <ManagementTeam />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <Footer />
      </AnimateOnScroll>
    </div>
  );
}
