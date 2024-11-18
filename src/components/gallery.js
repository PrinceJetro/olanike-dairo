import React, { useEffect, useRef, useState } from 'react';
import "../styles/gallery.css";
import gallery_data from "../data/gallery_data";

function EducationGallery() {
  const galleryContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const galleryContainer = galleryContainerRef.current;
    const galleryScrollWidth = galleryContainer.scrollWidth;

    const intervalId = setInterval(() => {
      if (scrollDirection === 1) {
        if (galleryContainer.scrollLeft + galleryContainer.clientWidth < galleryScrollWidth) {
          galleryContainer.scrollTo(galleryContainer.scrollLeft + 1, 0);
        } else {
          setScrollDirection(-1);
        }
      } else {
        if (galleryContainer.scrollLeft > 0) {
          galleryContainer.scrollTo(galleryContainer.scrollLeft - 1, 0);
        } else {
          setScrollDirection(1);
        }
      }
    }, 10);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [scrollDirection]); // Re-run the effect when scrollDirection changes

  return (
    <div className="horizontal-gallery-container">
      <h2 className="gallery-title">Our Activity Gallery</h2>
      <div className="gallery-row" ref={galleryContainerRef}>
        {gallery_data.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item} alt={`Olanike Dairo Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationGallery;
