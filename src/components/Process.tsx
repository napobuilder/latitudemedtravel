import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Tu Transformación, Simplificada en 4 Pasos</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-16">Nos encargamos de la complejidad para que tú solo te concentres en tu bienestar.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-yellow-400 text-brand-blue-900 mx-auto mb-4">
              <img src="/assets/icons/consultation.svg" alt="Consultation Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-900 mb-2">1. Consulta y Planificación</h3>
            <p className="text-gray-600">Inicia con una consulta virtual confidencial para diseñar tu plan personalizado junto a nuestras asesoras expertas.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-yellow-400 text-brand-blue-900 mx-auto mb-4">
              <img src="/assets/icons/travel-coordination.svg" alt="Travel Coordination Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-900 mb-2">2. Coordinación de Viaje</h3>
            <p className="text-gray-600">Nos encargamos de todos los detalles: vuelos, alojamiento premium y traslados privados para tu total comodidad.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-yellow-400 text-brand-blue-900 mx-auto mb-4">
              <img src="/assets/icons/procedure-care.svg" alt="Procedure Care Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-900 mb-2">3. Procedimiento y Cuidado</h3>
            <p className="text-gray-600">Recibe tratamiento en clínicas de vanguardia con el acompañamiento de nuestro equipo local bilingüe.</p>
          </div>
          {/* Step 4 */}
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-yellow-400 text-brand-blue-900 mx-auto mb-4">
              <img src="/assets/icons/recovery-follow-up.svg" alt="Recovery Follow-up Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-900 mb-2">4. Recuperación y Seguimiento</h3>
            <p className="text-gray-600">Disfruta de una recuperación confortable y coordinamos tu seguimiento al regresar a Miami.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
