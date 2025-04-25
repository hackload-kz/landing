import React from 'react';
import { Code, BookOpen, Users, Sparkles } from 'lucide-react';
import { principles } from '../data/hackathonData';
import { useScrollAnimation, scaleInAnimation } from '../utils/animationUtils';

const PrincipleIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconProps = { className: "h-6 w-6" };
  
  switch(iconName) {
    case 'Code':
      return <Code {...iconProps} />;
    case 'BookOpen':
      return <BookOpen {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

const Principles: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Наши <span className="text-amber-400">Ценности</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });
            
            return (
              <div
                key={index}
                ref={elementRef}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30 flex flex-col items-center text-center ${scaleInAnimation(isVisible)}`}
                style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-16 w-16 rounded-full bg-amber-400/10 flex items-center justify-center mb-4">
                  <PrincipleIcon iconName={principle.icon} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{principle.title}</h3>
                <p className="text-slate-300">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              В HackLoad мы верим в создание возможностей для разработчиков решать реальные задачи
              в совместной, образовательной среде. Наше мероприятие направлено на развитие как навыков,
              так и сообщества.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;