import React, { useState, useMemo } from 'react';
import { getServiciosTraducidos } from '../data';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const ContactCta: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation();
  const servicios = useMemo(() => getServiciosTraducidos(language), [language]);
  const { addToCart } = useCart();
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>('');
  
  // Organizar servicios por categoría para el select
  const serviciosFaciales = servicios.filter(s => s.categoria === 'facial');
  const serviciosCorporales = servicios.filter(s => s.categoria === 'corporal');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Si hay un procedimiento seleccionado (y no es "Otro"), agregarlo al carrito
    if (selectedProcedureId && selectedProcedureId !== 'otro') {
      const servicioSeleccionado = servicios.find(s => s.id === selectedProcedureId);
      if (servicioSeleccionado) {
        addToCart(servicioSeleccionado);
      }
    }
    
    // Aquí se enviará el formulario a Formspree cuando lo integremos
    // Por ahora solo agregamos al carrito
  };

  return (
    <section id="contacto" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Fondo de consultorio médico" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue-900">{t.contactCta.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{t.contactCta.subtitle}</p>
            <ul className="space-y-4 text-gray-600 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t.contactCta.benefits.confidential}</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t.contactCta.benefits.quote}</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{t.contactCta.benefits.questions}</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} action="#" method="POST">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contactCta.form.fullName}</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contactCta.form.email}</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t.contactCta.form.phone}</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800" />
                </div>
                <div>
                  <label htmlFor="procedure" className="block text-sm font-medium text-gray-700">{t.contactCta.form.procedure}</label>
                  <select 
                    id="procedure" 
                    name="procedure" 
                    required 
                    value={selectedProcedureId}
                    onChange={(e) => setSelectedProcedureId(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-brand-blue-700 focus:border-brand-blue-700 text-gray-800"
                  >
                    <option value="">{t.contactCta.form.selectProcedure}</option>
                    <optgroup label={t.contactCta.form.facialProcedures}>
                      {serviciosFaciales.map((servicio) => (
                        <option key={servicio.id} value={servicio.id}>
                          {servicio.nombre}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label={t.contactCta.form.bodyProcedures}>
                      {serviciosCorporales.map((servicio) => (
                        <option key={servicio.id} value={servicio.id}>
                          {servicio.nombre}
                        </option>
                      ))}
                    </optgroup>
                    <option value="otro">{t.contactCta.form.other}</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-brand-blue-900 bg-brand-yellow-400 hover:bg-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow-500 transition duration-300">
                    {t.contactCta.form.submit}
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
