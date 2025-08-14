import React from 'react'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  const { isVisible, elementRef } = useScrollAnimation();

  // Function to get the appropriate YouTube URL based on event title
  const getPublicLinkUrl = (eventTitle: string) => {
    if (eventTitle === t("timeline.events.day_one.title")) {
      return "https://www.youtube.com/live/MAY9b2rRyo4";
    }
    if (eventTitle === t("timeline.events.day_three.title")) {
      return "https://youtube.com/live/OwZcXAnd0xM?feature=share";
    }
    return "";
  };

  const timelineEvents = [
    {
      title: t("timeline.events.registration_opening.title"),
      date: t("timeline.events.registration_opening.date"),
      description: t("timeline.events.registration_opening.description")
    },
    {
      title: t("timeline.events.participant_finalization.title"),
      date: t("timeline.events.participant_finalization.date"),
      description: t("timeline.events.participant_finalization.description")
    },
    {
      title: t("timeline.events.task_publication.title"),
      date: t("timeline.events.task_publication.date"),
      description: t("timeline.events.task_publication.description")
    },
    {
      title: t("timeline.events.educational_marathon.title"),
      date: t("timeline.events.educational_marathon.date"),
      description: t("timeline.events.educational_marathon.description"),
      hasScheduleLink: t("timeline.events.educational_marathon.hasScheduleLink") === "true"
    },
    {
      title: t("timeline.events.day_one.title"),
      date: t("timeline.events.day_one.date"),
      description: t("timeline.events.day_one.description"),
      hasPublicLink: t("timeline.events.day_one.hasPublicLink") === "true"
    },
    {
      title: t("timeline.events.day_three.title"),
      date: t("timeline.events.day_three.date"),
      description: t("timeline.events.day_three.description"),
      hasPublicLink: t("timeline.events.day_three.hasPublicLink") === "true"
    }  
  ];

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
          <h2 className="text-3xl sm:text-4xl font-bold text-white"
              dangerouslySetInnerHTML={{ __html: t("timeline.title") }}>
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
                  {event.hasRegistrationLink && (
                    <div className="mt-4">
                      <a 
                        href="https://hub.hackload.kz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-green-400 hover:bg-green-500 transition-colors duration-150"
                      >
                        {t("shared.register")}
                      </a>
                    </div>
                  )}
                  {event.hasScheduleLink && (
                    <div className="mt-4">
                      <Link 
                        to="/schedule"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-150"
                      >
                        📅 {t("shared.viewSchedule")}
                      </Link>
                    </div>
                  )}
                  {event.hasPublicLink && (
                    <div className="mt-4">
                      <a 
                        href={getPublicLinkUrl(event.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-red-500 hover:bg-red-600 transition-colors duration-150"
                      >
                        📺 {t("shared.watchLive")}
                      </a>
                    </div>
                  )}
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
                  {event.hasRegistrationLink && (
                    <div className="mt-4">
                      <a 
                        href="https://hub.hackload.kz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-green-400 hover:bg-green-500 transition-colors duration-150"
                      >
                        {t("shared.register")}
                      </a>
                    </div>
                  )}
                  {event.hasScheduleLink && (
                    <div className="mt-4">
                      <Link 
                        to="/schedule"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors duration-150"
                      >
                        📅 {t("shared.viewSchedule")}
                      </Link>
                    </div>
                  )}
                  {event.hasPublicLink && (
                    <div className="mt-4">
                      <a 
                        href={getPublicLinkUrl(event.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-900 bg-red-500 hover:bg-red-600 transition-colors duration-150"
                      >
                        📺 {t("shared.watchLive")}
                      </a>
                    </div>
                  )}
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