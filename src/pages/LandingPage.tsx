import React, { useEffect, useState } from 'react';
import LandingNav from '../components/landing/LandingNav';
import LandingHero from '../components/landing/LandingHero';
import LandingTrustBar from '../components/landing/LandingTrustBar';
import LandingProcess from '../components/landing/LandingProcess';
import LandingWhyUs from '../components/landing/LandingWhyUs';
import LandingCta from '../components/landing/LandingCta';
import LandingFooter from '../components/landing/LandingFooter';
import SmsModal, { triggerSmsAction } from '../components/landing/SmsModal';

const LandingPage: React.FC = () => {
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);

  const handleSmsTrigger = () => {
    triggerSmsAction(() => {
      setIsSmsModalOpen(true);
    });
  };

  useEffect(() => {
    // Update page title for SEO
    document.title = 'Beauty Party Weekend — Dominican Republic | Latitude Med Travel';

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Three days, two nights of luxury, beauty and culture in the heart of the Caribbean. Facial harmonization by Dr. Carmelina Cerda. Only 7 women. Text BEAUTY to (423) 482-1525 for details.'
      );
    }

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-body text-[#1F2430] bg-[#FAF7F2] antialiased min-h-screen selection:bg-[#D9A441]/30 selection:text-[#0B1B33]">
      <LandingNav onSmsClick={handleSmsTrigger} />
      <main>
        <LandingHero onSmsClick={handleSmsTrigger} />
        <LandingTrustBar />
        <LandingProcess onSmsClick={handleSmsTrigger} />
        <LandingWhyUs />
        <LandingCta onSmsClick={handleSmsTrigger} />
      </main>
      <LandingFooter />

      {/* Interactive SMS Modal with QR Code for Desktop */}
      <SmsModal
        isOpen={isSmsModalOpen}
        onClose={() => setIsSmsModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
