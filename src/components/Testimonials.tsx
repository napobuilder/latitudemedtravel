import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Historias Reales, Vidas Transformadas</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">La confianza de nuestras pacientes es nuestro mayor orgullo.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Main Video Testimonial */}
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl shadow-xl p-4 relative">
            <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2533&auto=format&fit=crop" className="w-full rounded-md opacity-80" alt="Video testimonio de una paciente sonriendo" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/30 backdrop-blur-sm rounded-full h-20 w-20 flex items-center justify-center text-white hover:bg-white/50 transition-colors">
                <img src="/assets/icons/play.svg" alt="Play Icon" className="w-12 h-12 ml-1" />
              </button>
            </div>
            <p className="text-white text-center mt-4 font-semibold text-shadow">"Mi experiencia con Latitude superó todas mis expectativas." - Sofía R., Miami</p>
          </div>
          {/* Text Testimonials */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 italic">"El nivel de atención y profesionalismo es increíble. Me sentí segura y cuidada durante todo el proceso. ¡100% recomendados!"</p>
              <p className="font-bold text-right mt-3 text-brand-blue-900">- Ana G., Miami, FL</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 italic">"Dudaba en viajar, pero el equipo de Latitude lo hizo todo tan fácil. Los resultados son mejores de lo que jamás soñé."</p>
              <p className="font-bold text-right mt-3 text-brand-blue-900">- Isabella V., Fort Lauderdale, FL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
