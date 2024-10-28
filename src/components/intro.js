import React, { useEffect, useState } from 'react';
import "../styles/intro.css";
import logo from "../images/logo.png";
import Navbar from './nav';
import { Link } from 'react-router-dom';
import director_in_office from "../images/enhanced/director_in_office.jpg"
import teacher_and_students_primary from "../images/enhanced/teacher_and_students_primary.jpg"



export default function Intro() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-fluid p-0 m-0 intro">
      <section className="section-top"></section>
      <nav className={`navbar navbar-expand-lg fixed-top p-3 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="School Logo" />
        </Link>
      </div>
    </nav>





      {/* Welcome Message Section */}
      <div className="welcome-message-div">
        <div className="div1">
          <h1 className="welcome-header">Welcome to Olanike Dairo Schools</h1>
          <p className="welcome-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <img src={director_in_office} />
      </div>

      {/* Coordinator Section */}
      <div className="coordinator-div">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8ksaf1HR4QnQ9-kOo2YldWfdDW06REWEsQ&s" alt="Coordinator" />
        <div className="div1">
          <h1 className="coordinator-header">FROM THE COORDINATOR OF Programs</h1>
          <p className="coordinator-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tempor elit, nec congue erat. Curabitur elementum eros sed metus gravida, id cursus mi sollicitudin. <br/><br/>
            Suspendisse vel nulla id magna fermentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus suscipit purus id justo facilisis, vel efficitur magna convallis. Duis vitae orci at urna fermentum malesuada. In in odio nec magna consectetur sollicitudin.
          </p>
        </div>
      </div>

      <div className='school-intro-div'>
      <h1>Our Schools</h1>
      <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam habitasse platea dictumst. In tincidunt lorem ut sapien luctus, in convallis augue convallis. Fusce ac nisl non mi consequat volutpat. Proin sodales velit sed magna fermentum, vel venenatis felis efficitur.</p>
      </div>
      </div>

            {/* Primary Section */}
            <div className="primary-div">
        <img src={teacher_and_students_primary} alt="primary" />
        <div className="div1">
          <h1 className="primary-header">Olanike Dairo Primary School</h1>
          <p className="primary-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, nunc vel tincidunt egestas, sapien metus bibendum lectus, eget ullamcorper nulla nunc eget nunc.
          </p>
        </div>
      </div>


            {/* secondary Section */}
            <div className="secondary-div">
        <div className="div1">
          <h1 className="secondary-header">Olanike Dairo Secondary School</h1>
          <p className="secondary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, nunc vel tincidunt egestas, sapien metus bibendum lectus, eget ullamcorper nulla nunc eget nunc.</p>
        </div>
        <img src="https://thumbs.dreamstime.com/z/cheerful-teacher-students-portrait-group-multi-ethnic-kids-their-african-american-teacher-english-language-posing-319486900.jpg" alt="secondary" />
      </div>


      <footer>
        <p>Copyright {new Date().getFullYear()}. Olanike Dairo Schools. All Right Reserved.</p>
      </footer>


















    </div>
  );
}
