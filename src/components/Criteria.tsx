import React from 'react';
import { Gauge, ShieldCheck, Zap, Terminal, Lock } from 'lucide-react';
import { evaluationCriteria } from '../data/hackathonData';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const CriterionIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconProps = { className: "h-6 w-6" };
  
  switch(iconName) {
    case 'Gauge':
      return <Gauge {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Zap':
      return <Zap {...iconProps} />;
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'Lock':
      return <Lock {...iconProps} />;
    default:
      return <Gauge {...iconProps} />;
  }
};

const Criteria: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Как определяются <span className="text-green-400">победители</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {evaluationCriteria.map((criterion, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-lg overflow-hidden shadow-lg border border-indigo-700/30 hover:border-green-400/30 transition-colors duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-400/10 flex items-center justify-center mr-4">
                    <CriterionIcon iconName={criterion.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{criterion.name}</h3>
                    <p className="text-indigo-300">{criterion.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-indigo-300">Weight</span>
                    <span className="text-green-400 font-semibold">{criterion.weight}%</span>
                  </div>
                  <div className="h-2 bg-indigo-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-400"
                      style={{ width: `${criterion.weight}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-indigo-900/30 backdrop-blur-sm rounded-lg border border-indigo-700/30">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Judging Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">Автоматическое тестирование</h4>
              <p className="text-gray-300 text-sm">Системы проходят автоматизированные нагрузочные тесты для объективного измерения производительности.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">Экспертная оценка</h4>
              <p className="text-gray-300 text-sm">Эксперты индустрии оценивают качество кода, архитектуру и инновационные подходы.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-green-400/10 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3M4 19h16" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">Презентация решения</h4>
              <p className="text-gray-300 text-sm">Команды представляют свой подход, архитектурные решения и полученный опыт.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;