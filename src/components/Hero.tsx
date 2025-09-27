import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section className="bg-white">
      <motion.div 
        className="container mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-brand-blue-900"
          variants={itemVariants}
        >
          Redescubre tu Confianza.
          <br className="hidden md:block" />
          Cirugía Plástica de Clase Mundial en Colombia.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600"
          variants={itemVariants}
        >
          Te acompañamos desde Miami en cada paso de tu viaje, conectándote con cirujanos de élite y clínicas acreditadas para que logres tus metas con total seguridad.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a href="#contacto" className="bg-brand-yellow-400 text-brand-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-yellow-500 transition duration-300 shadow-xl inline-block">
            Solicitar Consulta Virtual Gratuita
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
