import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";
import general from "../data/general";

export default function Navbar() {
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
    <nav className={`navbar navbar-expand-lg fixed-top p-3 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={general.school_logo} alt="School Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#primary">Primary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#secondary">Secondary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" tabIndex="-1" aria-disabled="true">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
