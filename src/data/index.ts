/**
 * Archivo central que exporta los datos según el idioma actual
 * Los componentes deben usar este archivo en lugar de importar directamente desde es/ o en/
 */

import { Language } from '../i18n/types';
import { useLanguage } from '../contexts/LanguageContext';

// Importaciones de español
import { servicios as serviciosEs } from './es/services';
import { doctores as doctoresEs } from './es/doctors';
import { equipo as equipoEs } from './es/team';

// Importaciones de inglés
import { servicios as serviciosEn } from './en/services';
import { doctores as doctoresEn } from './en/doctors';
import { equipo as equipoEn } from './en/team';

// Re-exportar tipos
export type { Servicio } from './es/services';
export type { Doctor } from './es/doctors';
export type { MiembroEquipo } from './es/team';

/**
 * Obtiene los servicios según el idioma
 * @param language - Idioma actual ('es' | 'en')
 */
export const getServicios = (language: Language) => {
  return language === 'es' ? serviciosEs : serviciosEn;
};

/**
 * Obtiene los doctores según el idioma
 * @param language - Idioma actual ('es' | 'en')
 */
export const getDoctores = (language: Language) => {
  return language === 'es' ? doctoresEs : doctoresEn;
};

/**
 * Obtiene el equipo según el idioma
 * @param language - Idioma actual ('es' | 'en')
 */
export const getEquipo = (language: Language) => {
  return language === 'es' ? equipoEs : equipoEn;
};

/**
 * Hook para obtener servicios según el idioma actual
 * Usa el contexto de idioma automáticamente
 * Debe usarse dentro de un componente React
 */
export const useServicios = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return getServicios(language);
};

/**
 * Hook para obtener doctores según el idioma actual
 * Usa el contexto de idioma automáticamente
 * Debe usarse dentro de un componente React
 */
export const useDoctores = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return getDoctores(language);
};

/**
 * Hook para obtener equipo según el idioma actual
 * Usa el contexto de idioma automáticamente
 * Debe usarse dentro de un componente React
 */
export const useEquipo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return getEquipo(language);
};
