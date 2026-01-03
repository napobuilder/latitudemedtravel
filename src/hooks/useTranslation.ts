import { Translations } from '../i18n/types';
import { useLanguage } from '../contexts/LanguageContext';
import { es } from '../i18n/translations/es';
import { en } from '../i18n/translations/en';

/**
 * Hook type-safe para obtener traducciones
 * 
 * @example
 * const t = useTranslation();
 * <h1>{t.hero.title}</h1>
 */
export const useTranslation = (): Translations => {
  const { language } = useLanguage();

  // Retornar las traducciones según el idioma actual
  switch (language) {
    case 'es':
      return es;
    case 'en':
      return en;
    default:
      return en; // Fallback a inglés
  }
};
