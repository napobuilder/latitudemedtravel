import React from 'react';
import { servicios } from '../data';

const ContactCta: React.FC = () => {
  // Organizar servicios por categoría para el select
  const serviciosFaciales = servicios.filter(s => s.categoria === 'facial');
  const serviciosCorporales = servicios.filter(s => s.categoria === 'corporal');
  return (
    <section id="contacto" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Fondo de consultorio médico" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue-900">Da el Primer Paso Hacia tu Mejor Versión</h2>
            <p className="text-lg text-gray-700 mb-8">Completa el formulario y una de nuestras asesoras expertas en Tennessee se pondrá en contacto contigo para una consulta virtual 100% gratuita y sin compromiso.</p>
            <ul className="space-y-4 text-gray-600 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Consulta confidencial con expertos.</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Recibe un presupuesto preliminar.</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Aclara todas tus dudas.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form action="#" method="POST">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="procedure" className="block text-sm font-medium text-gray-700">Procedimiento de Interés</label>
                  <select id="procedure" name="procedure" required className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800">
                    <option value="">Seleccionar procedimiento...</option>
                    <optgroup label="Procedimientos Faciales">
                      {serviciosFaciales.map((servicio) => (
                        <option key={servicio.id} value={servicio.nombre}>
                          {servicio.nombre}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Procedimientos Corporales">
                      {serviciosCorporales.map((servicio) => (
                        <option key={servicio.id} value={servicio.nombre}>
                          {servicio.nombre}
                        </option>
                      ))}
                    </optgroup>
                    <option value="Otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-brand-blue-900 bg-brand-yellow-400 hover:bg-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow-500 transition duration-300">
                    Enviar y Solicitar Consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
