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





export default function About_us() {
  return (
    <div className="container-fluid p-0 m-0 about_us">
      <Navbar/>
        <div className='about_us_intro'>
            <h1>About Us</h1>
        </div>
        
      {/* about-learn Section */}
      <div className="about-learn-div">
        <div className="div1">
          <h1 className="about-learn-header">Learn - Explore - Grow</h1>
          <p className="about-learn-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent ut ligula egestas erat imperdiet. Curabitur sodales ligula in libero sodales. Proin sagittis, diam sit amet lacinia sagittis, est ligula euismod purus, ut scelerisque felis arcu sit amet felis.
      </p>

        </div>
        <img src={students} />
      </div>
      {/* Core Values */}
      <div className='core_values'>
        <div className='core-values-text-div'>
          <h1>Our Values</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora!</p>
        </div>
        <div className='core-values-value-div'>
          <div>
            <FontAwesomeIcon className='awesome' icon={faBriefcase}/>
            <h1>Our Vision</h1>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero</p>
          </div>
          <div>
          <FontAwesomeIcon className='awesome' icon={faMagnifyingGlass}/>
          <h1>Our Vision</h1>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero</p>
          </div>
          <div className='bg-light values-div p-3'>
    <img src={world} />
    <h1>Our Mission</h1>
    <hr />
    <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam</li>
        <li>Quis nostrud exercitation ullamco</li>
        <li>Duis aute irure dolor in reprehenderit</li>
    </ul>
</div>
        </div>

      </div>

      <ManagementTeam/>
      <Footer/>





    </div>
  );
}
