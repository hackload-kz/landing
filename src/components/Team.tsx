import React from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';
import { useTranslation } from 'react-i18next';
import { partnerCompanies } from '../data/hackathonData';

const Team: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { isVisible, elementRef } = useScrollAnimation();

  const organizers = [
    {
      name: "Андрей Курдюмов",
      image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Дмитрий Мельник",
      image: "/d.melnik.jpeg",
      website: "https://drim.dev",
    },
    {
      name: "Теймур Шайкемелов",
      image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Станислав Беляев",
      image: "/stanislav-belyaev-avatar.jpeg",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white"
            dangerouslySetInnerHTML={{__html: t("team.title")}}></h2>
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
              <p className="text-slate-300 text-sm mt-2">{t("team.personTitle_Organizer")}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">{t("team.outPartnersTitle")}</h3>
          
          {/* Partners */}
          {partnerCompanies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-12">
              {partnerCompanies.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/30 text-center flex-shrink-0 min-w-[280px] max-w-[320px]">
                  <div className="mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-16 mx-auto"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-amber-400 font-semibold text-sm">
                      {partner.type === 'technical' ? t("team.technicalSponsor") : 
                       partner.type === 'informational' ? t("team.informationalPartner") : partner.type}
                    </p>
                    <p className="text-white font-medium">{partner.name}</p>
                    <p className="text-slate-300 text-sm">{partner.description[i18n.language as 'ru' | 'kk'] || partner.description.ru}</p>
                    <div className="pt-3">
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-150"
                      >
                        {partner.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Team;