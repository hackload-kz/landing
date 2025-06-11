import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { useScrollAnimation, scaleInAnimation } from '../utils/animationUtils';
import { useTranslation } from 'react-i18next';

const TrackCard: React.FC<{
  title: string;
  level: string;
  description: string;
  features: string[];
  isAdvanced?: boolean;
}> = ({ title, level, description, features, isAdvanced = false }) => {
  const { isVisible, elementRef } = useScrollAnimation();
  
  return (
    <div 
      ref={elementRef}
      className={`bg-gradient-to-b ${isAdvanced ? 'from-blue-900 to-slate-900' : 'from-slate-800 to-slate-900'} 
        rounded-xl shadow-xl overflow-hidden border ${isAdvanced ? 'border-blue-500/30' : 'border-slate-500/30'} 
        transform ${scaleInAnimation(isVisible)}`}
      style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <div className={`p-1 ${isAdvanced ? 'bg-blue-500/20' : 'bg-slate-500/20'}`}>
        <div className="flex justify-between items-center px-4 py-3">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className={`text-sm ${isAdvanced ? 'text-blue-300' : 'text-slate-300'}`}>{level}</p>
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isAdvanced ? 'bg-blue-500/30' : 'bg-slate-500/30'}`}>
            <ArrowRightCircle className={`h-6 w-6 ${isAdvanced ? 'text-blue-300' : 'text-slate-300'}`} />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-300 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <svg className={`h-6 w-6 ${isAdvanced ? 'text-amber-400' : 'text-amber-400'} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Tracks: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white"
            dangerouslySetInnerHTML={{__html: t("tracks.title")}}></h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            {t("tracks.summary")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <TrackCard 
            title={t("tracks.beginner_title")}
            level={t("tracks.beginner_level")}
            description={t("tracks.beginner_description")}
            features={[
              t("tracks.beginner_features_0"),
              t("tracks.beginner_features_1"),
              t("tracks.beginner_features_2")
            ]}
          />
          
          <TrackCard 
            title={t("tracks.advanced_title")}
            level={t("tracks.advanced_level")}
            description={t("tracks.advanced_description")}
            features={[
              t("tracks.advanced_features_0"),
              t("tracks.advanced_features_1"),
              t("tracks.advanced_features_2"),
              t("tracks.advanced_features_3"),
              t("tracks.advanced_features_4")
            ]}
            isAdvanced
          />
        </div>
      </div>
    </section>
  );
};

export default Tracks;