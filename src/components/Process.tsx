import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: '/assets/icons/consultation.svg',
      title: 'Valoración y Planificación',
      description: 'Inicia con una valoración confidencial para diseñar tu plan personalizado junto a nuestras asesoras expertas.'
    },
    {
      number: '02',
      icon: '/assets/icons/travel-coordination.svg',
      title: 'Coordinación de Viaje',
      description: 'Nos encargamos de todos los detalles: vuelos, alojamiento premium y traslados privados para tu total comodidad.'
    },
    {
      number: '03',
      icon: '/assets/icons/procedure-care.svg',
      title: 'Procedimiento y Cuidado',
      description: 'Recibe tratamiento en clínicas de vanguardia con el acompañamiento de nuestro equipo local bilingüe.'
    },
    {
      number: '04',
      icon: '/assets/icons/recovery-follow-up.svg',
      title: 'Recuperación y Seguimiento',
      description: 'Disfruta de una recuperación confortable y coordinamos tu seguimiento al regresar a Estados Unidos.'
    }
  ];

  return (
    <section id="proceso" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-900 mb-4">
            Tu Transformación, Simplificada en 4 Pasos
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Nos encargamos de la complejidad para que tú solo te concentres en tu bienestar.
          </p>
        </div>

        {/* Grid de pasos con conectores en desktop */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Conector animado (solo desktop, entre cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-brand-yellow-400 via-brand-blue-700 to-brand-yellow-400 transform translate-x-3 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-brand-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Card del paso */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-brand-yellow-400/50 h-full flex flex-col">
                  {/* Número grande de fondo */}
                  <div className="absolute top-4 right-4 text-8xl font-black text-gray-50 group-hover:text-brand-yellow-50 transition-colors duration-500 pointer-events-none">
                    {step.number}
                  </div>

                  {/* Icono destacado */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-yellow-400 to-brand-yellow-500 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <img src={step.icon} alt={`${step.title} Icon`} className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-blue-900 mb-4 group-hover:text-brand-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>

                  {/* Indicador de paso (línea inferior) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-700 via-brand-yellow-400 to-brand-blue-700 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
