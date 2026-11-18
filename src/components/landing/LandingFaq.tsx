import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: '¿Qué incluye la valoración de $55?',
    answer: 'Una videollamada personalizada de 15 minutos donde revisamos tu caso, te explicamos opciones realistas para tu presupuesto, y respondemos todas tus preguntas antes de que tomes cualquier decisión. Los $55 se descuentan del costo total si decides avanzar con nosotros.',
  },
  {
    question: '¿Por qué no puedo contactar directo a la clínica?',
    answer: 'Puedes, pero pierdes la evaluación previa que hacemos del equipo médico, la negociación de condiciones a tu favor, la coordinación logística completa (vuelos, hotel, transporte), y el respaldo de alguien de tu lado si algo no sale como esperabas. Nuestro trabajo es que no tengas que resolver nada de eso sola.',
  },
  {
    question: '¿Es seguro operarme en Colombia o República Dominicana?',
    answer: 'Trabajamos únicamente con equipos médicos que hemos evaluado personalmente bajo nuestros propios criterios de experiencia, certificaciones internacionales y seguimiento post-operatorio. Colombia y República Dominicana tienen cirujanos de clase mundial — nuestro trabajo es conectarte solo con los mejores.',
  },
  {
    question: '¿Cuánto cuesta el procedimiento completo?',
    answer: 'Varía según el procedimiento y tus necesidades específicas — por eso la valoración inicial existe: para darte un número real basado en tu caso, no una tarifa genérica. En general, operarte con nosotros puede ahorrarte entre un 40% y 60% respecto a los mismos procedimientos en Estados Unidos.',
  },
  {
    question: '¿Qué pasa si tengo una emergencia después de la cirugía?',
    answer: 'Tienes acceso directo a nuestro equipo durante toda tu estadía y también después de regresar a casa. No dependes de una línea de atención genérica — nos contactas directamente y nosotros coordinamos con el equipo médico lo que sea necesario.',
  },
];

const FaqItem: React.FC<{
  item: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ item, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    className="border-b border-cream last:border-b-0"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      aria-expanded={isOpen}
    >
      <h3 className="font-serif text-[17px] md:text-[18px] text-navy font-medium group-hover:text-gold-deep transition-colors duration-200 pr-2">
        {item.question}
      </h3>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-cream flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'bg-navy border-navy rotate-45' : 'bg-cream-light group-hover:border-gold/40'
      }`}>
        <svg
          className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="font-body text-[15px] text-slate leading-relaxed pb-6 pr-12 max-w-[680px]">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const LandingFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 md:gap-16">
          {/* Left column - Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-32 md:self-start"
          >
            <span className="font-body text-[13px] font-semibold text-gold-deep tracking-wider uppercase mb-3 block">
              Preguntas frecuentes
            </span>
            <h2 className="font-serif text-[30px] md:text-[34px] text-navy leading-tight">
              Respuestas a lo que probablemente estés pensando
            </h2>
            <p className="mt-4 font-body text-[15px] text-slate">
              Si tienes alguna otra pregunta, agenda tu valoración o escríbenos por WhatsApp.
            </p>

            <a
              href="#valoracion"
              className="mt-6 inline-flex items-center gap-2 font-body text-[14px] font-semibold text-gold-deep hover:text-navy transition-colors duration-200"
            >
              Agenda tu valoración →
            </a>
          </motion.div>

          {/* Right column - FAQ items */}
          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                item={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
