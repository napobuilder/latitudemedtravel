import React from 'react';
import { useParams } from 'react-router-dom';
import { servicios, doctores, Doctor } from '../data';
import { useCart } from '../hooks/useCart';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { addToCart } = useCart();
  const servicioActual = servicios.find(s => s.id === serviceId);

  if (!servicioActual) {
    return <div>Servicio no encontrado</div>;
  }

  const doctoresAsociados: Doctor[] = doctores.filter(d => servicioActual.doctorIds.includes(d.id));

  const handleAddToCart = () => {
    addToCart(servicioActual);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-gray-800 text-white py-32 px-6 text-center">
        <div className="absolute inset-0">
          <img src={servicioActual.heroImageUrl} alt={`Fondo de ${servicioActual.nombre}`} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold font-display">{servicioActual.nombre}</h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-200">{servicioActual.subtitulo}</p>
          <button onClick={handleAddToCart} className="mt-8 bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-yellow-500 transition-transform transform hover:scale-105">
            Agendar Consulta Virtual
          </button>
        </div>
      </section>

      {/* 2. Two-Column Layout */}
      <main className="container mx-auto px-6 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          
          {/* Left Column (Sticky) */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 self-start mb-12 lg:mb-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-brand-yellow-400 text-brand-blue-900 text-xs font-bold rounded uppercase mb-3">
                  Consulta Virtual
                </span>
              </div>
              <div className="mb-2">
                <p className="text-4xl font-bold text-brand-blue-900">${servicioActual.precioConsulta} <span className="text-lg font-medium">USD</span></p>
              </div>
              <p className="text-sm text-gray-500 mb-4">Precio de valoración inicial</p>
              <button onClick={handleAddToCart} className="w-full mt-4 bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-6 rounded-full hover:bg-brand-yellow-500 transition-transform transform hover:scale-105">
                Agendar Consulta Virtual
              </button>
              <h3 className="font-bold text-lg mt-6 mb-3 text-brand-blue-900">¿Qué Incluye la Consulta?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Evaluación personalizada del procedimiento</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Revisión de tu caso con el especialista</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Información sobre el procedimiento y resultados esperados</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Orientación sobre el proceso y próximos pasos</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Presupuesto personalizado</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Right Column (Content) */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2>¿Qué es {servicioActual.nombre}?</h2>
              <p>{servicioActual.descripcion}</p>
              
              <h2 className="mt-12">Nuestro Especialista</h2>
              <div className="grid sm:grid-cols-1 gap-8 not-prose">
                {doctoresAsociados.map(doctor => (
                  <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-brand-yellow-400 flex-shrink-0 overflow-hidden">
                        <img src={doctor.fotoUrl} alt={`Foto de ${doctor.alias}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-blue-900 mb-1">{doctor.alias}</h3>
                        <p className="text-brand-blue-700 font-semibold text-sm mb-3">{doctor.especialidad}</p>
                        {doctor.biografia && (
                          <p className="text-gray-600 text-sm leading-relaxed">{doctor.biografia}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
