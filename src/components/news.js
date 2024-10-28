import React, { useState } from 'react';
import '../styles/newsUpdates.css'; // Import the corresponding CSS file for styling
import Navbar from './nav';
import Footer from './footer';

export default function NewsUpdates() {
  // Sample news data
  const newsData = [
    {
        title: "Lorem ipsum dolor sit amet?",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        image: "https://myschool.ng/storage/blog/cache/fit_348_218_hMEimc6E9pPgrWz3mJKgLlHNWInELJAcjLCb2eIa.png",
        category: "Trending",
    },
    {
        title: "Lorem ipsum dolor sit amet?",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! Will hydrogen-fueled cars ever catch up to EVs?",
        image: "https://bloximages.chicago2.vip.townnews.com/thetimestribune.com/content/tncms/assets/v3/editorial/2/ed/2edbebde-ec11-11ea-9a29-17cf173ad57d/5f4dd76e4af8c.image.jpg?resize=400%2C266",
        category: "New",
    },
    {
        title: "Lorem ipsum dolor sit amet?",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! What are the possible adverse effects of on-demand AI image generation?",
        image: "https://jetros-frontend-mentor-news-homepage.vercel.app/assets/images/image-top-laptops.jpg",
        category: "Popular",
    },
    {
        title: "Lorem ipsum dolor sit amet?",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! How the pandemic has sparked fresh opportunities.",
        image: "https://jetros-frontend-mentor-news-homepage.vercel.app/assets/images/image-gaming-growth.jpg",
        category: "Trending",
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
          <img src="https://st.depositphotos.com/1152339/3763/i/450/depositphotos_37638271-stock-photo-news-concept-education-news-on.jpg" alt="Main News" className="img-fluid news-image-intro" />
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
