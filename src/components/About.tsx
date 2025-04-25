import React from 'react';
import { Server } from 'lucide-react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';
import { organizerQuotes } from '../data/hackathonData';

const About: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={elementRef}
      className={`py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Что такое <span className="text-amber-400">HackLoad</span>?
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 mb-6">
              HackLoad - это первый в Казахстане хакатон, специально посвященный высоконагруженным системам. Мы решаем 
              распространенную проблему: сбои в работе билетных сервисов во время крупных мероприятий, когда тысячи людей 
              пытаются одновременно приобрести билеты.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Наша миссия - демистифицировать сложность высоконагруженных систем через практические задачи. Участники будут 
              учиться, решая реальные проблемы в совместной среде, создавая решения, способные справляться с массивными 
              всплесками трафика.
            </p>
            <p className="text-lg text-slate-300">
              Все проекты будут с открытым исходным кодом, способствуя обмену знаниями и росту сообщества в области 
              высокопроизводительных распределенных систем.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {organizerQuotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50"
              >
                <div className="flex items-start">
                  <div className="text-amber-400 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-slate-300">"{quote.quote}"</p>
                    <p className="mt-2 text-sm text-amber-400">{quote.author}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center items-center lg:justify-start mt-4">
              <Server className="w-8 h-8 text-amber-400 mr-3" />
              <span className="text-xl font-semibold">Август 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;