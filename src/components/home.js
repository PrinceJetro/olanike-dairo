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
import AnimateOnScroll from './animateOnScroll';



export default function Home() {
  return (
    <div className="container-fluid p-0 m-0 home">
      <Navbar/>
      <ImageSlider/>
      <AnimateOnScroll>
      <Home_about/>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <Why_us/>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <div className='home_admission'>
  <div>
    <h1>ADMISSION {new Date().getFullYear()} / {new Date().getFullYear() + 1}</h1>
    <p>Olanike Dairo Schools offer a well-rounded educational experience for children of all ages. Our primary school lays the foundation for lifelong learning, while our secondary school prepares students for their next step in life, whether in further education or the workforce. We offer a nurturing, challenging, and inclusive environment to help each child reach their full potential. Join our family and be a part of a community that values academic excellence and personal growth.</p>
    <Link to={"/contact"}>
      <button className="btn text-bright">
        Contact Us Today <FontAwesomeIcon className='arrow-right' icon={faArrowCircleRight} />
      </button>
    </Link>
  </div>
</div>
</AnimateOnScroll>

      <AnimateOnScroll><GetInTouch/></AnimateOnScroll>
      <AnimateOnScroll><EducationGallery/></AnimateOnScroll>
      <AnimateOnScroll><Testimonial/></AnimateOnScroll>
      <AnimateOnScroll><Footer/></AnimateOnScroll>
    </div>
  );
}
