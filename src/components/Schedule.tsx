import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { getScheduleEventsSorted, getAuthor, formatEventDate, getScheduleContentLanguage, ScheduleEvent } from '../data/scheduleData';

const getBaseLang = (lang: string) => lang.split('-')[0];

const Schedule: React.FC = () => {
  const { t, i18n } = useTranslation();
  const events = getScheduleEventsSorted();
  const contentLanguage = getScheduleContentLanguage();
  const [currentLang, setCurrentLang] = useState(() => getBaseLang(i18n.language));

  useEffect(() => {
    setCurrentLang(getBaseLang(i18n.language));
  }, [i18n.language]);

  const switchLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      Cookies.set('i18next', lang, { expires: 30 });
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  useEffect(() => {
    // Set page title
    document.title = `${t('schedule.title').replace(/<[^>]*>/g, '')} - HackLoad 2025`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('schedule.description'));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = t('schedule.description');
      document.head.appendChild(meta);
    }

    // Set content language meta tag
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMetaTag('content-language', contentLanguage);
    
    // Set HTML lang attribute for the page content
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', contentLanguage);

    // Set Open Graph meta tags
    const setOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setOGMeta('og:title', `${t('schedule.title').replace(/<[^>]*>/g, '')} - HackLoad 2025`);
    setOGMeta('og:description', t('schedule.description'));
    setOGMeta('og:type', 'website');
    setOGMeta('og:url', `${window.location.origin}/schedule`);
    setOGMeta('og:site_name', 'HackLoad 2025');
    setOGMeta('og:locale', contentLanguage === 'ru' ? 'ru_RU' : contentLanguage);

    // Set Twitter Card meta tags
    const setTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setTwitterMeta('twitter:card', 'summary_large_image');
    setTwitterMeta('twitter:title', `${t('schedule.title').replace(/<[^>]*>/g, '')} - HackLoad 2025`);
    setTwitterMeta('twitter:description', t('schedule.description'));

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/schedule`);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', `${window.location.origin}/schedule`);
      document.head.appendChild(canonical);
    }
  }, [t, i18n.language, contentLanguage]);

  const handleSubscribeCalendar = () => {
    // Generate iCal file download
    const icalContent = generateICalContent(events);
    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'hackload-marathon-schedule.ics';
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative" lang={contentLanguage}>
      {/* Language switcher */}
      <div className="absolute top-4 left-4 flex space-x-2 z-20">
        <button
          type="button"
          onClick={() => switchLanguage('ru')}
          className={`px-3 py-1 rounded ${
            currentLang === 'ru'
              ? 'bg-amber-400 text-slate-900'
              : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
          } transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 active:transform active:scale-95`}
          aria-pressed={currentLang === 'ru'}
        >
          RU
        </button>
        <button
          type="button"
          onClick={() => switchLanguage('kk')}
          className={`px-3 py-1 rounded ${
            currentLang === 'kk'
              ? 'bg-amber-400 text-slate-900'
              : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
          } transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 active:transform active:scale-95`}
          aria-pressed={currentLang === 'kk'}
        >
          KK
        </button>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: t('schedule.title') }}>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('schedule.description')}
          </p>
          
          {/* Subscribe buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleSubscribeCalendar}
              className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors"
            >
              📅 {t('schedule.subscribeCalendar')}
            </button>
            <a
              href="https://t.me/teamleads_kz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              📱 {t('schedule.subscribeTelegram')}
            </a>
          </div>
        </div>

        {/* Events timeline */}
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => {
            const author = getAuthor(event.authorId);
            const isLast = index === events.length - 1;
            
            return (
              <div key={event.id} className="relative">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-8 top-24 w-0.5 h-24 bg-gray-600"></div>
                )}
                
                {/* Event card */}
                <div className="flex gap-6 mb-16">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-lg mt-4">
                    {index + 1}
                  </div>
                  
                  {/* Event content */}
                  <div className="flex-1 bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                    {/* Event date - prominent display */}
                    <div className="bg-amber-400 text-black px-4 py-2 rounded-lg font-bold text-lg mb-4 inline-block">
                      {formatEventDate(event.date, i18n.language)}
                    </div>
                    
                    {/* Event title */}
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    
                    {/* Event description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    
                    {/* Author info */}
                    {author && (
                      <div className="mb-4 p-4 bg-slate-900 rounded-lg">
                        <a
                          href={author.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:bg-slate-800 transition-colors rounded-lg -m-2 p-2"
                        >
                          <h4 className="font-semibold text-amber-400 hover:text-amber-300 transition-colors">{author.name}</h4>
                          <p className="text-sm text-gray-400">{author.description}</p>
                        </a>
                      </div>
                    )}
                    
                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={event.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors flex items-center gap-2"
                      >
                        ▶️ {t('schedule.watchOnYoutube')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="text-center mt-16 p-6 bg-slate-800 rounded-xl">
          <h3 className="text-xl font-bold mb-4">{t('schedule.subscriptionOptions')}</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">{t('schedule.calendarSync')}</h4>
              <p className="text-sm text-gray-300">
                {t('schedule.calendarSyncDescription')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">{t('schedule.telegramNotifications')}</h4>
              <p className="text-sm text-gray-300">
                {t('schedule.telegramNotificationsDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to generate iCal content
const generateICalContent = (events: ScheduleEvent[]): string => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//HackLoad//Educational Marathon//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:HackLoad Educational Marathon
X-WR-CALDESC:Educational lectures for HackLoad 2025 hackathon
X-WR-TIMEZONE:Asia/Almaty
`;

  events.forEach(event => {
    const author = getAuthor(event.authorId);
    const startDate = new Date(event.date);
    const endDate = new Date(startDate.getTime() + (event.duration || 60) * 60 * 1000);
    
    const formatDate = (date: Date) => 
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    ical += `
BEGIN:VEVENT
UID:${event.id}@hackload.kz
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
DTSTAMP:${timestamp}
SUMMARY:${event.title}
DESCRIPTION:${event.description}\\n\\nСпикер: ${author?.name || ''}\\n\\nПодробнее: ${event.youtubeLink}
LOCATION:Online - YouTube
URL:${event.youtubeLink}
STATUS:CONFIRMED
END:VEVENT`;
  });

  ical += '\nEND:VCALENDAR';
  return ical;
};

export default Schedule;