import React from 'react';
import { useScrollAnimation, slideInFromLeftAnimation, slideInFromRightAnimation } from '../utils/animationUtils';

const Challenge: React.FC = () => {
  const { isVisible: isLeftVisible, elementRef: leftRef } = useScrollAnimation();
  const { isVisible: isRightVisible, elementRef: rightRef } = useScrollAnimation();

  return (
    <section className="py-20 bg-indigo-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Техническая <span className="text-green-400">Задача</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`${slideInFromLeftAnimation(isLeftVisible)}`}
            style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-400">
              Ваша Миссия: Создать Отказоустойчивую Билетную Систему
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-400 text-indigo-900 mr-3">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <p className="text-gray-300">
                  Создать сервис, способный обработать <span className="font-bold text-white">100 000 запросов на билеты</span>, причем 80% билетов должны быть проданы в течение первых 4 часов.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-400 text-indigo-900 mr-3">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <p className="text-gray-300">
                  Реализовать <span className="font-bold text-white">три различных сценария интеграции</span> с партнерскими сервисами (платежные шлюзы, email-уведомления, аналитика).
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-400 text-indigo-900 mr-3">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <p className="text-gray-300">
                  Обеспечить <span className="font-bold text-white">отказоустойчивость</span> с плавной деградацией при экстремальных нагрузках.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-400 text-indigo-900 mr-3">
                  <span className="text-sm font-semibold">4</span>
                </div>
                <p className="text-gray-300">
                  Достичь <span className="font-bold text-white">показателей производительности:</span> 99% запросов обрабатываются менее чем за 500мс, даже при пиковой нагрузке.
                </p>
              </li>
            </ul>
          </div>

          <div 
            ref={rightRef}
            className={`${slideInFromRightAnimation(isRightVisible)}`}
            style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
          >
            <div className="bg-indigo-900/70 backdrop-blur-sm rounded-lg p-6 border border-indigo-700/50">
              <h4 className="text-lg font-semibold mb-4 text-center text-green-400">Симуляция Паттерна Трафика</h4>
              
              <div className="relative h-64">
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-400">
                  Запросов в секунду
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-xs text-gray-400">
                  Время (часы)
                </div>

                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 h-full w-px bg-gray-700"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-700"></div>
                  
                  {[0.25, 0.5, 0.75].map((pos, i) => (
                    <div key={i} className="absolute w-full h-px bg-gray-800" style={{ top: `${pos * 100}%` }}></div>
                  ))}
                  
                  {[0.25, 0.5, 0.75].map((pos, i) => (
                    <div key={i} className="absolute h-full w-px bg-gray-800" style={{ left: `${pos * 100}%` }}></div>
                  ))}
                  
                  <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d="M0,100 L5,98 L10,95 L15,85 L20,60 L25,20 L30,5 L35,10 L40,15 L45,18 L50,25 L55,30 L60,32 L65,38 L70,45 L75,50 L80,65 L85,75 L90,85 L95,95 L100,98" 
                      fill="none" 
                      stroke="#4ade80" 
                      strokeWidth="2"
                      className="drop-shadow-[0_0_3px_rgba(74,222,128,0.7)]"
                    />
                    <path 
                      d="M0,100 L5,98 L10,95 L15,85 L20,60 L25,20 L30,5 L35,10 L40,15 L45,18 L50,25 L55,30 L60,32 L65,38 L70,45 L75,50 L80,65 L85,75 L90,85 L95,95 L100,98 L100,100 Z" 
                      fill="url(#gradient)" 
                      fillOpacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute text-xs text-green-400 font-bold" style={{ left: '25%', top: '5%' }}>
                    <div className="bg-indigo-900/80 backdrop-blur-sm p-1 rounded">Пиковая Нагрузка</div>
                    <svg className="w-3 h-3 ml-2" viewBox="0 0 12 12">
                      <path d="M6 0L0 12H12L6 0Z" fill="#4ade80" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h5 className="font-semibold text-sm mb-2">Ключевые Метрики:</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-indigo-800/50 p-2 rounded">
                    <div className="text-green-400 font-mono mb-1 text-xs">МАКС_ПОЛЬЗ</div>
                    <div>100,000</div>
                  </div>
                  <div className="bg-indigo-800/50 p-2 rounded">
                    <div className="text-green-400 font-mono mb-1 text-xs">ПИК_RPS</div>
                    <div>5,000+</div>
                  </div>
                  <div className="bg-indigo-800/50 p-2 rounded">
                    <div className="text-green-400 font-mono mb-1 text-xs">ЦЕЛЕВАЯ_ЗАДЕРЖКА</div>
                    <div>&lt; 500мс</div>
                  </div>
                  <div className="bg-indigo-800/50 p-2 rounded">
                    <div className="text-green-400 font-mono mb-1 text-xs">ДОСТУПНОСТЬ</div>
                    <div>99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;