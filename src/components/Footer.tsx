import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <img src="/assets/images/logo-latitude.png" alt="Icono de Latitude Med Travel" className="h-10 w-auto brightness-0 invert" />
              <span className="font-display text-lg tracking-wide uppercase text-brand-yellow-400">
                LATITUDE MED TRAVEL
              </span>
            </a>
            <p className="mt-4 text-gray-300 text-sm">Tu viaje de transformación, con la seguridad y confianza que mereces.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold tracking-wider uppercase">Navegación</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#proceso" className="text-gray-300 hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#procedimientos" className="text-gray-300 hover:text-white transition-colors">Procedimientos</a></li>
              <li><a href="#expertos" className="text-gray-300 hover:text-white transition-colors">Nuestros Expertos</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="font-bold tracking-wider uppercase">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/#procedimientos-corporales" className="text-gray-300 hover:text-white transition-colors">Cirugía Corporal</a></li>
              <li><a href="/#procedimientos-faciales" className="text-gray-300 hover:text-white transition-colors">Cirugía Facial</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-bold tracking-wider uppercase">Contacto (📍 Tennessee)</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span>Tennessee</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <span>+1 (616) 274-8519</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Latitude Med Travel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
