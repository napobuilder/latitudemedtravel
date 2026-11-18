import React from 'react';
import { motion } from 'framer-motion';

const LandingAdvisor: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-cream-light rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-[4px] border-white shadow-xl shadow-navy/10">
                  <img
                    src="/assets/images/landing/advisor-naddia.jpg"
                    alt="Asesora de Latitude Med Travel"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online badge */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-400 rounded-full border-[3px] border-white flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="font-serif text-[24px] md:text-[28px] text-navy font-medium leading-tight mb-4">
                Un equipo dedicado a acompañarte, no solo a venderte una cirugía
              </h3>
              <p className="font-body text-[15px] md:text-base text-slate leading-relaxed max-w-[520px]">
                Detrás de Latitude Med Travel hay un equipo que se encarga personalmente de cada caso — 
                desde tu primera pregunta hasta tu recuperación en casa. No estás hablando con un call center, 
                estás hablando con alguien que entiende tu situación porque ha acompañado a cientos de pacientes 
                en este mismo proceso.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="#valoracion"
                  className="inline-flex items-center gap-2 bg-navy text-white font-body font-semibold text-[14px] px-6 py-3 rounded-sm hover:bg-navy-deep transition-all duration-300 shadow-md"
                >
                  Habla con nuestro equipo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <span className="font-body text-[13px] text-slate">
                  Respuesta en menos de 24h
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingAdvisor;
