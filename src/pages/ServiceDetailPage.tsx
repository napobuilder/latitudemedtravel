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
            Añadir a mi Consulta
          </button>
        </div>
      </section>

      {/* 2. Two-Column Layout */}
      <main className="container mx-auto px-6 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          
          {/* Left Column (Sticky) */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 self-start mb-12 lg:mb-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-lg text-gray-600">Tarifa de Acompañamiento</p>
              <p className="text-4xl font-bold text-brand-blue-900 my-2">${servicioActual.precioServicio} <span className="text-base font-medium">USD</span></p>
              <button onClick={handleAddToCart} className="w-full mt-4 bg-brand-yellow-400 text-brand-blue-900 font-bold py-3 px-6 rounded-full hover:bg-brand-yellow-500 transition-transform transform hover:scale-105">
                Añadir a mi Consulta
              </button>
              <h3 className="font-bold text-lg mt-6 mb-3 text-brand-blue-900">¿Qué Incluye?</h3>
              <ul className="space-y-3 text-gray-600">
                {servicioActual.incluye.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Column (Content) */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2>¿Qué es una {servicioActual.nombre}?</h2>
              <p>{servicioActual.descripcion}</p>
              
              <h2 className="mt-12">Nuestros Expertos para este Procedimiento</h2>
              <div className="grid sm:grid-cols-2 gap-8 not-prose">
                {doctoresAsociados.map(doctor => (
                  <div key={doctor.id} className="bg-white p-4 rounded-xl shadow-md text-center border border-gray-100">
                    <img src={doctor.fotoUrl} alt={`Foto de ${doctor.alias}`} className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-brand-yellow-400 object-cover" />
                    <h3 className="text-lg font-bold text-brand-blue-900">{doctor.alias}</h3>
                    <p className="text-brand-blue-700 font-semibold text-sm">{doctor.especialidad}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12">Resultados (Antes y Después)</h2>
              <div className="grid grid-cols-2 gap-4 not-prose">
                <img src={servicioActual.cardImageUrl} alt="Ejemplo de resultado 1" className="rounded-lg shadow-md" />
                <img src={servicioActual.heroImageUrl} alt="Ejemplo de resultado 2" className="rounded-lg shadow-md" />
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
