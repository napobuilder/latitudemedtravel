import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../i18n/types';
import { detectLanguage, saveLanguagePreference } from '../utils/languageDetector';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  initialLanguage 
}) => {
  // Inicializar con el idioma detectado o el proporcionado
  const [language, setLanguageState] = useState<Language>(
    initialLanguage || detectLanguage()
  );

  // Efecto para guardar la preferencia cuando cambia el idioma
  useEffect(() => {
    saveLanguagePreference(language);
    // Actualizar el atributo lang del HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Función para cambiar el idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguagePreference(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook para usar el contexto de idioma
 * Debe usarse dentro de un LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
