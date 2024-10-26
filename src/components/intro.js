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
            I hope it will give you an insight into the enjoyable life of our school. I appreciate God for affording me the privilege to lead the schools. <br/><br/>
            As a school, we believe in developing a whole child with emphasis on moral and academic success. I also know the importance of appreciating the wider achievements of our students council where representatives are able to voice their concerns and take responsibility for introducing change within the school.
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
            We have a well-rounded education from crèche to our terminal class in college. Our rich and integrated curricula and a vast array of co-curricular activities enjoyed by our students explain why we are able to do so well. This success is seen in the excellent academic results and high moral rectitude of our students. <br/><br/>
            Comments from our parents on the quality of education their children receive at Royal King’s Schools rate the school 90%. Our learners are happy, making good academic progress. The teachers are of high quality and seasoned professionals. Parents consider their input in teaching and encouragement of their wards as friendly and great strength.
          </p>
        </div>
      </div>

      <div className='school-intro-div'>
      <h1>Our Schools</h1>
      <div>
      <p>Excellence is not just an act, but a consistent habit of repeated outstanding features. As such, in Royal King’s Schools, the citadel of learning, we are committed to this consistent habit of excellence.</p>
      </div>
      </div>

            {/* Primary Section */}
            <div className="primary-div">
        <img src={teacher_and_students_primary} alt="primary" />
        <div className="div1">
          <h1 className="primary-header">Olanike Dairo Primary School</h1>
          <p className="primary-paragraph">
          At Olanike Dairo Nursery and Primary, we use a modern curriculum that makes learning easy for our students.
          </p>
        </div>
      </div>


            {/* secondary Section */}
            <div className="secondary-div">
        <div className="div1">
          <h1 className="secondary-header">Olanike Dairo Secondary School</h1>
          <p className="secondary-paragraph">
          At Olanike Dairo Secondary, we use a modern curriculum that makes learning easy for our students.
          </p>
        </div>
        <img src="https://thumbs.dreamstime.com/z/cheerful-teacher-students-portrait-group-multi-ethnic-kids-their-african-american-teacher-english-language-posing-319486900.jpg" alt="secondary" />
      </div>


      <footer>
        <p>Copyright {new Date().getFullYear()}. Olanike Dairo Schools. All Right Reserved.</p>
      </footer>


















    </div>
  );
}
