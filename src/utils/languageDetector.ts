import { Language } from '../i18n/types';

const LANGUAGE_STORAGE_KEY = 'lmt-language';
const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Detecta el idioma preferido del usuario
 * Prioridad:
 * 1. localStorage (preferencia guardada)
 * 2. Idioma del navegador
 * 3. Idioma por defecto (inglés)
 */
export const detectLanguage = (): Language => {
  // 1. Verificar si hay una preferencia guardada
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === 'es' || savedLanguage === 'en') {
      return savedLanguage as Language;
    }

    // 2. Detectar idioma del navegador
    const browserLanguage = navigator.language || navigator.languages?.[0];
    if (browserLanguage) {
      const langCode = browserLanguage.toLowerCase().split('-')[0];
      if (langCode === 'es') {
        return 'es';
      }
      if (langCode === 'en') {
        return 'en';
      }
    }
  }

  // 3. Idioma por defecto
  return DEFAULT_LANGUAGE;
};

/**
 * Guarda la preferencia de idioma en localStorage
 */
export const saveLanguagePreference = (language: Language): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
};

/**
 * Obtiene el idioma guardado o null si no existe
 */
export const getSavedLanguage = (): Language | null => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'es' || saved === 'en') {
      return saved as Language;
    }
  }
  return null;
};
