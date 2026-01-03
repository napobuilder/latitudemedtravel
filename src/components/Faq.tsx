import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Faq: React.FC = () => {
  const t = useTranslation();
  
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">{t.faq.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">{t.faq.subtitle}</p>
        </div>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>{t.faq.questions.safety.question}</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              {t.faq.questions.safety.answer}
            </p>
          </details>
          {/* FAQ Item 2 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>{t.faq.questions.package.question}</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              {t.faq.questions.package.answer}
            </p>
          </details>
          {/* FAQ Item 3 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>{t.faq.questions.recovery.question}</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              {t.faq.questions.recovery.answer}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
