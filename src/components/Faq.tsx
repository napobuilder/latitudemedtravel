import React from 'react';

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Preguntas Frecuentes</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">Resolvemos tus dudas más comunes para darte total tranquilidad.</p>
        </div>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>¿Es seguro viajar a Colombia para una cirugía plástica?</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              Absolutamente. Colombia es un referente mundial en cirugía plástica. Nosotros amplificamos tu seguridad al conectarte únicamente con cirujanos certificados por la SCCP y clínicas que cumplen con los más altos estándares internacionales, como la acreditación JCI. Además, nuestro equipo local te acompaña en todo momento.
            </p>
          </details>
          {/* FAQ Item 2 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>¿Qué incluye el paquete de Latitude Med Travel?</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              Ofrecemos un servicio integral. Nos encargamos de la coordinación de tus citas médicas, la planificación de tu viaje (vuelos y alojamiento premium), traslados privados aeropuerto-hotel-clínica, y te asignamos un acompañante bilingüe local. Nuestro objetivo es que tu única preocupación sea tu recuperación y bienestar.
            </p>
          </details>
          {/* FAQ Item 3 */}
          <details className="faq-question bg-white p-6 rounded-2xl shadow-md border border-gray-100 group">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-brand-blue-900 list-none">
              <span>¿Cómo es el proceso de recuperación y seguimiento?</span>
              <img src="/assets/icons/chevron-down.svg" alt="Chevron Down" className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-gray-600">
              Tu recuperación se llevará a cabo en un entorno cómodo y seguro en Colombia. Estarás en contacto directo con tu cirujano para los controles postoperatorios. Una vez regreses a Estados Unidos, nuestro equipo coordinará tu seguimiento para asegurar que tu evolución sea la correcta y para resolver cualquier duda que puedas tener.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
