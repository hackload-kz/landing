import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Challenge from './components/Challenge';
import Tracks from './components/Tracks';
import Team from './components/Team';
import Principles from './components/Principles';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="app bg-slate-950 text-white">
      <Hero />
      <About />
      <Challenge />
      <Tracks />
      <Team />
      <Principles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;