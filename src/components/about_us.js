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
            We have a well-rounded education from crèche to our terminal class in college. Our rich and integrated curricula and a vast array of co-curricular activities enjoyed by our students explain why we are able to do so well. This success is seen in the excellent academic results and high moral rectitude of our students. <br/><br/>
            Comments from our parents on the quality of education their children receive at Royal King’s Schools rate the school 90%. Our learners are happy, making good academic progress. The teachers are of high quality and seasoned professionals. Parents consider their input in teaching and encouragement of their wards as friendly and great strength.
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
            <img src={world}/>
            <h1>Our Mission</h1>
            <hr />
            <ul>
          <li>Godliness</li>
          <li>Child Centeredness</li>
          <li>Integrity</li>
          <li>Self-discipline</li>
          <li>Consistent excellence</li>
          <li>Innovation</li>
          <li>Entrepreneurship</li>
        </ul>
          </div>

        </div>

      </div>

      <ManagementTeam/>
      <Footer/>





    </div>
  );
}
