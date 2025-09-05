import React, { useEffect } from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';
import { useTranslation } from 'react-i18next';
import SEO from './SEO';

const Task: React.FC = () => {
  const { t } = useTranslation();
  const { isVisible, elementRef } = useScrollAnimation();

  const taskLinks = [
    {
      title: t("task.projectRequirements"),
      description: "Основные требования к архитектуре, производительности и функциональности",
      url: "https://github.com/hackload-kz/infra/blob/main/organizer-app/public/docs/project-requirements.md",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      )
    },
    {
      title: t("task.externalInterfaces"),
      description: "API документация для билетной системы",
      url: "https://github.com/hackload-kz/infra/blob/main/organizer-app/public/docs/billetter-api.md",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
        </svg>
      )
    },
    {
      title: t("task.paymentGateway"),
      description: "Спецификация интеграции с платежной системой",
      url: "https://github.com/hackload-kz/infra/blob/main/organizer-app/public/docs/payment-gateway.md",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
      )
    },
    {
      title: t("task.eventProvider"),
      description: "Интеграция с системой управления мероприятиями",
      url: "https://github.com/hackload-kz/infra/blob/main/organizer-app/public/docs/event-provider.md",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={elementRef}
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-20 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <SEO 
        title={t("task.title").replace(/<[^>]*>/g, '')}
        description={t("task.metaDescription")}
        keywords="HackLoad 2025, хакатон задание, высоконагруженные системы, билетная система, техническое задание, API документация, требования проекта"
        url="/task"
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: t("task.title") }}></span>
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("task.description")}
          </p>
        </div>

        {/* Task Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {taskLinks.map((link, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/30 p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-6">
                <div className="text-amber-400 flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {link.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-amber-400 text-slate-900 font-medium rounded-lg hover:bg-amber-500 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M14.5,8L11,12L14.5,16V13H18V11H14.5V8Z"/>
                    </svg>
                    {t("task.viewOnGitHub")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Reference */}
        <div className="text-center mb-12">
          <div className="bg-amber-600/20 border border-amber-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Результаты хакатона
            </h3>
            <p className="text-slate-300 mb-6">
              Посмотрите, как команды справились с этим заданием, и изучите их решения
            </p>
            <a
              href="/results"
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors text-white font-semibold text-lg"
            >
              <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Посмотреть результаты
            </a>
          </div>
        </div>

        {/* All docs link */}
        <div className="text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/20 p-8">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Полная документация
            </h3>
            <p className="text-slate-300 mb-6">
              Все документы по заданию доступны в репозитории GitHub
            </p>
            <a
              href="https://github.com/hackload-kz/infra/tree/main/organizer-app/public/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              Посмотреть все документы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;