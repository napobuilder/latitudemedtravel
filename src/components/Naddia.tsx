import React from 'react';

const Naddia: React.FC = () => {
  return (
    <section id="naddia" className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/images/logo-latitude.png" 
              alt="Logo de Latitude Med Travel" 
              className="h-24 md:h-32 w-auto"
            />
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-8">
            Nuestra Visión y Misión
          </h2>

          {/* Contenido */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl md:text-2xl font-semibold text-brand-blue-900">
              Tu salud es nuestra prioridad y tu destino seguro.
            </p>
            
            <p>
              Nosotros trazamos la ruta confiable y sin fronteras, logrando poner en tus manos a expertos de la salud de clase mundial y convirtiendo tu viaje en una experiencia transformadora, única y placentera.
            </p>
            
            <p className="font-semibold text-brand-blue-800">
              Somos tu puente de confianza hacia la medicina estética de excelencia.
            </p>
            
            <p>
              Nuestra labor es simplificar tu viaje uniendo logística impecable con los mejores estándares clínicos, para que tú solo te enfoques en tu recuperación mientras nosotros cuidamos todo lo demás.
            </p>
            
            <p className="text-xl font-semibold text-brand-blue-900 pt-4 border-t border-gray-200">
              En Latitude Med Travel te brindamos el acompañamiento integral y la seguridad que mereces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Naddia;
