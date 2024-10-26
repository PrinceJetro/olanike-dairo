import React, { useState } from 'react';
import '../styles/newsUpdates.css'; // Import the corresponding CSS file for styling
import Navbar from './nav';
import Footer from './footer';

export default function NewsUpdates() {
  // Sample news data
  const newsData = [
    {
      title: "The Bright Future of Web 3.0?",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
      image: "https://i.redd.it/random-cool-wallpapers-post45-v0-cpzat5051teb1.jpg?width=2560&format=pjpg&auto=webp&s=92785d2c1336d7a80c566e85efbedb9ef6c78efd",
      category: "Trending",
    },
    {
      title: "Hydrogen VS Electric Cars",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! Will hydrogen-fueled cars ever catch up to EVs?",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
      category: "New",
    },
    {
      title: "The Downsides of AI Artistry",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloremque explicabo autem ab perferendis vero aliquam cumque tenetur eaque id voluptatibus necessitatibus esse similique iste pariatur aspernatur, aliquid officiis tempora! What are the possible adverse effects of on-demand AI image generation?",
      image: "https://jetros-frontend-mentor-news-homepage.vercel.app/assets/images/image-top-laptops.jpg",
      category: "Popular",
    },
    {
      title: "The Growth of Gaming",
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
          <img src="https://jetros-frontend-mentor-news-homepage.vercel.app/assets/images/image-web-3-desktop.jpg" alt="Main News" className="img-fluid" />
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
              <img src={news.image} alt="news" className="img-fluid" />
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
