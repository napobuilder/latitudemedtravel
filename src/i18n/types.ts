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

  // Process Section
  process: {
    title: string;
    subtitle: string;
    steps: {
      consultation: {
        title: string;
        description: string;
      };
      travel: {
        title: string;
        description: string;
      };
      procedure: {
        title: string;
        description: string;
      };
      recovery: {
        title: string;
        description: string;
      };
    };
  };

  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
    questions: {
      safety: {
        question: string;
        answer: string;
      };
      package: {
        question: string;
        answer: string;
      };
      recovery: {
        question: string;
        answer: string;
      };
    };
  };

  // TrustBar Section
  trustBar: {
    jci: {
      title: string;
      subtitle: string;
    };
    surgeons: {
      title: string;
      subtitle: string;
    };
    support: {
      title: string;
      subtitle: string;
    };
    accompaniment: {
      title: string;
      subtitle: string;
    };
  };

  // Naddia Section
  naddia: {
    title: string;
    tagline: string;
    paragraphs: string[];
    closing: string;
  };

  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    previousVideo: string;
    nextVideo: string;
    goToVideo: string;
    testimonials: {
      ana: {
        text: string;
        author: string;
      };
      isabella: {
        text: string;
        author: string;
      };
    };
  };

  // Experts Section
  experts: {
    title: string;
    subtitle: string;
  };

  // Team Section
  team: {
    title: string;
    subtitle: string;
  };

  // Common
  common: {
    learnMore: string;
    goToImage: string;
  };
}
