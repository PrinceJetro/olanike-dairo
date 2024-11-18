import React, { useState } from "react";
import "../styles/GetInTouch.css";
import general from "../data/general";
import get_in_touch from "../images/pexels-alex-andrews-271121-821754.jpg"

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
        <div className="number_container">
          <img src={get_in_touch}/>
          <h1 className="number_container_text">Call Now: {general.school_phone} </h1>
        </div>
       

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


