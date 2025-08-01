import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Challenge from './components/Challenge';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Principles from './components/Principles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import News from './components/News';
import NewsArticle from './components/NewsArticle';
import Schedule from './components/Schedule';
import { useTranslation } from 'react-i18next'

// Style for global animations
import './styles/animations.css';

function App() {
  const { t } = useTranslation()
  useEffect(() => {
    // Update the page title
    document.title = 'HackLoad 2025 - ' + t("hero.tagline");
    
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
              <Timeline />
              <Team />
              <Principles />
              <Contact />
            </>
          } />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;