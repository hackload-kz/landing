import React from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Team: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`py-20 bg-blue-950 text-white px-4 sm:px-6 lg:px-8 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Команда <span className="text-amber-400">HackLoad</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="text-center text-slate-300 mb-16">
          <p>Информация о команде организаторов будет добавлена в ближайшее время.</p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Наши партнеры</h3>
          <div className="text-center text-slate-300">
            <p>Список партнеров будет объявлен в ближайшее время.</p>
            <p className="mt-4">Если вы хотите стать партнером мероприятия, свяжитесь с нами.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;