import React from 'react';
import { timelineEvents } from '../data/hackathonData';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Timeline: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section 
      className="py-20 bg-indigo-950 text-white px-4 sm:px-6 lg:px-8"
      ref={elementRef}
    >
      <div 
        className={`max-w-7xl mx-auto ${fadeInAnimation(isVisible)}`}
        style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How <span className="text-green-400">HackLoad</span> Unfolds
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-800"></div>

          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`mb-12 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* For desktop: alternate left and right */}
              <div className={`hidden md:block w-1/2 ${index % 2 === 1 && 'md:order-last'}`}>
                <div 
                  className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} 
                    bg-indigo-900/60 backdrop-blur-sm p-6 rounded-lg border border-indigo-700/50
                    hover:border-green-400/50 transition-colors duration-300`}
                >
                  <h3 className="text-xl font-bold text-green-400">{event.title}</h3>
                  <p className="text-sm text-indigo-300 mt-1">{event.date}</p>
                  <p className="mt-3 text-gray-300">{event.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 top-5 transform -translate-x-1/2 items-center justify-center">
                <div className="h-6 w-6 rounded-full border-4 border-indigo-950 bg-green-400"></div>
              </div>

              {/* Empty div for desktop layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Mobile version (always full width) */}
              <div className="md:hidden w-full pl-8 relative">
                <div className="absolute left-0 top-5 h-6 w-6 rounded-full border-4 border-indigo-950 bg-green-400"></div>
                <div className="absolute left-3 top-11 h-full w-1 bg-indigo-800"></div>
                <div className="bg-indigo-900/60 backdrop-blur-sm p-6 rounded-lg border border-indigo-700/50">
                  <h3 className="text-xl font-bold text-green-400">{event.title}</h3>
                  <p className="text-sm text-indigo-300 mt-1">{event.date}</p>
                  <p className="mt-3 text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;