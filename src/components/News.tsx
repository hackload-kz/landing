import React from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsData';
import { useTranslation } from 'react-i18next';

const News: React.FC = () => {
  const { t } = useTranslation()
  const sortedNews = [...newsArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8"
            dangerouslySetInnerHTML={{__html: t("news.newsTitle")}}></h1>
        
        <div className="grid gap-8">
          {sortedNews.map((article) => (
            <Link
              key={article.slug}
              to={`/news/${article.slug}`}
              className="block bg-slate-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-amber-400/50 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.headerImage}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{article.title}</h2>
                <p className="text-slate-400 text-sm mb-4">
                  {new Date(article.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-slate-300">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;