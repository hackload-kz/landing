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
import Task from './components/Task';
import Results from './components/Results';
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next'
import { getHackathonStructuredData } from './utils/structuredData';
import { SITE_CONFIG, getLanguageSpecific } from './config/settings';

// Style for global animations
import './styles/animations.css';

function App() {
  const { t, i18n } = useTranslation()
  
  useEffect(() => {
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
              <SEO 
                title={t("hero.title")}
                description={t("hero.description")}
                keywords={`${getLanguageSpecific(SITE_CONFIG.defaultKeywords, i18n.language)}, ${SITE_CONFIG.defaultKeywords.en}`}
                url="/"
                structuredData={getHackathonStructuredData(i18n.language)}
              />
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
          <Route path="/task" element={<Task />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;