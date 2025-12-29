import React from 'react';
import { servicios } from '../data';
import { Link } from 'react-router-dom';

const Procedures: React.FC = () => {
  const serviciosFaciales = servicios.filter(s => s.categoria === 'facial');
  const serviciosCorporales = servicios.filter(s => s.categoria === 'corporal');

  return (
    <section id="procedimientos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Nuestros Procedimientos</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">Consulta virtual disponible para todos nuestros procedimientos. Agenda tu cita y conoce más sobre cada tratamiento.</p>
        </div>

        {/* Procedimientos Faciales */}
        <div id="procedimientos-faciales" className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">Procedimientos Faciales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviciosFaciales.map((servicio) => (
              <div key={servicio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={servicio.cardImageUrl} 
                    alt={`Imagen de procedimiento de ${servicio.nombre}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-left">
                  <h4 className="text-xl font-bold text-brand-blue-900 mb-2">{servicio.nombre}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{servicio.subtitulo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-blue-900">${servicio.precioConsulta} USD</span>
                    <Link to={`/servicios/${servicio.id}`} className="font-semibold text-brand-blue-700 hover:text-brand-blue-900 text-sm">
                      Saber Más &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Procedimientos Corporales */}
        <div id="procedimientos-corporales">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">Procedimientos Corporales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviciosCorporales.map((servicio) => (
              <div key={servicio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={servicio.cardImageUrl} 
                    alt={`Imagen de procedimiento de ${servicio.nombre}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-left">
                  <h4 className="text-xl font-bold text-brand-blue-900 mb-2">{servicio.nombre}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{servicio.subtitulo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-blue-900">${servicio.precioConsulta} USD</span>
                    <Link to={`/servicios/${servicio.id}`} className="font-semibold text-brand-blue-700 hover:text-brand-blue-900 text-sm">
                      Saber Más &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
