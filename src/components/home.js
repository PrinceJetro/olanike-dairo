import React from 'react';
import "../styles/home.css";
import general from "../data/general";
import Navbar from './nav';
import ImageSlider from './slide_show';
import Why_us from './why_us';
import About from './about_us';
import TestimonialSlider from './testimonials';
import EducationGallery from './gallery';
import GetInTouch from './get_in_touch';
import Footer from './footer';

export default function Home() {
  return (
    <div className="container-fluid p-0 m-0 home">
      <div className="slider">
      
      <div className="slider-content">
        <img src={general.school_image}alt="slider" className="slider-img" />
        
        <div className="slider-text">
          <h1>{general.school_name} College</h1>
          <p>{general.school_moto}</p>
        </div>
      </div>
      
    </div>

          {/* Director's Section */}
          <div className="director_div mb-5 mt-5">
        <div>
          <img src={general.director_image} alt="Director" className="director_image" />
        </div>
        <div className="director_div_text">
          <h1>The Director</h1>
          <p>{general.director_speech}</p>
        </div>
      </div>


      {/* Image Slider */}
      <ImageSlider />

      {/* Why Us Section */}
      <Why_us />

      {/* Look Around */}
      <h1 className='about_us_text'>About Us</h1>
      <About/>
      <TestimonialSlider/>
      <EducationGallery/>
      <GetInTouch/>
      <Footer/>


    </div>
  );
}
