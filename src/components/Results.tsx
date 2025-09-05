import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const getBaseLang = (lang: string) => lang.split('-')[0];

const Results: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => getBaseLang(i18n.language));

  useEffect(() => {
    document.title = `${t('results.title').replace(/<[^>]*>/g, '')} - HackLoad 2025`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('results.metaDescription'));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = t('results.metaDescription');
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [t]);

  useEffect(() => {
    setCurrentLang(getBaseLang(i18n.language));
  }, [i18n.language]);

  useEffect(() => {
    // Handle URL hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      // Add a delay to ensure the page has rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const switchLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      Cookies.set('i18next', lang, { expires: 30 });
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
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
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: t('results.title') }}>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            {t('results.description')}
          </p>
          
          {/* Embedded YouTube Video */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30">
              <h2 className="text-2xl font-semibold mb-4 text-amber-400">
                {t('results.closingStream.title')}
              </h2>
              <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/OwZcXAnd0xM"
                  title="HackLoad 2025 Closing Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-slate-300 mt-4 text-center">
                {t('results.closingStream.description')}
              </p>
            </div>
          </div>

          {/* Task Reference */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-amber-600/20 border border-amber-500/30 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">
                {t('results.taskReference.title')}
              </h3>
              <p className="text-slate-300 mb-4">
                {t('results.taskReference.description')}
              </p>
              <a 
                href="/task"
                className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors text-white font-semibold"
              >
                📋 {t('results.taskReference.viewTask')}
              </a>
            </div>
          </div>
        </div>

        {/* Direct Team Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t('results.directLinks.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <a 
              href="#team-helloalem"
              className="bg-amber-600/20 border border-amber-500/30 p-4 rounded-lg hover:bg-amber-600/30 transition-colors text-center"
            >
              <div className="text-lg font-semibold">🥇 HelloAlem</div>
              <div className="text-sm text-slate-300">325 {t('results.finalResults.scoringCriteria.points')}</div>
            </a>
            <a 
              href="#team-rorobotics"
              className="bg-slate-700/30 border border-slate-600/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors text-center"
            >
              <div className="text-lg font-semibold">🥈 Rorobotics</div>
              <div className="text-sm text-slate-300">301 {t('results.finalResults.scoringCriteria.points')}</div>
            </a>
            <a 
              href="#team-metaload"
              className="bg-slate-700/30 border border-slate-600/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors text-center"
            >
              <div className="text-lg font-semibold">🥉 Metaload</div>
              <div className="text-sm text-slate-300">296 {t('results.finalResults.scoringCriteria.points')}</div>
            </a>
            <a 
              href="#team-bulbul"
              className="bg-slate-700/30 border border-slate-600/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors text-center"
            >
              <div className="text-lg font-semibold">Bulbul</div>
              <div className="text-sm text-slate-300">281 {t('results.finalResults.scoringCriteria.points')}</div>
            </a>
            <a 
              href="#team-mnp"
              className="bg-slate-700/30 border border-slate-600/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors text-center"
            >
              <div className="text-lg font-semibold">MNP</div>
              <div className="text-sm text-slate-300">{t('results.directLinks.notable')}</div>
            </a>
            <a 
              href="#team-zulu"
              className="bg-slate-700/30 border border-slate-600/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors text-center"
            >
              <div className="text-lg font-semibold">Zulu</div>
              <div className="text-sm text-slate-300">{t('results.directLinks.notable')}</div>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t('results.navigation.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
            >
              {t('results.navigation.overview')}
            </button>
            <button
              onClick={() => scrollToSection('final-results')}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {t('results.navigation.finalResults')}
            </button>
            <button
              onClick={() => scrollToSection('winners')}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {t('results.navigation.winners')}
            </button>
            <button
              onClick={() => scrollToSection('notable-teams')}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {t('results.navigation.notableTeams')}
            </button>
            <button
              onClick={() => scrollToSection('organizer-comments')}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {t('results.navigation.organizerComments')}
            </button>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            {t('results.overview.title')}
          </h2>
          
          {/* Technology Distribution */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              {t('results.overview.techDistribution.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30">
                <ul className="space-y-2">
                  <li>Go: 6 {t('results.overview.repositories')}</li>
                  <li>Java: 2 {t('results.overview.repositories')}</li>
                  <li>JavaScript/Node.js: 3 {t('results.overview.repositories')}</li>
                  <li>Rust: 1 {t('results.overview.repository')}</li>
                  <li>C# .NET: 1 {t('results.overview.repository')}</li>
                  <li>Python: 1 {t('results.overview.repository')}</li>
                </ul>
              </div>
              
              {/* Expertise Distribution */}
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30">
                <h4 className="text-xl font-semibold mb-4">
                  {t('results.overview.expertiseDistribution.title')}
                </h4>
                <ul className="space-y-2">
                  <li>Senior level: 8 {t('results.overview.repositories')} (62%)</li>
                  <li>Middle level: 1 {t('results.overview.repository')} (8%)</li>
                  <li>Jun to Middle: 3 {t('results.overview.repositories')} (23%)</li>
                  <li>Junior level: 1 {t('results.overview.repository')} (7%)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30">
            <h3 className="text-2xl font-semibold mb-4">
              {t('results.overview.keyInsights.title')}
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li>• {t('results.overview.keyInsights.goDominance')}</li>
              <li>• {t('results.overview.keyInsights.javaEnterprise')}</li>
              <li>• {t('results.overview.keyInsights.highPerformance')}</li>
              <li>• {t('results.overview.keyInsights.seniorLevel')}</li>
              <li>• {t('results.overview.keyInsights.teamwork')}</li>
              <li>• {t('results.overview.keyInsights.architecture')}</li>
            </ul>
          </div>
        </section>

        {/* Final Results Section */}
        <section id="final-results" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            {t('results.finalResults.title')}
          </h2>
          
          {/* Results Table Image */}
          <div className="mb-8 text-center">
            <img 
              src="/team-results.jpg" 
              alt={t('results.finalResults.tableAlt')}
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Scoring Criteria */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              {t('results.finalResults.scoringCriteria.title')}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-amber-400">
                  {t('results.finalResults.scoringCriteria.codeRepository')} - 100 {t('results.finalResults.scoringCriteria.points')}
                </h4>
                <p className="text-slate-300 ml-4">
                  {t('results.finalResults.scoringCriteria.deployedSolution')} - 30 {t('results.finalResults.scoringCriteria.pointsMax')}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-400">
                  {t('results.finalResults.scoringCriteria.eventSearchTests')}
                </h4>
                <ul className="text-slate-300 ml-4 space-y-1">
                  <li>1000 rps - 10 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>5000 rps - 20 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>10000 rps - 30 {t('results.finalResults.scoringCriteria.points')}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-400">
                  {t('results.finalResults.scoringCriteria.archiveSearch')}
                </h4>
                <ul className="text-slate-300 ml-4 space-y-1">
                  <li>1000 rps - 10 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>5000 rps - 20 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>10000 rps - 30 {t('results.finalResults.scoringCriteria.points')}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-400">
                  {t('results.finalResults.scoringCriteria.ticketBooking')}
                </h4>
                <ul className="text-slate-300 ml-4 space-y-1">
                  <li>1000 rps - 10 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>5000 rps - 20 {t('results.finalResults.scoringCriteria.points')}</li>
                  <li>10000 rps - 30 {t('results.finalResults.scoringCriteria.points')}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-400">
                  {t('results.finalResults.scoringCriteria.costEfficiency')} - {t('results.finalResults.scoringCriteria.maxPoints')} 30 {t('results.finalResults.scoringCriteria.points')}
                </h4>
                <p className="text-slate-300 ml-4">
                  {t('results.finalResults.scoringCriteria.costDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Winners List */}
          <div className="bg-gradient-to-r from-amber-600/80 to-amber-500/80 p-6 rounded-lg border border-amber-400/30">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {t('results.finalResults.winners.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-amber-300">🥇 1st Place</div>
                <div className="text-xl font-semibold">HelloAlem - 325 {t('results.finalResults.scoringCriteria.points')}</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-slate-300">🥈 2nd Place</div>
                <div className="text-xl font-semibold">Rorobotics - 301 {t('results.finalResults.scoringCriteria.points')}</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-amber-400/80">🥉 3rd Place</div>
                <div className="text-xl font-semibold">Metaload - 296 {t('results.finalResults.scoringCriteria.points')}</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-slate-400">4th Place</div>
                <div className="text-xl font-semibold">Bulbul - 281 {t('results.finalResults.scoringCriteria.points')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section id="winners" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            {t('results.winners.title')}
          </h2>

          {/* Team HelloAlem */}
          <div id="team-helloalem" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              🥇 HelloAlem - 325 {t('results.finalResults.scoringCriteria.points')}
              <a href="https://github.com/hackload-kz/alem" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.participants')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Алимухамед Тлекбаи, Астана</li>
                  <li>• Абылайхан Зулбухаров, Астана</li>
                  <li>• Диас Каппассов, Астана</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.technologies')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Backend: Go (Golang)</li>
                  <li>• Web Server: Nginx</li>
                  <li>• Database: SQLite 3</li>
                  <li>• Queues: RiverQueue</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-amber-400">
                {t('results.winners.keyFeatures')}
              </h4>
              <p className="text-slate-300">
                {t('results.winners.helloalem.description')}
              </p>
            </div>
          </div>

          {/* Team Rorobotics */}
          <div id="team-rorobotics" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              🥈 Rorobotics - 301 {t('results.finalResults.scoringCriteria.points')}
              <a href="https://github.com/hackload-kz/rorobotics" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.participants')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Дмитрий Романов, Павлодар</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.technologies')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Backend: Rust</li>
                  <li>• Database: PostgreSQL</li>
                  <li>• Cache: Redis</li>
                  <li>• Architecture: Monolithic</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-amber-400">
                {t('results.winners.keyFeatures')}
              </h4>
              <p className="text-slate-300">
                {t('results.winners.rorobotics.description')}
              </p>
            </div>
          </div>

          {/* Team Metaload */}
          <div id="team-metaload" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              🥉 Metaload - 296 {t('results.finalResults.scoringCriteria.points')}
              <a href="https://github.com/hackload-kz/metaload-akbori" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.participants')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Dauren, Астана</li>
                  <li>• Диас, Астана</li>
                  <li>• Дармен, Астана</li>
                  <li>• Баят, Астана</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.technologies')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Backend: Go (переписано с Java)</li>
                  <li>• Database: PostgreSQL</li>
                  <li>• Queue: Apache Kafka</li>
                  <li>• Architecture: CQRS + Event Sourcing</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-amber-400">
                {t('results.winners.keyFeatures')}
              </h4>
              <p className="text-slate-300">
                {t('results.winners.metaload.description')}
              </p>
            </div>
          </div>

          {/* Team Bulbul */}
          <div id="team-bulbul" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              Bulbul - 281 {t('results.finalResults.scoringCriteria.points')}
              <a href="https://github.com/hackload-kz/Bulbul" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.participants')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Bolat Kazybayev, Алматы</li>
                  <li>• Serik Shaikamalov, Алматы</li>
                  <li>• Nurmyshev Serik, Астана</li>
                  <li>• Raimbek, Шымкент</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.technologies')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Backend: Go с Gene framework</li>
                  <li>• Load Balancer: Nginx</li>
                  <li>• Cache: Valkyrie (Redis fork)</li>
                  <li>• Search: Elasticsearch</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-amber-400">
                {t('results.winners.keyFeatures')}
              </h4>
              <p className="text-slate-300">
                {t('results.winners.bulbul.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Notable Teams Section */}
        <section id="notable-teams" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            {t('results.notableTeams.title')}
          </h2>

          {/* Team MNP */}
          <div id="team-mnp" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              MNP
              <a href="https://github.com/hackload-kz/mnp" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <p className="text-slate-300 mb-4">
              {t('results.notableTeams.mnp.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.participants')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Батир Кенжаев</li>
                  <li>• Ермагомбет Дархан</li>
                  <li>• Махатов Жасулан</li>
                  <li>• aluad</li>
                  <li>• sultan</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">
                  {t('results.winners.technologies')}
                </h4>
                <ul className="text-slate-300 space-y-1">
                  <li>• Backend: Spring Boot 3.5.4, Java 21</li>
                  <li>• Architecture: Microservices</li>
                  <li>• Security: Spring Security + OAuth2</li>
                  <li>• Testing: Gatling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Zulu */}
          <div id="team-zulu" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/30 mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              Zulu
              <a href="https://github.com/hackload-kz/zulu" target="_blank" rel="noopener noreferrer" 
                 className="ml-4 text-amber-400 hover:text-amber-300 text-lg">
                {t('results.winners.viewCode')}
              </a>
            </h3>
            <p className="text-slate-300 mb-4">
              {t('results.notableTeams.zulu.description')}
            </p>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
              <h4 className="text-lg font-semibold mb-2 text-amber-400">
                {t('results.notableTeams.zulu.keyInsights')}
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li>• {t('results.notableTeams.zulu.insight1')}</li>
                <li>• {t('results.notableTeams.zulu.insight2')}</li>
                <li>• {t('results.notableTeams.zulu.insight3')}</li>
                <li>• {t('results.notableTeams.zulu.insight4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Organizer Comments Section */}
        <section id="organizer-comments" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            {t('results.organizerComments.title')}
          </h2>
          
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/30">
            <div className="space-y-6 text-lg text-slate-200">
              <p>{t('results.organizerComments.summary1')}</p>
              <p>{t('results.organizerComments.summary2')}</p>
              <p>{t('results.organizerComments.summary3')}</p>
              <p>{t('results.organizerComments.summary4')}</p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <a 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors text-white font-semibold text-lg"
          >
            ← {t('results.backToHome')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;