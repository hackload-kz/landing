import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const getBaseLang = (lang: string) => lang.split('-')[0];

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });
  const [currentLang, setCurrentLang] = useState(() => getBaseLang(i18n.language));

  useEffect(() => {
    setCurrentLang(getBaseLang(i18n.language));
  }, [i18n.language]);

  const switchLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      Cookies.set('i18next', lang, { expires: 30 });
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  return (
    <section
      ref={elementRef}
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-3 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
    >
      {/* Language switcher */}
      <div className="absolute top-4 left-4 flex space-x-2 z-20">
        <button
          type="button"
          onClick={() => switchLanguage('ru')}
          className={`px-3 py-1 rounded ${
            currentLang === 'ru'
              ? 'bg-amber-400 text-slate-900'
              : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
          } transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 active:transform active:scale-95`}
          aria-pressed={currentLang === 'ru'}
        >
          RU
        </button>
        <button
          type="button"
          onClick={() => switchLanguage('kk')}
          className={`px-3 py-1 rounded ${
            currentLang === 'kk'
              ? 'bg-amber-400 text-slate-900'
              : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
          } transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 active:transform active:scale-95`}
          aria-pressed={currentLang === 'kk'}
        >
          KK
        </button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-amber-400"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
                animation: `float ${Math.random() * 30 + 20}s linear infinite`,
                animationDelay: `${Math.random() * -30}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="block text-amber-400 mb-2 sm:mb-4">HackLoad 2025</span>
          <span className="block text-lg sm:text-2xl md:text-3xl font-medium leading-tight">
            {t("hero.tagline")}
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {t("hero.tagline2")}
        </p>

        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4">
            <div className="bg-slate-800/30 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-slate-700/30 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">{t("shared.locationTitle")}</p>
              <p className="font-medium">{t("shared.eventLocation")}</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-slate-700/30 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">{t("shared.formatTitle")}</p>
              <p className="font-medium">{t("shared.eventFormat")}</p>
            </div>
          </div>
        </div>

        {/* Animated load graph */}
        <div className="mt-8 sm:mt-12 bg-slate-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-slate-700/50 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-slate-300 mb-2">{t("hero.testLoadProfile")}</p>
          <div className="h-20 sm:h-24 flex items-end space-x-0.5 sm:space-x-1">
            {[...Array(48)].map((_, i) => {
              let height;
              if (i > 8 && i < 16) {
                height = 85 + Math.random() * 15;
              } else if ((i >= 6 && i <= 8) || (i >= 16 && i <= 18)) {
                height = 50 + Math.random() * 30;
              } else {
                height = 5 + Math.random() * 15;
              }
              
              return (
                <div
                  key={i}
                  className="w-0.5 sm:w-1 bg-amber-400 rounded-t"
                  style={{ 
                    height: `${height}%`,
                    animation: i % 3 === 0 ? 'pulse 2s infinite' : '',
                  }}
                ></div>
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-300">
            <span>{t("shared.genericEventStart")}</span>            
            <span>{t("shared.genericEventEnd")}</span>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="bg-slate-800/40 backdrop-blur-sm py-2 sm:py-3 px-4 rounded border border-slate-700/40 inline-block">
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-amber-400">{t("shared.eventDate")}</div>
          </div>
        </div>

        {/* Results button */}
        <div className="mt-8 sm:mt-12">
          <Link 
            to="/results"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-lg text-slate-900 bg-amber-400 hover:bg-amber-500 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {t("hero.registerButton")}
          </Link>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/task"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-150 shadow-lg hover:shadow-xl"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            {t("hero.scheduleButton")}
          </Link>
          
          <a 
            href="https://t.me/teamleads_kz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-150 shadow-lg hover:shadow-xl"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.16 7.77c-.12 1.31-.63 4.49-1.12 8.34-.21 1.77-.69 2.4-1.14 2.46-.97.12-1.71-.63-2.65-1.23-.98-.67-1.54-1.08-2.49-1.74-.99-.72-.36-1.23.21-1.92.15-.18 2.72-2.48 2.77-2.69.04-.21-.05-.3-.28-.21-.15.06-1.89 1.2-3.36 2.22-.34.2-.82.21-1.21.12-.66-.15-1.35-.32-1.32-.77.03-.31.36-.6.93-.83C8.4 10.68 10.06 9.9 12.36 8.67c.67-.36 3.11-1.35 3.11-.56 0 .21-.44.92-.61 1.25-.16.33-.99 2.32-.99 2.32s-2.79 2.69-3.35 3.23c-1.07 1.03-1.47 1.84-1.5 2.67-.04 1.29.84 1.77 2.06 1.17 1.19-.59 3.27-1.89 3.27-1.89s.68.77 1.14 1.26c.44.47 1.15 1.06 1.67 1.06.73 0 1.17-.38 1.24-1.21.09-.92.63-5.85.71-6.62.06-.61-.02-.94-.23-1.21.33-.17.6-.5.79-.89.21-.41.33-.9.33-1.4 0-.48-.2-.95-.61-1.28-.41-.33-.95-.5-1.48-.5-.93 0-1.64.47-2.07 1.16-.25.43-.33.69-.46 1.36z" />
            </svg>
            {t("shared.joinChat")}
          </a>
          
          <a 
            href="https://github.com/orgs/hackload-kz/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-amber-400 text-base font-medium rounded-md text-amber-400 hover:bg-amber-400/10 transition-colors duration-150"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {t("shared.viewCode")}
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-400">
          {t("hero.checkUpdatesInTelegram")}
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;