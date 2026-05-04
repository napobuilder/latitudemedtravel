import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactCta: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const handleApply = () => {
    navigate(`/${language === 'es' ? 'es/valoracion' : 'en/evaluation'}`);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#002E5D]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
          alt="Clinic Background" 
        />
        {/* Subtle gold glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFC72C] rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#004A99] rounded-full filter blur-[150px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Exclusivity Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#FFC72C] mr-2" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              {isSpanish ? "Protocolo de Selección Exclusivo" : "Exclusive Selection Protocol"}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            {isSpanish ? (
              <>Transformación Colombia <span className="font-bold text-[#FFC72C]">2026</span></>
            ) : (
              <>Colombia Transformation <span className="font-bold text-[#FFC72C]">2026</span></>
            )}
          </h2>

          {/* Persuasive Copy */}
          <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {isSpanish 
              ? "No todos los cuerpos son iguales, y no todas las metas son alcanzables. Somos el estándar de oro en turismo estético y buscamos solo a nuestro próximo grupo selecto de candidatos dispuestos a un cambio integral." 
              : "Not all bodies are the same, and not all goals are attainable. We are the gold standard in aesthetic tourism, seeking only our next select group of candidates ready for a comprehensive transformation."}
          </p>

          {/* Action Area */}
          <div className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-center space-x-2 text-[#FFC72C] mb-6 font-medium text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{isSpanish ? "Cupos limitados para evaluaciones este mes." : "Limited evaluation slots available this month."}</span>
            </div>

            <button 
              onClick={handleApply}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-[#FFC72C] to-[#F7B801] text-[#002E5D] font-extrabold py-5 px-8 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(255,199,44,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span>{isSpanish ? "Solicitar Pre-Calificación Médica" : "Request Medical Pre-Qualification"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-5 flex items-start space-x-3 text-left">
              <ShieldCheck className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-200 leading-relaxed font-light">
                {isSpanish 
                  ? "Respetamos tu privacidad. Este es un proceso de evaluación clínica. Te contactaremos vía WhatsApp únicamente si tu perfil cumple con los requisitos iniciales."
                  : "We respect your privacy. This is a clinical evaluation process. We will contact you via WhatsApp only if your profile meets initial requirements."}
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default ContactCta;
