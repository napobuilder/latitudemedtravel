import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/types';
import { getLanguageFromPath, getPathWithoutLanguage, buildLocalizedPath, getServicesRouteName } from '../utils/routes';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[1];

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);

    // Obtener la ruta actual sin el prefijo de idioma
    const pathWithoutLanguage = getPathWithoutLanguage(location.pathname);
    
    // Si estamos en la homepage, solo cambiar el prefijo
    if (pathWithoutLanguage === '/' || pathWithoutLanguage === '') {
      navigate(`/${newLanguage}`, { replace: true });
      return;
    }

    // Si estamos en una página de servicio, necesitamos convertir la ruta
    // /es/servicios/rinoplastia -> /en/procedures/rinoplastia
    const pathSegments = pathWithoutLanguage.split('/').filter(Boolean);
    
    if (pathSegments[0] === 'servicios' || pathSegments[0] === 'procedures') {
      // Es una página de servicio
      const serviceId = pathSegments[1];
      const newRouteName = getServicesRouteName(newLanguage);
      navigate(`/${newLanguage}/${newRouteName}/${serviceId}`, { replace: true });
    } else {
      // Otra ruta, solo cambiar el prefijo
      navigate(buildLocalizedPath(newLanguage, pathWithoutLanguage), { replace: true });
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                language === lang.code ? 'bg-brand-yellow-400/10 font-semibold' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-gray-700">{lang.name}</span>
              {language === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-brand-blue-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
