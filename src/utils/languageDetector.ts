import { Language } from '../i18n/types';

const LANGUAGE_STORAGE_KEY = 'lmt-language';
const DEFAULT_LANGUAGE: Language = 'en';

// Países que deben usar inglés
const ENGLISH_COUNTRIES = ['US', 'CA', 'GB', 'AU', 'NZ', 'IE', 'ZA'];

// Países latinoamericanos que deben usar español
const SPANISH_COUNTRIES = [
  'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN',
  'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'JM', 'TT', 'BZ', 'BS', 'BB', 'SR',
  'GY', 'GF', 'FK', 'PR', 'VI', 'AW', 'CW', 'BQ', 'SX'
];

/**
 * Detecta el país del usuario usando geolocalización por IP
 * Intenta primero con headers de Netlify, luego con API externa
 */
const detectCountryByIP = async (): Promise<string | null> => {
  if (typeof window === 'undefined') return null;

  try {
    // Método 1: Intentar obtener país desde headers de Netlify (si está disponible)
    // Netlify pasa el país en el header x-nf-country-code o x-country-code
    // Esto solo funciona en el servidor, así que lo intentamos con fetch
    
    // Método 2: Usar API gratuita de geolocalización por IP
    // Usamos ipapi.co que es gratuita y confiable
    const response = await fetch('https://ipapi.co/country_code/', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain',
      },
    });

    if (response.ok) {
      const countryCode = (await response.text()).trim().toUpperCase();
      return countryCode || null;
    }
  } catch (error) {
    // Si falla la detección por IP, continuamos con otros métodos
    console.debug('No se pudo detectar país por IP:', error);
  }

  return null;
};

/**
 * Mapea un código de país a un idioma
 */
const countryToLanguage = (countryCode: string | null): Language | null => {
  if (!countryCode) return null;

  const upperCode = countryCode.toUpperCase();
  
  if (ENGLISH_COUNTRIES.includes(upperCode)) {
    return 'en';
  }
  
  if (SPANISH_COUNTRIES.includes(upperCode)) {
    return 'es';
  }

  // Si no está en ninguna lista, retornar null para usar otros métodos
  return null;
};

/**
 * Detecta el idioma preferido del usuario
 * Prioridad:
 * 1. localStorage (preferencia guardada)
 * 2. Detección geográfica por país (USA/Canadá -> inglés, Latinoamérica -> español)
 * 3. Idioma del navegador
 * 4. Idioma por defecto (inglés)
 */
export const detectLanguage = async (): Promise<Language> => {
  // 1. Verificar si hay una preferencia guardada
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === 'es' || savedLanguage === 'en') {
      return savedLanguage as Language;
    }

    // 2. Intentar detectar por geolocalización (solo en primera visita)
    try {
      const countryCode = await detectCountryByIP();
      const geoLanguage = countryToLanguage(countryCode);
      if (geoLanguage) {
        return geoLanguage;
      }
    } catch (error) {
      // Si falla, continuamos con otros métodos
      console.debug('Detección geográfica falló, usando método alternativo');
    }

    // 3. Detectar idioma del navegador
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

  // 4. Idioma por defecto
  return DEFAULT_LANGUAGE;
};

/**
 * Versión síncrona de detectLanguage para compatibilidad
 * Usa solo métodos síncronos (localStorage y navegador)
 */
export const detectLanguageSync = (): Language => {
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
