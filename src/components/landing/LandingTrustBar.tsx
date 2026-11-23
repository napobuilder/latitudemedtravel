import React from 'react';
import { motion } from 'framer-motion';

const includedItems = [
  {
    title: 'Round-Trip Ticket',
    highlight: 'Miami – SDQ – Miami',
    desc: 'Direct round-trip flights between Miami International Airport and Santo Domingo.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '3 Nights Stay',
    highlight: 'Luxury Boutique Hotel',
    desc: 'Three nights in a selected boutique hotel with curated comfort and Caribbean hospitality.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'VIP Transfers',
    highlight: 'Transfers in Santo Domingo',
    desc: 'Private ground transportation coordinated for airport, hotel, and clinic visits.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Facial Harmonization',
    highlight: 'Complete Medical Procedure',
    desc: 'Lips, jawline, rhinomodelling, botox, under-eye filler & volume restoration by Dr. Carmelina Cerda.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const LandingTrustBar: React.FC = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 bg-[#F6EFE3] border-y border-[#E8DEC8]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B5852A] block mb-2">
            All-Inclusive Experience
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] text-[#0B1B33] font-normal leading-tight">
            What's Included
          </h2>
          <p className="font-body text-sm sm:text-base text-[#5B6472] mt-2 leading-relaxed">
            Every detail organized so you can relax, renew, and enjoy your getaway from start to finish.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {includedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Checkmark badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-[#B5852A] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DEC8] text-[#B5852A] text-xs font-bold">
                    <span>✓</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#0B1B33]">Included</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-[#0B1B33] leading-snug">
                  {item.title}
                </h3>

                {/* Highlight */}
                <p className="font-serif text-sm font-medium text-[#B5852A] mt-1">
                  {item.highlight}
                </p>

                {/* Description */}
                <p className="font-body text-xs sm:text-[13px] text-[#5B6472] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-8 h-0.5 bg-[#D9A441]/40 mt-5 transition-all group-hover:w-16 group-hover:bg-[#B5852A]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingTrustBar;
