import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Process from '../components/Process';
import Procedures from '../components/Procedures';
import Testimonials from '../components/Testimonials';
import Naddia from '../components/Naddia';
import Experts from '../components/Experts';
import Team from '../components/Team';
import Faq from '../components/Faq';
import ContactCta from '../components/ContactCta';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <TrustBar />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Procedures />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Naddia />
      </AnimatedSection>
      <AnimatedSection>
        <Experts />
      </AnimatedSection>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <AnimatedSection>
        <ContactCta />
      </AnimatedSection>
      <Footer />
    </>
  );
};

export default HomePage;
