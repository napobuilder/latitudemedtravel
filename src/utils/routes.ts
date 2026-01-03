import { Language } from '../i18n/types';

/**
 * Obtiene el idioma desde la URL actual
 * @param pathname - Pathname actual de la URL
 * @returns El idioma detectado o null si no hay prefijo
 */
export const getLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'es' || firstSegment === 'en') {
    return firstSegment as Language;
  }
  
  return null;
};

/**
 * Obtiene el prefijo de idioma desde la URL
 * @param pathname - Pathname actual de la URL
 * @returns El prefijo de idioma (ej: '/es' o '/en') o '' si no hay prefijo
 */
export const getLanguagePrefix = (pathname: string): string => {
  const language = getLanguageFromPath(pathname);
  return language ? `/${language}` : '';
};

/**
 * Obtiene la ruta sin el prefijo de idioma
 * @param pathname - Pathname actual de la URL
 * @returns La ruta sin el prefijo de idioma
 */
export const getPathWithoutLanguage = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'es' || firstSegment === 'en') {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
};

/**
 * Construye una ruta con el prefijo de idioma
 * @param language - Idioma a usar
 * @param path - Ruta sin prefijo (ej: '/servicios/rinoplastia')
 * @returns Ruta completa con prefijo (ej: '/es/servicios/rinoplastia')
 */
export const buildLocalizedPath = (language: Language, path: string): string => {
  // Asegurar que path empiece con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${language}${normalizedPath}`;
};

/**
 * Obtiene el nombre de la ruta de servicios según el idioma
 * @param language - Idioma actual
 * @returns 'servicios' para español, 'procedures' para inglés
 */
export const getServicesRouteName = (language: Language): string => {
  return language === 'es' ? 'servicios' : 'procedures';
};
