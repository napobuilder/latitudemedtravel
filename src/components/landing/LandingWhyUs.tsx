import React from 'react';
import { motion } from 'framer-motion';

const LandingWhyUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F6EFE3] border-t border-[#E8DEC8]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Meet Dr. Carmelina Cerda Francisco (Editorial Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white rounded-2xl p-7 sm:p-10 border border-[#E8DEC8] shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start"
          >
            {/* Doctor Photo */}
            <div className="w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shrink-0 border-2 border-[#E8DEC8] shadow-md bg-[#FAF7F2]">
              <img
                src="/assets/images/landing/dr-carmelina.jpg"
                alt="Dr. Carmelina Cerda Francisco"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center md:text-left flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#B5852A] block mb-2">
                  Lead Aesthetic Physician
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B1B33] leading-snug">
                  Meet Dr. Carmelina Cerda Francisco
                </h3>
                <p className="font-body text-sm sm:text-[15px] text-[#5B6472] mt-4 leading-relaxed">
                  One of the most respected and highly qualified aesthetic physicians in the Dominican Republic, with extensive international training and a deeply personalized clinical approach.
                </p>
                <p className="font-body text-xs sm:text-sm text-[#5B6472] mt-3 leading-relaxed">
                  Dr. Cerda personally evaluates and performs every facial harmonization, ensuring natural, harmonious, and long-lasting beauty outcomes.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8DEC8]/60 flex items-center justify-center md:justify-start gap-3">
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#B5852A]">
                  C-LINA ESTHETICS
                </span>
                <span className="text-[#D9A441]">•</span>
                <span className="text-xs text-[#5B6472]">Santo Domingo, D.R.</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Only 7 Women Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-4 bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border-2 border-[#E8DEC8] shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            {/* Top decorative line */}
            <div className="w-12 h-0.5 bg-[#B5852A] mb-6" />

            {/* Group icon */}
            <div className="w-16 h-16 rounded-full bg-white border border-[#E8DEC8] flex items-center justify-center text-[#B5852A] mb-5 shadow-sm">
              <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>

            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1B33] block leading-none">
              Only
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#0B1B33] block leading-tight mt-1">
              7 Women
            </span>
            
            <p className="font-serif italic text-[#B5852A] text-base sm:text-lg mt-3 max-w-[220px]">
              An intimate and exclusive group.
            </p>

            <p className="font-body text-xs text-[#5B6472] mt-3">
              Limited spots to guarantee private attention and luxury care.
            </p>

            {/* Bottom decorative line */}
            <div className="w-12 h-0.5 bg-[#B5852A] mt-6" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LandingWhyUs;
