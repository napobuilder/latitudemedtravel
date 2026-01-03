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

  // Service Detail Page
  serviceDetail: {
    scheduleConsultation: string;
    consultation: string;
    initialConsultationPrice: string;
    whatIncludes: string;
    whatIncludesList: {
      personalizedEvaluation: string;
      caseReview: string;
      procedureInfo: string;
      processGuidance: string;
      personalizedQuote: string;
    };
    whatIs: string;
    ourSpecialist: string;
    notFound: {
      title: string;
      message: string;
      viewAll: string;
      goBack: string;
    };
  };

  // Procedures Section
  procedures: {
    initialConsultationPrice: string;
  };

  // Common
  common: {
    learnMore: string;
    goToImage: string;
  };
}
