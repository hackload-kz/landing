import React from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Hero: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 overflow-hidden ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-green-400"
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="block text-green-400">HackLoad 2025</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-medium mt-2">
            Первый казахстанский хакатон по высоконагруженным системам
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
          Создайте билетный сервис, способный обработать 100 000 запросов. Испытайте свои навыки в экстремальных условиях.
        </p>

        <div className="mt-10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="bg-indigo-800/30 backdrop-blur-sm px-6 py-4 rounded-lg border border-indigo-500/30">
              <p className="text-xs uppercase tracking-wider text-indigo-300 mb-1">Место проведения</p>
              <p className="font-medium">Алматы, Казахстан</p>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-sm px-6 py-4 rounded-lg border border-indigo-500/30">
              <p className="text-xs uppercase tracking-wider text-indigo-300 mb-1">Формат</p>
              <p className="font-medium">Очно и удаленно</p>
            </div>
          </div>
        </div>

        {/* Animated load graph */}
        <div className="mt-12 bg-indigo-800/50 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/50 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-indigo-300 mb-2">Симуляция высокой нагрузки</p>
          <div className="h-24 flex items-end space-x-1">
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
                  className="w-1 bg-green-400 rounded-t"
                  style={{ 
                    height: `${height}%`,
                    animation: i % 3 === 0 ? 'pulse 2s infinite' : '',
                  }}
                ></div>
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-indigo-300">
            <span>Старт</span>
            <span>Пиковая нагрузка</span>
            <span>Конец</span>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-indigo-800/40 backdrop-blur-sm py-3 px-4 rounded border border-indigo-500/40 inline-block">
            <div className="text-2xl sm:text-3xl font-mono text-green-400">Август 2025</div>
          </div>
        </div>

        <div className="mt-12">
          <a 
            href="#about" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-green-400 hover:bg-green-500 transition-colors duration-150"
          >
            Узнать больше
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;