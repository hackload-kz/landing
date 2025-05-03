import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { newsArticles } from '../data/newsData';

const NewsArticle: React.FC = () => {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Статья не найдена</h1>
          <Link to="/news" className="text-amber-400 hover:text-amber-300">
            ← Вернуться к списку новостей
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/news" className="text-amber-400 hover:text-amber-300 mb-8 inline-block">
          ← Вернуться к списку новостей
        </Link>
        
        <article>
          <img
            src={article.headerImage}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          
          <p className="text-slate-400 mb-8">
            {new Date(article.date).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;