import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/nav';
import Intro from './components/intro';
import Contact from './components/contact';
import About_us from './components/about_us';
import AcademicPage from './components/academics';
import NewsUpdates from './components/news';
import ScrollToTop from './components/scroll_to_top';


function App() {
  return (
    <div className="App">
      <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academics" element={<AcademicPage />} />
        <Route path="/news" element={<NewsUpdates />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
