import React from 'react';
import { motion } from 'framer-motion';

interface LandingProcessProps {
  onSmsClick?: () => void;
}

const itinerary = [
  {
    day: 'DAY 1',
    title: 'Arrival & Welcome',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    bullets: [
      'Arrive in Santo Domingo',
      'Check-in at boutique hotel',
      'Welcome cocktail & dinner',
    ],
  },
  {
    day: 'DAY 2',
    title: 'Culture & Renewal',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    bullets: [
      'Guided tour of the Colonial Zone',
      'Your facial harmonization at C-Lina Esthetics',
      'Relax & enjoy dinner',
    ],
  },
  {
    day: 'DAY 3',
    title: 'Recovery & Return',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    bullets: [
      'Medical check-up & spa time',
      'Check-out & flight home',
    ],
  },
];

const LandingProcess: React.FC<LandingProcessProps> = ({ onSmsClick }) => {
  return (
    <section id="itinerary" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[600px]"
          >
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] text-[#0B1B33] font-normal leading-tight">
              Your Exclusive Weekend
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-[#5B6472] mt-2">
              A perfect blend of beauty, culture and relaxation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={onSmsClick}
              className="inline-flex items-center gap-2 bg-[#0B1B33] hover:bg-[#142850] text-white px-6 py-3.5 rounded-full font-body text-xs md:text-sm font-semibold tracking-wider transition-all shadow-md hover:scale-[1.02]"
            >
              <span>DISCOVER THE EXPERIENCE</span>
              <span className="text-[#E8C068]">→</span>
            </button>
          </motion.div>
        </div>

        {/* 3 Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itinerary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#0B1B33]/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  {item.day}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#0B1B33] mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#5B6472] leading-snug">
                        <span className="text-[#B5852A] font-bold mt-0.5 shrink-0">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingProcess;
