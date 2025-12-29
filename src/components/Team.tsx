import React, { useState } from 'react';
import { equipo } from '../data';

interface TeamMemberCardProps {
  miembro: {
    id: string;
    nombre: string;
    cargo: string;
    fotoUrl: string;
    descripcion?: string;
    descripcionCompleta?: string;
    especialidades?: string[];
    badge?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ miembro }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tieneDescripcionCompleta = miembro.descripcionCompleta && miembro.descripcionCompleta.length > 0;
  const textoAMostrar = isExpanded && tieneDescripcionCompleta 
    ? miembro.descripcionCompleta 
    : (miembro.descripcion || miembro.descripcionCompleta || '');

  return (
    <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
      {/* Efecto de brillo sutil al hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue-50/0 via-brand-yellow-50/0 to-brand-blue-50/0 group-hover:from-brand-blue-50/30 group-hover:via-brand-yellow-50/20 group-hover:to-brand-blue-50/30 transition-all duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Foto circular con borde decorativo */}
          <div className="relative mb-6">
            {/* Círculo de fondo con gradiente */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue-400 via-brand-blue-600 to-brand-blue-800 transform scale-110 group-hover:scale-125 transition-transform duration-500 opacity-20 group-hover:opacity-30"></div>
            
                    {/* Foto */}
                    <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:border-brand-yellow-400 transition-all duration-500 transform group-hover:scale-105">
                      <img 
                        src={miembro.fotoUrl} 
                        alt={`Foto de ${miembro.nombre}`} 
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center 30%' }}
                        loading="lazy"
                      />
              {/* Overlay sutil al hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Badge decorativo (opcional, para destacar algo) */}
            {miembro.badge && (
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 text-brand-blue-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {miembro.badge}
              </div>
            )}
          </div>

          {/* Información */}
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-2 group-hover:text-brand-blue-700 transition-colors">
            {miembro.nombre}
          </h3>
          <p className="text-brand-blue-700 font-semibold text-lg mb-4">
            {miembro.cargo}
          </p>
          
          {/* Descripción con expandir/colapsar */}
          {textoAMostrar && (
            <div className="mb-6 w-full max-w-md">
              <p className="text-gray-600 leading-relaxed text-left">
                {textoAMostrar}
              </p>
              {tieneDescripcionCompleta && (
                <div className="text-left mt-3">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-brand-blue-700 hover:text-brand-blue-900 font-semibold text-sm inline-flex items-center transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Leer menos
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Leer más
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Especialidades/Habilidades */}
          {miembro.especialidades && miembro.especialidades.length > 0 && (
            <div className="w-full pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-2">
                {miembro.especialidades.map((especialidad, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-4 py-2 bg-brand-blue-50 text-brand-blue-800 text-sm font-semibold rounded-full group-hover:bg-brand-blue-100 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-2 text-brand-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {especialidad}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Línea decorativa inferior que aparece en hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-700 via-brand-yellow-400 to-brand-blue-700 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-900 mb-4">
            Nuestro Equipo de Cuidado
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Profesionales dedicadas que te acompañan en cada paso de tu transformación con atención personalizada y experta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {equipo.map((miembro) => (
            <TeamMemberCard key={miembro.id} miembro={miembro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

