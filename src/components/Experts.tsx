import React from 'react';
import { doctores } from '../data';

const Experts: React.FC = () => {
  return (
    <section id="expertos" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Conoce a Nuestro Cirujano de Élite</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-16">Colaboramos exclusivamente con cirujanos plásticos certificados y con una trayectoria de excelencia comprobada.</p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {doctores.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <img src={doctor.fotoUrl} alt={`Foto de ${doctor.alias}`} className="w-full h-full rounded-full border-4 border-brand-yellow-400 object-cover object-center" style={{ objectPosition: 'center center' }} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-brand-blue-900 mb-2">{doctor.alias}</h3>
                  <p className="text-brand-blue-700 font-semibold mb-4">{doctor.especialidad}</p>
                  {doctor.biografia && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{doctor.biografia}</p>
                  )}
                  {doctor.credenciales && doctor.credenciales.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-brand-blue-900 mb-3">Credenciales y Certificaciones</h4>
                      <ul className="space-y-2">
                        {doctor.credenciales.map((credencial, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <svg className="w-5 h-5 mr-2 text-brand-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{credencial}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
