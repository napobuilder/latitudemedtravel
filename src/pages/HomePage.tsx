import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  // Efecto para hacer scroll a la sección cuando hay hash en la URL
  useEffect(() => {
    if (location.hash) {
      // Pequeño delay para asegurar que el DOM esté completamente renderizado
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          // Ajustar el scroll para compensar el header fijo
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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
