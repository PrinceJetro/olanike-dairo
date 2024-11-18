import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";
import logo from "../images/logoremoved.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll up
      } else {
        setIsVisible(true); // Show on scroll down
      }
      
      lastScrollY = currentScrollY;

      setIsScrolled(currentScrollY > 50); // Optional background change on scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  // Determine the background color based on scrolling or nav state
  const navbarBackgroundColor = isScrolled || isNavOpen ? '#333' : 'transparent';

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top p-3 ${isVisible ? '' : 'navbar-hidden'}`} 
      style={{ backgroundColor: navbarBackgroundColor }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="School Logo" />
        </Link>
    
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isNavOpen} 
          aria-label="Toggle navigation" 
          onClick={handleToggle} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academics">Academics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News and Updates</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
