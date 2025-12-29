import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { servicios } from '../data';

const Hero: React.FC = () => {
  // Obtener imágenes destacadas de los procedimientos (usar heroImageUrl)
  const procedimientosDestacados = [
    'rinoplastia',
    'blefaroplastia',
    'mamoplastia-aumento',
    'liposuccion-lipoescultura',
    'gluteoplastia',
    'ritidoplastia'
  ];

  const imagenesHero = servicios
    .filter(s => procedimientosDestacados.includes(s.id))
    .map(s => s.heroImageUrl);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play del slider cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenesHero.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagenesHero.length]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Slider de Imágenes */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {imagenesHero.map((imagen, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={imagen}
              alt={`Procedimiento ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Overlay oscuro para mejor legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          </div>
        ))}
        
        {/* Indicadores del slider */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {imagenesHero.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 bg-brand-yellow-400'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contenido de texto superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 tracking-wide">
              Redescubre tu Confianza.
              <br className="hidden md:block" />
              <span className="font-normal">Cirugía Plástica de Clase Mundial en Colombia.</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a 
                href="#contacto" 
                className="bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-8 rounded-full text-base md:text-lg hover:bg-brand-yellow-500 transition duration-300 shadow-xl inline-block mt-4"
              >
                Solicitar Valoración
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
