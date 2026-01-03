import React, { useState, useMemo } from 'react';
import { getServiciosTraducidos, Servicio } from '../data';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { buildLocalizedPath, getServicesRouteName } from '../utils/routes';

interface ProcedureCardProps {
  servicio: Servicio;
  isFeatured?: boolean;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ servicio, isFeatured = false }) => {
  const { language } = useLanguage();
  const t = useTranslation();
  const serviceRoute = buildLocalizedPath(language, `/${getServicesRouteName(language)}/${servicio.id}`);
  
  return (
    <Link 
      to={serviceRoute}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 block cursor-pointer"
    >
      {/* Badge "Más Popular" - Solo en destacados */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 text-brand-blue-900 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
            ⭐ {t.procedures.mostPopular}
          </span>
        </div>
      )}

      {/* Contenedor de imagen con efecto parallax */}
      <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
        <img 
          src={servicio.cardImageUrl} 
          alt={`Imagen de procedimiento de ${servicio.nombre}`} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay con gradiente en hover mostrando precio */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/90 via-brand-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block bg-brand-yellow-400 text-brand-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
              {t.serviceDetail.consultation}
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold text-white">${servicio.precioConsulta}</span>
              <span className="text-lg text-white/80">USD</span>
            </div>
            <p className="text-sm text-white/90 mt-1">{t.procedures.initialConsultationPrice}</p>
          </div>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-6 text-left">
        <h4 className="text-xl font-bold text-brand-blue-900 mb-2 group-hover:text-brand-blue-700 transition-colors">
          {servicio.nombre}
        </h4>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{servicio.subtitulo}</p>
        
        {/* Precio visible normalmente (se oculta suavemente en hover) */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 bg-brand-yellow-400 text-brand-blue-900 text-xs font-bold rounded uppercase">
              {t.serviceDetail.consultation}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-brand-blue-900">${servicio.precioConsulta}</span>
            <span className="text-sm text-gray-600">USD</span>
          </div>
          <p className="text-xs text-gray-500">{t.procedures.initialConsultationPrice}</p>
        </div>

        {/* Indicador "Saber Más" - ahora solo visual ya que toda la card es clickeable */}
        <div className="mt-4">
          <span className="font-semibold text-brand-blue-700 group-hover:text-brand-blue-900 text-sm inline-flex items-center">
            {t.common.learnMore} 
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

const Procedures: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation();
  const servicios = useMemo(() => getServiciosTraducidos(language), [language]);
  
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
            Valoración disponible para todos nuestros procedimientos. Agenda tu cita y conoce más sobre cada tratamiento.
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
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">{t.procedures.facialProcedures}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadosFaciales.map((servicio) => (
              <ProcedureCard key={servicio.id} servicio={servicio} isFeatured={true} />
            ))}
          </div>
        </div>

        {/* Procedimientos Corporales Destacados */}
        <div id="procedimientos-corporales" className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center">{t.procedures.bodyProcedures}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadosCorporales.map((servicio) => (
              <ProcedureCard key={servicio.id} servicio={servicio} isFeatured={true} />
            ))}
          </div>
        </div>

        {/* Sección completa de todos los procedimientos con Tabs */}
        <div id="procedimientos-completos" className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">{t.procedures.allProcedures.title}</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              {t.procedures.allProcedures.subtitle}
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
                {t.procedures.allProcedures.facialTab} ({serviciosFaciales.length})
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
                {t.procedures.allProcedures.bodyTab} ({serviciosCorporales.length})
              </button>
            </div>
          </div>

          {/* Tab Content - Faciales */}
          {activeTab === 'facial' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facialesToShow.map((servicio) => (
                  <ProcedureCard key={servicio.id} servicio={servicio} isFeatured={procedimientosDestacados.includes(servicio.id)} />
                ))}
              </div>
              {serviciosFaciales.length > 4 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllFaciales(!showAllFaciales)}
                    className="px-8 py-3 bg-brand-blue-900 text-white font-semibold rounded-full hover:bg-brand-blue-800 transition-colors"
                  >
                    {showAllFaciales ? t.procedures.allProcedures.viewLess : `${t.procedures.allProcedures.viewAllFacial} ${serviciosFaciales.length} ${t.procedures.facialProcedures.toLowerCase()}`}
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
                  <ProcedureCard key={servicio.id} servicio={servicio} isFeatured={procedimientosDestacados.includes(servicio.id)} />
                ))}
              </div>
              {serviciosCorporales.length > 4 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllCorporales(!showAllCorporales)}
                    className="px-8 py-3 bg-brand-blue-900 text-white font-semibold rounded-full hover:bg-brand-blue-800 transition-colors"
                  >
                    {showAllCorporales ? t.procedures.allProcedures.viewLess : `${t.procedures.allProcedures.viewAllBody} ${serviciosCorporales.length} ${t.procedures.bodyProcedures.toLowerCase()}`}
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
