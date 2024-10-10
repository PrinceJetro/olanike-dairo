import React from 'react';
import "../styles/footer.css";
import general from '../data/general';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>{general.school_address}</p>
          <p>Phone: {general.school_phone}</p>
          <p>Email: {general.school_email}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#contact">Contact</a></li>
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

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {general.school_name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
