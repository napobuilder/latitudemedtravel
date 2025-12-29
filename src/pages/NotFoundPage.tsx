import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ilustración/Icono */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-brand-blue-100 mb-6">
            <svg
              className="w-20 h-20 text-brand-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-bold text-brand-blue-900 mb-4">404</h1>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">
          Página No Encontrada
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida. 
          Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-8 rounded-full hover:bg-brand-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Volver al Inicio
          </Link>
          <Link
            to="/#procedimientos"
            className="inline-flex items-center justify-center bg-white text-brand-blue-900 font-semibold py-3 px-8 rounded-full border-2 border-brand-blue-900 hover:bg-brand-blue-900 hover:text-white transition-all duration-300"
          >
            Ver Procedimientos
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Enlaces útiles:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/#proceso" className="text-brand-blue-700 hover:text-brand-blue-900 font-medium">
              Cómo Funciona
            </Link>
            <Link to="/#expertos" className="text-brand-blue-700 hover:text-brand-blue-900 font-medium">
              Nuestros Expertos
            </Link>
            <Link to="/#faq" className="text-brand-blue-700 hover:text-brand-blue-900 font-medium">
              Preguntas Frecuentes
            </Link>
            <Link to="/#contacto" className="text-brand-blue-700 hover:text-brand-blue-900 font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

