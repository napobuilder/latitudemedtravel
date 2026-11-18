import React from 'react';
import { motion } from 'framer-motion';

interface LandingCtaProps {
  onSmsClick?: () => void;
}

const LandingCta: React.FC<LandingCtaProps> = ({ onSmsClick }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAF7F2] border-t border-[#E8DEC8]">
      {/* Background with tropical colonial atmosphere */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
          alt="Dominican Republic Colonial Setting"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/80" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left / Center: Headline + CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-[650px]"
          >
            <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] text-[#0B1B33] font-normal leading-tight">
              An exclusive experience.{' '}
              <span className="italic text-[#B5852A] block sm:inline font-light">
                A limited group.
              </span>
            </h2>

            <p className="font-body text-[#5B6472] text-sm sm:text-base mt-3">
              Only 7 spots available. Reserve yours or receive private information by SMS.
            </p>

            <div className="mt-8">
              <button
                onClick={onSmsClick}
                className="inline-flex items-center gap-3 bg-[#0B1B33] hover:bg-[#142850] text-white px-8 py-4 rounded-full font-body text-sm md:text-base font-semibold tracking-wider transition-all shadow-xl shadow-[#0B1B33]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>TEXT BEAUTY FOR DETAILS</span>
                <span className="text-[#E8C068] text-lg leading-none">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Latitude Med Travel Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DEC8] shadow-sm"
          >
            <img
              src="/assets/images/logo-latitude.png"
              alt="Latitude Med Travel"
              className="h-16 w-auto"
            />
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#0B1B33] block leading-none">
                Latitude
              </span>
              <span className="font-serif text-xs tracking-widest text-[#0B1B33] uppercase block mt-1">
                MED TRAVEL
              </span>
              <span className="font-body text-xs italic text-[#5B6472] block mt-1">
                Your confidence, our purpose
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandingCta;
