import React from 'react';
import { motion } from 'framer-motion';

const LandingWhyUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F6EFE3] border-t border-[#E8DEC8]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Meet Dr. Carmelina Cerda Francisco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            {/* Doctor Photo */}
            <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-[#E8DEC8] shadow-sm bg-[#FAF7F2]">
              <img
                src="/assets/images/landing/dr-carmelina.jpg"
                alt="Dr. Carmelina Cerda Francisco"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-2xl font-medium text-[#0B1B33] leading-snug">
                Meet Dr. Carmelina Cerda Francisco
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#5B6472] mt-3 leading-relaxed">
                One of the most respected and highly qualified aesthetic physicians in the Dominican Republic, with extensive training and a personal approach.
              </p>
              <div className="mt-4">
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#B5852A] border-b border-[#B5852A]/40 pb-0.5">
                  C-LINA ESTHETICS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#0B1B33] mb-5">
                What's Included
              </h3>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-[#5B6472]">
                  <span className="text-[#B5852A] font-bold mt-0.5 shrink-0">✓</span>
                  <span><strong>Round-trip ticket:</strong> Miami – SDQ – Miami</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#5B6472]">
                  <span className="text-[#B5852A] font-bold mt-0.5 shrink-0">✓</span>
                  <span><strong>3 nights</strong> at a luxury boutique hotel</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#5B6472]">
                  <span className="text-[#B5852A] font-bold mt-0.5 shrink-0">✓</span>
                  <span><strong>Transfers</strong> in Santo Domingo</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#5B6472]">
                  <span className="text-[#B5852A] font-bold mt-0.5 shrink-0">✓</span>
                  <span>
                    <strong>Complete facial harmonization:</strong> lips, jawline, rhinomodelling, botox, under-eye filler &amp; volume restoration
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Only 7 Women Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 bg-[#FAF7F2] rounded-2xl p-8 border-2 border-[#E8DEC8] shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            {/* Top decorative line */}
            <div className="w-12 h-0.5 bg-[#B5852A] mb-5" />

            {/* Group icon */}
            <div className="w-14 h-14 rounded-full bg-white border border-[#E8DEC8] flex items-center justify-center text-[#B5852A] mb-4 shadow-sm">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>

            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1B33] block leading-none">
              Only
            </span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#0B1B33] block leading-tight">
              7 Women
            </span>
            
            <p className="font-serif italic text-[#B5852A] text-sm sm:text-base mt-2">
              An intimate and exclusive group.
            </p>

            {/* Bottom decorative line */}
            <div className="w-12 h-0.5 bg-[#B5852A] mt-5" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LandingWhyUs;
