import React, { useState } from 'react';
import '../styles/newsUpdates.css'; // Import the corresponding CSS file for styling
import Navbar from './nav';
import Footer from './footer';
import AnimateOnScroll from './animateOnScroll';
import education from "../images/education_news.jpg"
import founders from "../images/founders.png"
import independence from "../images/independence.png"
import test from "../images/Summative-Assessments-1.jpg"
import mid_term from "../images/mid-term.png"
import year from "../images/end-of-year-party-poster-design-template-b9db5c9afa7bf9045bf4ac7b83485919_screen.jpg"

export default function NewsUpdates() {
  // Sample news data
  const newsData = [
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
        <div className="col-sm-8">
          <img src={education} alt="Main News" className="img-fluid news-image-intro" />
          <div className="row p-2">
            <div className="col-sm-6">
              <h1 className="bright">The Bright Future of Web 3.0?</h1>
            </div>
            <div className="col-sm-6">
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3 bg-dark new">
          <h1>NEW</h1>
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
          <div key={index} className="col-md-4 row">
            <div className="col">
              <img src={news.image} alt="news" className="img-fluid news-image" />
            </div>
            <div className="col">
              <h1>{`0${index + 1}`}</h1>
              <h3>{news.title}</h3>
              <p>{news.description.slice(0, 100)}...</p> {/* Limit the description to 100 characters */}
              <button id="readmore" onClick={() => openModal(news)}>Read more</button>
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
