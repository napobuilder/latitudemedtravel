import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const TrustBar: React.FC = () => {
  const t = useTranslation();
  
  const trustItems = [
    {
      icon: (
        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: t.trustBar.jci.title,
      subtitle: t.trustBar.jci.subtitle,
      highlight: '100%'
    },
    {
      icon: (
        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5m-5-4h.01M9 7h.01M13 7h.01M15 7h.01M9 11h.01M13 11h.01M15 11h.01M9 15h.01M13 15h.01M15 15h.01M9 19h.01M13 19h.01M15 19h.01" />
        </svg>
      ),
      title: t.trustBar.surgeons.title,
      subtitle: t.trustBar.surgeons.subtitle,
      highlight: 'SCCP'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t.trustBar.support.title,
      subtitle: t.trustBar.support.subtitle,
      highlight: '24/7'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.trustBar.accompaniment.title,
      subtitle: t.trustBar.accompaniment.subtitle,
      highlight: 'Total'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-brand-yellow-400/30"
            >
              {/* Icono con fondo degradado */}
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {item.icon}
              </div>
              
              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold text-brand-yellow-400 bg-brand-blue-900 rounded-full">
                  {item.highlight}
                </span>
              </div>

              {/* Contenido */}
              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold text-brand-blue-900 mb-1 group-hover:text-brand-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  {item.subtitle}
                </p>
              </div>

              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-yellow-400/0 via-brand-yellow-400/5 to-brand-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
