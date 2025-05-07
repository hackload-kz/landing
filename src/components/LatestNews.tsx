import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';
import { newsArticles } from '../data/newsData';
import { useTranslation } from 'react-i18next'

const LatestNews: React.FC = () => {
  const { t } = useTranslation()
  const { isVisible, elementRef } = useScrollAnimation();
  const navigate = useNavigate();
  
  const sortedNews = [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); // Get latest 3 articles

  return (
    <section
      ref={elementRef}
      className={`py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Последние <span className="text-amber-400">Новости</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedNews.map((article) => (
            <div
              key={article.slug}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/30 hover:border-amber-400/30 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/news/${article.slug}`)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.headerImage}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3">{article.date}</p>
                <p className="text-slate-300 line-clamp-3">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center px-6 py-3 border border-amber-400 text-base font-medium rounded-md text-amber-400 hover:bg-amber-400/10 transition-colors duration-150"
          >
            {t("news.allNews")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;