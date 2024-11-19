import React, { useState } from 'react';
import '../styles/newsUpdates.css'; // Import the corresponding CSS file for styling
import Navbar from './nav';
import Footer from './footer';
import AnimateOnScroll from './animateOnScroll';
import education from "../images/education_news.jpg"
import mariene from "../images/students-at-marine.jpg"
import founders from "../images/founders.png"
import independence from "../images/independence.png"
import test from "../images/Summative-Assessments-1.jpg"
import mid_term from "../images/mid-term.png"
import year from "../images/end-of-year-party-poster-design-template-b9db5c9afa7bf9045bf4ac7b83485919_screen.jpg"

export default function NewsUpdates() {
  // Sample news data
  const newsData = [
    {
      title: "Students Participate in 5th National Virtual Marine and Blue Economy Quiz",
      description: "We are thrilled to announce that students from our school recently took part in the prestigious 5th National Virtual Marine and Blue Economy Quiz Competition. This event, organized by the Ocean Ambassadors Foundation, brought together over 1,000 high school students from across the nation to explore exciting career opportunities within the maritime industry and to deepen their knowledge of the blue economy. The competition emphasizes sustainability and inclusivity, encouraging a new generation of talent, especially young women, to pursue careers in the marine sector.",
      image: mariene, 
      category: "School Achievements",
    },    
    {
      title: "FOUNDER'S DAY Celebration",
      description: "Join us as we commemorate our school's rich history and values. A day dedicated to honoring our founder and the legacy they've built for generations of students.",
      image: founders,
      category: "Special Event",
    },
    {
      title: "Independence Day Observance",
      description: "Celebrate Nigeria's Independence Day on October 1st with activities and reflections on the nation's journey and achievements.",
      image: independence,
      category: "National Holiday",
    },
    {
      title: "Summative Test Week",
      description: "The Summative Test, from October 11th to October 18th, will assess students' progress across subjects. Prepare and aim for excellence!",
      image: test,
      category: "Academic",
    },
    {
      title: "Mid-Term Break",
      description: "A chance for students and staff to recharge, from October 28th to November 1st. Use this time for relaxation and reflection before the second half of the term.",
      image: mid_term,
      category: "Break",
    },
    {
      title: "End of Year Party",
      description: "An exciting celebration marking the end of the academic year. Join us for fun, games, and a memorable end-of-term experience!",
      image: year,
      category: "Celebration",
    },
  ];
  

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // Function to open the modal
  const openModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  return (
    <div className="container-fluid news_page p-0 m-0">
        <Navbar/>
      {/* Main News Section */}
      <div className="row">
    {/* Main News Section */}
    <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
        <img src={education} alt="Main News" className="img-fluid news-image-intro" />
        <div className="row p-2">
        <div className="col-md-6 col-sm-12">
    <h1 className="bright">Celebrating Academic Excellence and Growth</h1>
</div>
<div className="col-md-6 col-sm-12">
    <p>Join us as we highlight the latest achievements, events, and initiatives that empower our students and foster a thriving learning community. Stay informed on how we’re building a brighter future together!</p>
</div>

        </div>
    </div>

    {/* Sidebar News Section */}
    <div className="col-lg-4 col-md-5 col-sm-12 bg-dark new mb-4">
        <h1>NEWS</h1>
        {newsData.slice(0, 3).map((news, index) => (
            <div key={index}>
                <h3>{news.title}</h3>
                <p>{news.description.slice(0, 100)}...</p>
                <hr />
            </div>
        ))}
    </div>
</div>


      {/* Smaller News Cards Section */}
      <div className="row down">
        {newsData.map((news, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="row">
          <div className="col-6">
              <img src={news.image} alt="news" className="img-fluid news-image" />
          </div>
          <div className="col-6">
              <h1>{`0${index + 1}`}</h1>
              <h3>{news.title}</h3>
              <p>{news.description.slice(0, 100)}...</p> {/* Limit the description to 100 characters */}
              <button id="readmore" onClick={() => openModal(news)}>Read more</button>
          </div>
      </div>
  </div>
  
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedNews && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.description}</p>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
