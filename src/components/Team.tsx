import React from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Team: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const organizers = [
    {
      name: "Андрей Курдюмов",
      image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Дмитрий Мельник",
      image: "https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Теймур Шайкемелов",
      image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Станислав Беляев",
      image: "https://images.pexels.com/photos/3651579/pexels-photo-3651579.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://belyaev.live",
    },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {organizers.map((organizer, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/30 text-center group hover:border-amber-400/30 transition-colors duration-300"
            >
              <div className="relative h-24 w-24 mx-auto mb-4">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="h-full w-full rounded-full object-cover border-2 border-amber-400/20 group-hover:border-amber-400/40 transition-colors duration-300"
                />
              </div>
              {organizer.website ? (
                <a 
                  href={organizer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {organizer.name}
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg font-semibold text-white">{organizer.name}</h3>
              )}
              <p className="text-slate-300 text-sm mt-2">Организатор</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Наши партнеры</h3>
          <div className="text-center text-slate-300 space-y-4">
            <p>Список партнеров будет объявлен в ближайшее время.</p>
            <p className="text-lg">
              Если хотите стать партнером мероприятий, свяжитесь с{' '}
              <a 
                href="https://t.me/BelyaevStanislav" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 transition-colors underline"
              >
                нами
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;