import React from 'react';
import { doctores } from '../data';

const Experts: React.FC = () => {
  return (
    <section id="expertos" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Conoce a Nuestro Cirujano de Élite</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-16">Colaboramos exclusivamente con cirujanos plásticos certificados y con una trayectoria de excelencia comprobada.</p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
          {doctores.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-6">
              <img src={doctor.fotoUrl} alt={`Foto de ${doctor.alias}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-yellow-400 object-cover" />
              <div className="">
                <h3 className="text-xl font-bold text-brand-blue-900">{doctor.alias}</h3>
                <p className="text-brand-blue-700 font-semibold mb-2">{doctor.especialidad}</p>
                <p className="text-gray-600 text-sm">Experto certificado con años de experiencia en procedimientos de excelencia. Miembro de prestigiosas sociedades médicas.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
