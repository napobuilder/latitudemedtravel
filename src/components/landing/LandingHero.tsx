import React from 'react';
import { motion } from 'framer-motion';

interface LandingHeroProps {
  onSmsClick?: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onSmsClick }) => {
  return (
    <section id="top" className="relative bg-[#FAF7F2] overflow-hidden">
      
      {/* DESKTOP LAYOUT (lg y superior): Banner panorámico inmersivo */}
      <div className="hidden lg:flex relative min-h-[720px] xl:min-h-[780px] items-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/landing/beauty-party-hero-banner.webp"
            alt="Beauty Party Weekend in Dominican Republic"
            className="w-full h-full object-cover object-right"
          />
          {/* Gradiente suave para legibilidad del texto en el lado izquierdo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-transparent w-[55%] xl:w-[50%]" />
        </div>

        {/* Hero Content on the left */}
        <div className="relative z-10 max-w-[1180px] mx-auto px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[520px] text-left"
          >
            <div className="mb-4">
              <span className="font-serif text-[56px] xl:text-[66px] text-[#0B1B33] font-normal leading-[0.92] block drop-shadow-sm">
                Beauty Party
              </span>
              <span className="font-serif italic text-[52px] xl:text-[62px] text-[#B5852A] font-light leading-none -mt-1 block">
                Weekend
              </span>
              <span className="inline-block tracking-[0.35em] uppercase text-sm font-semibold text-[#0B1B33] mt-3 border-b-2 border-[#D9A441]/50 pb-1">
                DOMINICAN REPUBLIC
              </span>
            </div>

            <h1 className="font-serif text-[34px] xl:text-[42px] text-[#0B1B33] font-normal leading-[1.15] mt-6">
              A little getaway.{' '}
              <span className="italic text-[#B5852A] font-light block xl:inline">
                A beautiful new you.
              </span>
            </h1>

            <p className="font-body text-[17px] xl:text-[19px] text-[#3A4353] leading-relaxed mt-4 max-w-[480px]">
              Three days, two nights of luxury, beauty and culture in the heart of the Caribbean.
            </p>

            <div className="mt-8">
              <button
                onClick={onSmsClick}
                className="inline-flex items-center gap-3 bg-[#0B1B33] hover:bg-[#142850] text-white px-8 py-4 rounded-full font-body text-base font-semibold tracking-wider transition-all shadow-xl shadow-[#0B1B33]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>TEXT BEAUTY FOR DETAILS</span>
                <span className="text-[#E8C068] text-lg leading-none">→</span>
              </button>
              <p className="font-body text-xs text-[#5B6472] mt-3 tracking-wide">
                Private information by SMS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE & TABLET LAYOUT (< lg): Diseño optimizado vertical sin cortes ni texto sobre la cara */}
      <div className="lg:hidden pt-24 sm:pt-28 pb-12 px-5 sm:px-8 max-w-[560px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-block">
            <span className="font-serif text-[42px] sm:text-[48px] text-[#0B1B33] font-normal leading-[0.92] block">
              Beauty Party
            </span>
            <span className="font-serif italic text-[38px] sm:text-[44px] text-[#B5852A] font-light leading-none -mt-1 block">
              Weekend
            </span>
            <span className="inline-block tracking-[0.3em] uppercase text-xs font-semibold text-[#0B1B33] mt-2.5 border-b border-[#D9A441]/50 pb-1">
              DOMINICAN REPUBLIC
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl text-[#0B1B33] font-normal leading-snug mt-5">
            A little getaway.{' '}
            <span className="italic text-[#B5852A] font-light block">
              A beautiful new you.
            </span>
          </h1>

          <p className="font-body text-sm sm:text-base text-[#5B6472] leading-relaxed mt-3 px-2">
            Three days, two nights of luxury, beauty and culture in the heart of the Caribbean.
          </p>
        </motion.div>

        {/* Banner Photo Card: 100% visible, ni la modelo ni el ticket se cortan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white mb-6 bg-white"
        >
          <img
            src="/assets/images/landing/beauty-party-hero-banner.webp"
            alt="Beauty Party Weekend Dominican Republic"
            className="w-full h-auto object-cover block"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onSmsClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0B1B33] hover:bg-[#142850] text-white px-8 py-4 rounded-full font-body text-sm sm:text-base font-semibold tracking-wider transition-all shadow-xl shadow-[#0B1B33]/25 active:scale-[0.98]"
          >
            <span>TEXT BEAUTY FOR DETAILS</span>
            <span className="text-[#E8C068] text-lg leading-none">→</span>
          </button>
          <p className="font-body text-xs text-[#5B6472] mt-3 tracking-wide">
            Private information by SMS.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default LandingHero;
