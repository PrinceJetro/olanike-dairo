import React, { useState } from "react";
import "../styles/GetInTouch.css";
import general from "../data/general";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const prepareMailtoLink = () => {
    const { name, email, subject, message } = formData;
    
    // Encode the body of the email to include form data
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Create the mailto link with subject and body
    return `mailto:${general.school_email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="get-in-touch-container">
      <h2>Get in Touch</h2>

      <div className="get-in-touch-content">
        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = prepareMailtoLink(); // Open mailto link
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Google Map */}
        
        <div className="map-container">
          <iframe
            title="School Location"
            src={general.school_map}
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


export default GetInTouch;
