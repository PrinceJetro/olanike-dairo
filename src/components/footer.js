import React from 'react';
import "../styles/footer.css";
import general from '../data/general';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>{general.school_address}</p>
          <p>Phone: {general.school_phone}</p>
          <p>Email: <a href={`mailto:${general.school_email}`}>{general.school_email}</a></p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link  to="/about">About Us</Link>
            </li>
            <li>
              <Link  to="/academics">Academics</Link>
            </li>
            <li>
              <Link  to="/contact">Contact</Link>
            </li>
            <li>
              <Link  to="/news">News and Updates</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>

    
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {general.school_name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
