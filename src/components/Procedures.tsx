import React from 'react';
import { servicios } from '../data';
import { Link } from 'react-router-dom';

const Procedures: React.FC = () => {
  return (
    <section id="procedimientos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Procedimientos Populares</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-16">Encuentra el camino ideal para alcanzar tus metas estéticas.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={servicio.cardImageUrl} alt={`Imagen de procedimiento de ${servicio.nombre}`} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{servicio.nombre}</h3>
                <p className="text-gray-600 mb-4">{servicio.subtitulo}</p>
                <Link to={`/servicios/${servicio.id}`} className="font-semibold text-brand-blue-700 hover:text-brand-blue-900">Saber Más &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
