import React, { useState } from "react";
import "../styles/gallery.css";
import gallery_data from "../data/gallery_data";

function EducationGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Education Gallery</h2>
      <div className="gallery-grid">
        {gallery_data.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Enlarged" className="modal-content" />
        </div>
      )}
    </div>
  );
}

export default EducationGallery;
