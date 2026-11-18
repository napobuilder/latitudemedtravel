import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: '"Llegué sin saber nada del proceso y me fueron guiando en cada paso, hasta con cosas que no sabía que tenía que preguntar."',
    name: 'María L.',
    location: 'Miami, FL',
    procedure: 'Procedimiento en Colombia',
    stars: 5,
  },
  {
    quote: '"Lo que más agradezco es que cuando tuve una duda después de la cirugía, alguien me respondió el mismo día. Eso no lo consigues sola."',
    name: 'Carmen R.',
    location: 'Houston, TX',
    procedure: 'Procedimiento en Rep. Dominicana',
    stars: 5,
  },
  {
    quote: '"Sentí que tenía a alguien de mi lado, no solo a alguien vendiéndome una cirugía. La diferencia es enorme."',
    name: 'Ana P.',
    location: 'New Jersey',
    procedure: 'Procedimiento en Colombia',
    stars: 5,
  },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const LandingTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-cream-light">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[620px] mb-14"
        >
          <span className="font-body text-[13px] font-semibold text-gold-deep tracking-wider uppercase mb-3 block">
            Testimonios reales
          </span>
          <h2 className="font-serif text-[30px] md:text-[36px] text-navy leading-tight">
            Lo que dicen quienes ya hicieron este viaje
          </h2>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-lg border-l-[3px] border-l-gold p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <StarRating count={t.stars} />
              <p className="mt-5 font-serif text-[17px] text-navy leading-relaxed italic">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-cream">
                <p className="font-body text-[14px] font-semibold text-navy">{t.name}</p>
                <p className="font-body text-[13px] text-slate">{t.location}</p>
                <p className="font-body text-[12px] text-gold-deep mt-1">{t.procedure}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-lg border-l-[3px] border-l-gold p-6 shadow-sm"
              >
                <StarRating count={testimonials[activeIndex].stars} />
                <p className="mt-4 font-serif text-[17px] text-navy leading-relaxed italic">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="mt-5 pt-4 border-t border-cream">
                  <p className="font-body text-[14px] font-semibold text-navy">{testimonials[activeIndex].name}</p>
                  <p className="font-body text-[13px] text-slate">{testimonials[activeIndex].location}</p>
                  <p className="font-body text-[12px] text-gold-deep mt-1">{testimonials[activeIndex].procedure}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-gold w-7' : 'bg-navy/20 hover:bg-navy/40'
                }`}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
