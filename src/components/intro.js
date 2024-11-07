import React, { useEffect, useState } from 'react';
import "../styles/intro.css";
import logo from "../images/logo.png";
import Navbar from './nav';
import { Link } from 'react-router-dom';
import director_in_office from "../images/enhanced/director_in_office.jpg";
import coordinator from "../images/coordinator.jpg"
import teacher_and_students_primary from "../images/enhanced/teacher_and_students_primary.jpg";
import secondary_students_and_teachers from "../images/secondary.jpg";




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
          At Olanike Dairo Children Centre, we are committed to nurturing the future of our children by embracing the philosophy of <strong>"learning through play and hard work."</strong> This approach allows for continuous and unconscious learning while also fostering the values of discipline and respect. Our goal is to create well-rounded children who are equipped with the essential skills and values for lifelong success.
            <br/><br/>
            Our unique environment encourages each child to explore, grow, and develop not only intellectually but also socially, emotionally, and morally. We believe in shaping a total child, ensuring they leave our care as confident, respectful, and responsible individuals ready to face the world.          </p>

        </div>
        <img src={director_in_office} />
      </div>
      {/* Coordinator Section */}
      <div className="coordinator-div">
        <img src={coordinator} className='coordinator-image' />
        <div className="div1">
          <h1 className="coordinator-header">FROM THE COORDINATOR OF Programs</h1>
          <p className="coordinator-paragraph">
          Welcome to Olanike Dairo Children Centre! We are committed to providing an educational environment where children can thrive. Our philosophy emphasizes the importance of play, hard work, and a solid foundation to ensure that each child grows into a well-rounded individual.
            <br/><br/>
            Our center offers a nurturing space where creativity and discipline blend, fostering continuous learning in a fun and supportive atmosphere. We take pride in our approach to holistic education, which ensures that each child receives the attention and care they need to excel.          </p>
        </div>
      </div>



<div className='school-intro-div'>
  <h1>Our Schools</h1>
  <div>
    <p>Olanike Dairo Primary School and Olanike Dairo Secondary School are dedicated to providing quality education in an inclusive and nurturing environment. We aim to foster growth and development in every student, preparing them for future success through dedicated teaching and community engagement.</p>
  </div>
</div>

{/* Primary Section */}
<div className="primary-div">
  <img src={teacher_and_students_primary} alt="primary" />
  <div className="div1">
    <h1 className="primary-header">Olanike Dairo Primary School</h1>
    <p className="primary-paragraph">
      Our primary school focuses on building a strong foundation for students through a well-rounded curriculum. Emphasis is placed on developing critical thinking skills, creativity, and a love for learning. The school strives to create an environment where each child can flourish academically and socially.
    </p>
  </div>
</div>

{/* Secondary Section */}
<div className="secondary-div">
  <div className="div1">
    <h1 className="secondary-header">Olanike Dairo Secondary School</h1>
    <p className="secondary-paragraph">At our secondary school, we offer a comprehensive curriculum designed to prepare students for higher education and the workforce. We focus on academic excellence, character development, and equipping students with the skills necessary to excel in an ever-changing world.</p>
  </div>
  <img src={secondary_students_and_teachers} alt="secondary" />
</div>


      <footer>
        <p>Copyright {new Date().getFullYear()}. Olanike Dairo Schools. All Right Reserved.</p>
      </footer>


















    </div>
  );
}
