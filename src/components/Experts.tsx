import React from 'react';

const Experts: React.FC = () => {
  return (
    <section id="expertos" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Conoce a Nuestros Cirujanos de Élite</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-16">Colaboramos exclusivamente con cirujanos plásticos certificados y con una trayectoria de excelencia comprobada.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expert Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-6">
            <img src="/assets/images/doctor-vargas.jpg" alt="Foto del Dr. Vargas" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-yellow-400 object-cover" />
            <div className="">
              <h3 className="text-xl font-bold text-brand-blue-900">Dr. Alejandro Vargas</h3>
              <p className="text-brand-blue-700 font-semibold mb-2">Cirujano Plástico Certificado</p>
              <p className="text-gray-600 text-sm">Más de 15 años de experiencia en contorno corporal y cirugía facial. Miembro de la Sociedad Colombiana de Cirugía Plástica.</p>
            </div>
          </div>
          {/* Expert Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-6">
            <img src="https://images.unsplash.com/photo-1622253692010-333f2da60710?q=80&w=2564&auto=format&fit=crop" alt="Foto de una doctora" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-yellow-400 object-cover" />
            <div className="">
              <h3 className="text-xl font-bold text-brand-blue-900">Dra. Isabela Correa</h3>
              <p className="text-brand-blue-700 font-semibold mb-2">Especialista en Cirugía Mamaria</p>
              <p className="text-gray-600 text-sm">Reconocida por su enfoque artístico y resultados naturales en aumento y reconstrucción mamaria.</p>
            </div>
          </div>
          {/* Expert Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 p-6">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" alt="Foto de un doctor" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-yellow-400 object-cover" />
            <div className="">
              <h3 className="text-xl font-bold text-brand-blue-900">Dr. Ricardo Montoya</h3>
              <p className="text-brand-blue-700 font-semibold mb-2">Experto en Rejuvenecimiento Facial</p>
              <p className="text-gray-600 text-sm">Líder en técnicas de lifting facial y procedimientos mínimamente invasivos para un rejuvenecimiento integral.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
