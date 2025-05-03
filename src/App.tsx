import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Challenge from './components/Challenge';
import Tracks from './components/Tracks';
import Team from './components/Team';
import Principles from './components/Principles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import News from './components/News';
import NewsArticle from './components/NewsArticle';

// Style for global animations
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'HackLoad 2025 - Первый казахстанский хакатон по высоконагруженным системам';
    
    // Add a smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="app bg-slate-950 text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Challenge />
              <Tracks />
              <Team />
              <Principles />
              <Contact />
            </>
          } />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;