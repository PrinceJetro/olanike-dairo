import React from 'react';
import "../styles/home.css";
import Navbar from './nav';
import ImageSlider from './slider';
import Home_about from './home_about';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faChalkboardTeacher, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Why_us from './why_us';
import GetInTouch from './get_in_touch';
import Footer from './footer';
import Testimonial from './testimonial';
import EducationGallery from './gallery';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="container-fluid p-0 m-0 home">
      <Navbar/>
      <ImageSlider/>
      <Home_about/>
      <Why_us/>
      <div className='home_admission'>
        <div>
        <h1>ADMISSION {new Date().getFullYear() -1} / {new Date().getFullYear()}</h1>
        <p>The Admission Process is designed to enroll students demonstrating promise. Registration does not imply admission, but it is subject to the availability of seats and fulfilling admission criteria.</p>
        <Link to={"/contact"}> <button className="btn text-bright">  Register Your Children Today <FontAwesomeIcon className='arrow-right' icon={faArrowCircleRight}/></button></Link>
        </div>
      </div>
      <GetInTouch/>
      <EducationGallery/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
