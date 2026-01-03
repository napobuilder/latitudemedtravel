import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Naddia: React.FC = () => {
  const t = useTranslation();
  
  return (
    <section id="naddia" className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/images/logo-latitude.png" 
              alt="Logo de Latitude Med Travel" 
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-8">
            {t.naddia.title}
          </h2>

          {/* Contenido */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl md:text-2xl font-semibold text-brand-blue-900">
              {t.naddia.tagline}
            </p>
            
            {t.naddia.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 1 ? 'font-semibold text-brand-blue-800' : ''}>
                {paragraph}
              </p>
            ))}
            
            <p className="text-xl font-semibold text-brand-blue-900 pt-4 border-t border-gray-200">
              {t.naddia.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naddia;
