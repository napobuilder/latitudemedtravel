/**
 * Tipos TypeScript para el sistema de internacionalización
 * Define la estructura completa de todas las traducciones
 */

export type Language = 'es' | 'en';

export interface Translations {
  // Header & Navigation
  header: {
    nav: {
      howItWorks: string;
      services: string;
      experts: string;
      faq: string;
    };
    cta: {
      consultation: string;
    };
    servicesMenu: {
      facialProcedures: string;
      bodyProcedures: string;
    };
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };

  // Footer
  footer: {
    tagline: string;
    navigation: {
      title: string;
      howItWorks: string;
      procedures: string;
      experts: string;
      faq: string;
      contact: string;
    };
    services: {
      title: string;
      bodySurgery: string;
      facialSurgery: string;
    };
    contact: {
      title: string;
      location: string;
    };
    copyright: string;
  };

  // Common
  common: {
    learnMore: string;
    goToImage: string;
  };
}
