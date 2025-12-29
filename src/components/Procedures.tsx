import React, { useState } from 'react';
import { servicios } from '../data';
import { Link } from 'react-router-dom';

const Procedures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facial' | 'corporal'>('facial');
  const [showAllFaciales, setShowAllFaciales] = useState(false);
  const [showAllCorporales, setShowAllCorporales] = useState(false);

  // Procedimientos destacados (los más populares/buscados)
  const procedimientosDestacados = [
    'rinoplastia',
    'blefaroplastia',
    'ritidoplastia',
    'mamoplastia-aumento',
    'liposuccion-lipoescultura',
    'gluteoplastia'
  ];

  const serviciosFaciales = servicios.filter(s => s.categoria === 'facial');
  const serviciosCorporales = servicios.filter(s => s.categoria === 'corporal');
  
  // Filtrar destacados
  const destacadosFaciales = serviciosFaciales.filter(s => procedimientosDestacados.includes(s.id));
  const destacadosCorporales = serviciosCorporales.filter(s => procedimientosDestacados.includes(s.id));

  // Para la sección completa: mostrar 4 inicialmente, resto al expandir
  const facialesToShow = showAllFaciales ? serviciosFaciales : serviciosFaciales.slice(0, 4);
  const corporalesToShow = showAllCorporales ? serviciosCorporales : serviciosCorporales.slice(0, 4);

  return (
    <section id="procedimientos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Procedimientos Destacados</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
            Consulta virtual disponible para todos nuestros procedimientos. Agenda tu cita y conoce más sobre cada tratamiento.
          </p>
          <a 
            href="/#procedimientos-completos" 
            className="inline-block text-brand-blue-700 hover:text-brand-blue-900 font-semibold text-lg transition-colors"
          >
            Ver todos los procedimientos ↓
          </a>
        </div>

        {/* Procedimientos Faciales Destacados */}
        <div id="procedimientos-faciales" className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">Procedimientos Faciales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadosFaciales.map((servicio) => (
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

        {/* Procedimientos Corporales Destacados */}
        <div id="procedimientos-corporales" className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">Procedimientos Corporales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadosCorporales.map((servicio) => (
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

        {/* Sección completa de todos los procedimientos con Tabs */}
        <div id="procedimientos-completos" className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Todos Nuestros Procedimientos</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Explora nuestra gama completa de procedimientos de cirugía plástica y estética
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setActiveTab('facial');
                  setShowAllFaciales(false);
                }}
                className={`px-6 py-3 font-semibold text-lg transition-colors border-b-2 ${
                  activeTab === 'facial'
                    ? 'text-brand-blue-900 border-brand-blue-900'
                    : 'text-gray-500 border-transparent hover:text-brand-blue-700'
                }`}
              >
                Procedimientos Faciales ({serviciosFaciales.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('corporal');
                  setShowAllCorporales(false);
                }}
                className={`px-6 py-3 font-semibold text-lg transition-colors border-b-2 ${
                  activeTab === 'corporal'
                    ? 'text-brand-blue-900 border-brand-blue-900'
                    : 'text-gray-500 border-transparent hover:text-brand-blue-700'
                }`}
              >
                Procedimientos Corporales ({serviciosCorporales.length})
              </button>
            </div>
          </div>

          {/* Tab Content - Faciales */}
          {activeTab === 'facial' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facialesToShow.map((servicio) => (
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
              {serviciosFaciales.length > 4 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllFaciales(!showAllFaciales)}
                    className="px-8 py-3 bg-brand-blue-900 text-white font-semibold rounded-full hover:bg-brand-blue-800 transition-colors"
                  >
                    {showAllFaciales ? 'Ver menos' : `Ver todos los ${serviciosFaciales.length} procedimientos faciales`}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Tab Content - Corporales */}
          {activeTab === 'corporal' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporalesToShow.map((servicio) => (
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
              {serviciosCorporales.length > 4 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllCorporales(!showAllCorporales)}
                    className="px-8 py-3 bg-brand-blue-900 text-white font-semibold rounded-full hover:bg-brand-blue-800 transition-colors"
                  >
                    {showAllCorporales ? 'Ver menos' : `Ver todos los ${serviciosCorporales.length} procedimientos corporales`}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
