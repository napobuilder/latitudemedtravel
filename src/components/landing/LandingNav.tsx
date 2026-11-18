import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LandingNavProps {
  onSmsClick?: () => void;
}

const LandingNav: React.FC<LandingNavProps> = ({ onSmsClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8]'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#EFE7D8]/60'
      }`}
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-between px-5 md:px-8 py-3.5">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/assets/images/logo-latitude.png"
            alt="Latitude Med Travel"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#0B1B33] block leading-none">
              Latitude
            </span>
            <span className="font-serif text-[11px] md:text-xs tracking-wider text-[#0B1B33] uppercase block">
              MED TRAVEL
            </span>
            <span className="font-body text-[9.5px] italic text-[#5B6472] block leading-tight">
              Your confidence, our purpose
            </span>
          </div>
        </a>

        {/* Center Categories (Flyer top bar) */}
        <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium uppercase text-[#5B6472]">
          <span>BEAUTY</span>
          <span className="text-[#D9A441]">•</span>
          <span>TRAVEL</span>
          <span className="text-[#D9A441]">•</span>
          <span>WELLNESS</span>
        </div>

        {/* Right CTA */}
        <button
          onClick={onSmsClick}
          className="inline-flex items-center gap-2 bg-[#0B1B33] text-white hover:bg-[#142850] px-4 py-2 md:px-5 md:py-2.5 rounded-full font-body text-xs md:text-[13px] font-semibold tracking-wide transition-all shadow-sm hover:shadow"
        >
          <span>TEXT BEAUTY FOR DETAILS</span>
          <span className="text-gold-light">→</span>
        </button>
      </div>
    </motion.header>
  );
};

export default LandingNav;
