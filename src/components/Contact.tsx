import React from 'react';
import { useScrollAnimation, fadeInAnimation } from '../utils/animationUtils';

const Contact: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={elementRef}
      className={`py-20 bg-indigo-950 text-white px-4 sm:px-6 lg:px-8 ${fadeInAnimation(isVisible)}`}
      style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-green-400">Вопросы?</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-indigo-900/50 backdrop-blur-sm rounded-lg p-8 border border-indigo-700/30">
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            <p className="text-gray-300 mb-8">
              Присоединяйтесь к нашему Telegram-чату, чтобы следить за новостями и задавать вопросы организаторам напрямую.
              Мы здесь, чтобы помочь вам подготовиться к хакатону!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div>
                <a
                  href="https://t.me/teamleads_kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-green-400 hover:bg-green-500 transition-colors duration-150"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.16 7.77c-.12 1.31-.63 4.49-1.12 8.34-.21 1.77-.69 2.4-1.14 2.46-.97.12-1.71-.63-2.65-1.23-.98-.67-1.54-1.08-2.49-1.74-.99-.72-.36-1.23.21-1.92.15-.18 2.72-2.48 2.77-2.69.04-.21-.05-.3-.28-.21-.15.06-1.89 1.2-3.36 2.22-.34.2-.82.21-1.21.12-.66-.15-1.35-.32-1.32-.77.03-.31.36-.6.93-.83C8.4 10.68 10.06 9.9 12.36 8.67c.67-.36 3.11-1.35 3.11-.56 0 .21-.44.92-.61 1.25-.16.33-.99 2.32-.99 2.32s-2.79 2.69-3.35 3.23c-1.07 1.03-1.47 1.84-1.5 2.67-.04 1.29.84 1.77 2.06 1.17 1.19-.59 3.27-1.89 3.27-1.89s.68.77 1.14 1.26c.44.47 1.15 1.06 1.67 1.06.73 0 1.17-.38 1.24-1.21.09-.92.63-5.85.71-6.62.06-.61-.02-.94-.23-1.21.33-.17.6-.5.79-.89.21-.41.33-.9.33-1.4 0-.48-.2-.95-.61-1.28-.41-.33-.95-.5-1.48-.5-.93 0-1.64.47-2.07 1.16-.25.43-.33.69-.46 1.36z" />
                  </svg>
                  Присоединиться к Telegram
                </a>
              </div>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-indigo-300 mb-1">или отсканируйте QR-код:</p>
                <div className="h-24 w-24 bg-white p-1 rounded inline-block">
                  <div className="h-full w-full bg-indigo-900/20 flex items-center justify-center text-xs text-indigo-900">
                    QR-код
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-700/20">
              <h4 className="font-semibold mb-3 text-green-400">Место проведения</h4>
              <p className="text-gray-300">Алматы, Казахстан</p>
              <p className="text-gray-300">Точное место будет объявлено позже</p>
            </div>
            
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-700/20">
              <h4 className="font-semibold mb-3 text-green-400">Даты</h4>
              <p className="text-gray-300">1-3 августа 2025</p>
              <p className="text-gray-300">9:00 - 22:00 (местное время)</p>
            </div>
            
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-700/20">
              <h4 className="font-semibold mb-3 text-green-400">Email</h4>
              <p className="text-gray-300">contact@hackload.kz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;