import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, ChevronLeft, CheckCircle, UploadCloud, User, Activity, 
  Plane, Camera, FileText, AlertCircle, Sparkles, MapPin, X, Image as ImageIcon, ShieldCheck, ArrowRight
} from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const EvaluationPage: React.FC = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const { item, stripePaymentLink } = useCart();
  const location = useLocation();
  const prefill = location.state as { prefillName?: string, prefillPhone?: string, prefillInterest?: string } | null;

  // 🛠️ DEV MODE — cambiar a false para activar envíos reales
  const DEV_MODE = false;
  // Funnel State: 'LEAD_CAPTURE', 'UPSELL', 'VIP_DOSSIER'
  const [funnelState, setFunnelState] = useState('LEAD_CAPTURE');
  
  // Lead Capture State
  const [leadData, setLeadData] = useState({
    name: '',
    whatsapp: '',
    interest: ''
  });
  const [isCapturing, setIsCapturing] = useState(false);

  // VIP Dossier State
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0, status: '' });
  const [stepErrors, setStepErrors] = useState([]);
  const fileInputRef = useRef(null);
  const authCheckboxRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', contactMethod: 'Email', location: '',
    procedures: [], prevSurgery: '',
    age: '', heightFeet: '5', heightInches: '5', weight: '', smoking: '', conditions: '', medications: '',
    timeframe: '', companion: '', passport: '',
    photos: []
  });

  useEffect(() => {
    if (prefill?.prefillName) {
       setLeadData({
         name: prefill.prefillName,
         whatsapp: prefill.prefillPhone || '',
         interest: prefill.prefillInterest || item?.servicio?.nombre || ''
       });
       
       let fname = prefill.prefillName;
       let lname = '';
       if(prefill.prefillName.includes(' ')){
           const parts = prefill.prefillName.split(' ');
           fname = parts[0];
           lname = parts.slice(1).join(' ');
       }
       
       const procs = [];
       if (prefill.prefillInterest) {
          procs.push(prefill.prefillInterest);
       } else if (item?.servicio?.nombre) {
          procs.push(item.servicio.nombre);
       }
       
       setFormData(prev => ({ ...prev, firstName: fname, lastName: lname, phone: prefill.prefillPhone || '', procedures: procs }));
       
       // Saltar directo al Upsell motivacional
       setFunnelState('UPSELL');
    } else if (item?.servicio?.nombre) {
       setLeadData(prev => ({ ...prev, interest: item.servicio.nombre }));
    }
  }, [item, prefill]);

  // Lead Handlers
  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsCapturing(true);

    // Enviar datos a Formspree (omitido en DEV_MODE)
    if (!DEV_MODE) {
      try {
        await fetch('https://formspree.io/f/xjglygol', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: leadData.name,
            whatsapp: leadData.whatsapp,
            area_de_interes: leadData.interest || 'No especificado',
            _subject: `Nuevo Lead - ${leadData.name}`,
          }),
        });
      } catch (err) {
        console.error('Formspree error:', err);
      }
    } else {
      console.log('[DEV_MODE] Lead capturado (no enviado):', leadData);
    }

    // Auto-fill VIP Dossier con datos del Lead
    let fname = leadData.name;
    let lname = '';
    if (leadData.name.includes(' ')) {
      const parts = leadData.name.split(' ');
      fname = parts[0];
      lname = parts.slice(1).join(' ');
    }
    setFormData(prev => ({
      ...prev,
      firstName: fname,
      lastName: lname,
      phone: leadData.whatsapp,
      contactMethod: 'WhatsApp (Recomendado)',
      procedures: leadData.interest && leadData.interest !== 'Consultation Needed' ? [leadData.interest] : []
    }));

    setIsCapturing(false);
    setFunnelState('UPSELL');
  };

  // ... rest of the original logic for VIP DOSSIER
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleProcedure = (proc) => {
    setFormData(prev => {
      const isSelected = prev.procedures.includes(proc);
      if (isSelected) {
        return { ...prev, procedures: prev.procedures.filter(p => p !== proc) };
      } else {
        return { ...prev, procedures: [...prev.procedures, proc] };
      }
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newFiles]
      }));
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removePhoto = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, index) => index !== indexToRemove)
    }));
  };

  const validateStep = (s) => {
    const errors = [];
    if (s === 1) {
      if (!formData.firstName.trim()) errors.push('El nombre es obligatorio.');
      if (!formData.lastName.trim()) errors.push('El apellido es obligatorio.');
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.push('Ingresa un email válido.');
      if (!formData.phone.trim()) errors.push('El número de WhatsApp es obligatorio.');
      if (!formData.location.trim()) errors.push('La ciudad o país de origen es obligatoria.');
    }
    if (s === 2) {
      if (formData.procedures.length === 0) errors.push('Selecciona al menos un procedimiento de interés.');
    }
    if (s === 3) {
      if (!formData.age.trim()) errors.push('La edad es obligatoria.');
      if (!formData.weight.trim()) errors.push('El peso es obligatorio para calcular el IMC.');
      if (!formData.smoking) errors.push('Por favor indica si eres fumador/a.');
    }
    if (s === 4) {
      if (!formData.timeframe) errors.push('Selecciona tu plazo estimado de viaje.');
    }
    if (s === 5) {
      const uploaded = formData.photos.filter(Boolean).length;
      if (uploaded < 1) errors.push('Sube al menos una foto para que la junta médica pueda evaluarte.');
    }
    return errors;
  };

  // Re-validar en tiempo real si ya hay errores visibles
  useEffect(() => {
    if (stepErrors.length > 0) {
      const freshErrors = validateStep(step);
      setStepErrors(freshErrors);
    }
  }, [formData, step]);

  const nextStep = () => {
    const errors = validateStep(step);
    if (errors.length > 0) {
      setStepErrors(errors);
      return;
    }
    setStepErrors([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setStepErrors([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => Math.max(prev - 1, 1));
  };

  const CLOUDINARY_CLOUD = 'dwydbaqga';
  const CLOUDINARY_PRESET = 'lmt_unsigned';
  const WHATSAPP_NUMBER = '16162748519';

  const buildWhatsAppUrl = (photoUrls = []) => {
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const procs = formData.procedures.join(', ') || 'Por definir';
    const photosText = photoUrls.length > 0
      ? `\n\n📸 *Fotos:*\n${photoUrls.join('\n')}`
      : '';
    const msg =
      `🌟 *NUEVO DOSIER VIP - LATITUDE MED TRAVEL* 🌟\n\n` +
      `👤 *Paciente:* ${name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📍 *Ciudad:* ${formData.location}\n\n` +
      `💉 *Procedimientos:* ${procs}\n` +
      `🗓️ *Plazo de viaje:* ${formData.timeframe || 'No especificado'}\n` +
      `🎂 *Edad:* ${formData.age} años\n` +
      `⚖️ *IMC:* ${bmi || 'N/D'}\n` +
      `🚬 *Fumador/a:* ${formData.smoking || 'N/D'}` +
      photosText +
      `\n\n_Enviado automáticamente desde el Formulario VIP_`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar checkbox de autorización
    if (authCheckboxRef.current && !authCheckboxRef.current.checked) {
      setStepErrors(['Debes autorizar el uso de tu información para continuar.']);
      return;
    }
    setStepErrors([]);
    setIsSubmitting(true);

    let photoUrls = [];

    if (DEV_MODE) {
      // 🛠️ DEV_MODE: simular delay y mostrar datos en consola
      console.log('[DEV_MODE] Formulario completo (no enviado):', formData);
      setUploadProgress({ current: 0, total: formData.photos.length, status: 'Simulando subida...' });
      await new Promise(r => setTimeout(r, 800));
      if (formData.photos.length > 0) {
        for (let i = 0; i < formData.photos.length; i++) {
          setUploadProgress({ current: i + 1, total: formData.photos.length, status: `Subiendo foto ${i + 1} de ${formData.photos.length}...` });
          await new Promise(r => setTimeout(r, 600));
        }
      }
      setUploadProgress({ current: 0, total: 0, status: 'Enviando dosier...' });
      await new Promise(r => setTimeout(r, 600));
    } else {
      // 1. Subir fotos a Cloudinary
      if (formData.photos.length > 0) {
        setUploadProgress({ current: 0, total: formData.photos.length, status: 'Subiendo fotos...' });
        for (let i = 0; i < formData.photos.length; i++) {
          const file = formData.photos[i];
          setUploadProgress({ current: i + 1, total: formData.photos.length, status: `Subiendo foto ${i + 1} de ${formData.photos.length}...` });
          try {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', CLOUDINARY_PRESET);
            data.append('folder', `lmt-dossier/${formData.firstName}-${formData.lastName}`);
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
              method: 'POST',
              body: data,
            });
            const json = await res.json();
            if (json.secure_url) photoUrls.push(json.secure_url);
          } catch (err) {
            console.error('Error subiendo foto:', err);
          }
        }
      }
      // 2. Enviar todo a Formspree
      setUploadProgress({ current: 0, total: 0, status: 'Enviando dosier...' });
      try {
        await fetch('https://formspree.io/f/xjglygol', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _subject: `Dosier VIP Completo - ${formData.firstName} ${formData.lastName}`,
            nombre: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            telefono_whatsapp: formData.phone,
            metodo_contacto: formData.contactMethod,
            ciudad: formData.location,
            procedimientos: formData.procedures.join(', '),
            cirugia_previa: formData.prevSurgery,
            edad: formData.age,
            estatura: `${formData.heightFeet}ft ${formData.heightInches}in`,
            peso_lbs: formData.weight,
            fuma: formData.smoking,
            medicamentos: formData.medications,
            condiciones: formData.conditions,
            plazo_viaje: formData.timeframe,
            acompanante: formData.companion,
            pasaporte: formData.passport,
            fotos_urls: photoUrls.length > 0 ? photoUrls.join('\n') : 'Sin fotos adjuntas',
          }),
        });
      } catch (err) {
        console.error('Formspree error:', err);
      }
    }

    setIsSubmitting(false);
    if (stripePaymentLink) {
      window.open(stripePaymentLink, '_blank');
    }
    setUploadProgress({ current: 0, total: 0, status: '' });
    setIsSuccess(true);
  };

  const facialProcedures = ['Rinoplastia', 'Lifting de Frente', 'Blefaroplastia', 'Lifting Facial', 'Lifting de Cuello', 'Bichectomía', 'Cirugía de Mentón', 'Otoplastia', 'Rejuvenecimiento Facial'];
  const bodyProcedures = ['Aumento de Senos', 'Reducción de Senos', 'Liposucción / Contorneado', 'Abdominoplastia (Tummy Tuck)', 'Lipotransferencia Glútea (BBL)', 'Marcación Abdominal', 'Extracción de Biopolímeros', 'Mejora de Senos', 'Contorno Corporal'];

  const calculateBMI = () => {
    if (!formData.weight || !formData.heightFeet) return null;
    const weightLbs = parseFloat(formData.weight);
    const totalInches = (parseInt(formData.heightFeet) * 12) + parseInt(formData.heightInches || 0);
    if (totalInches === 0) return null;
    const bmi = (703 * weightLbs) / (totalInches * totalInches);
    return bmi.toFixed(1);
  };

  const bmi = calculateBMI();
  const uploadedCount = formData.photos.filter(Boolean).length;
  const allUploaded = uploadedCount >= 3;
  const photoSlots = [
    { id: 'frontal', label: 'Vista Frontal', icon: '🧍', desc: 'De frente, posición natural' },
    { id: 'izquierda', label: 'Perfil Izquierdo', icon: '⬅️', desc: 'De lado izquierdo' },
    { id: 'derecha', label: 'Perfil Derecho', icon: '➡️', desc: 'De lado derecho' },
  ];

  // STYLES INJECTION
  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@500;600;700;800&family=Libre+Barcode+39&display=swap');
    .font-inter { font-family: 'Inter', sans-serif; }
    .font-montserrat { font-family: 'Montserrat', sans-serif; }
    .font-barcode { font-family: 'Libre Barcode 39', cursive; font-size: 3rem; }
    
    .ticket-cutout { position: relative; }
    .ticket-cutout::before, .ticket-cutout::after {
      content: ''; position: absolute; top: 50%; width: 30px; height: 30px;
      background-color: #F8FAFC; border-radius: 50%; transform: translateY(-50%); z-index: 10;
    }
    .ticket-cutout::before { left: -15px; border-right: 1px solid #E2E8F0; }
    .ticket-cutout::after { right: -15px; border-left: 1px solid #E2E8F0; }
    
    .scanner-line {
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: #004A99; box-shadow: 0 0 10px 2px rgba(0, 74, 153, 0.4);
      animation: scan 3s infinite linear; opacity: 0;
    }
    .group:hover .scanner-line { opacity: 1; }
    
    @keyframes scan {
      0% { top: 0; }
      50% { top: 100%; }
      100% { top: 0; }
    }
  `;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-inter relative overflow-hidden flex flex-col">
      <style dangerouslySetInnerHTML={{__html: globalStyles}} />

      {/* 🛠️ DEV MODE BANNER */}
      {DEV_MODE && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-orange-500 text-white text-center py-2 px-4 text-xs font-bold font-montserrat uppercase tracking-widest shadow-lg">
          🛠️ DEV MODE ACTIVO — No se envían datos reales · Cambia <code className="bg-orange-700 px-1 rounded">DEV_MODE = false</code> para producción
        </div>
      )}
      
      {/* Header General */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm fixed top-0 w-full z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="https://i.imgur.com/yKbMlbr.png" alt="Latitude Med Travel Logo" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="font-montserrat font-bold text-lg sm:text-xl text-[#002E5D] tracking-tight">
              LATITUDE <span className="text-[#004A99] font-medium">MED TRAVEL</span>
            </span>
          </div>
          {funnelState === 'VIP_DOSSIER' && (
            <div className="hidden sm:flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-[#004A99]" />
              <span className="text-xs font-semibold text-[#004A99] font-montserrat uppercase tracking-wider">Portal Seguro</span>
            </div>
          )}
        </div>
      </header>

      {/* PHASE 1 & 2: HERO SECTION WITH LEAD CAPTURE / UPSELL */}
      {(funnelState === 'LEAD_CAPTURE' || funnelState === 'UPSELL') && (
        <main className="flex-grow pt-20 relative flex items-center min-h-[90vh]">
          {/* Hero Background using generic premium clinic image */}
          <div className="absolute inset-0 w-full h-full z-0">
             <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" alt="Clinic Interior" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#002E5D]/90 via-[#004A99]/70 to-[#002E5D]/80"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
            
            {/* Hero Text */}
            <div className="text-left text-white animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#FFC72C] mr-2" />
                <span className="text-xs font-semibold tracking-widest uppercase">{isSpanish ? 'Turismo Médico Premium' : 'Premium Medical Tourism'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-light leading-tight mb-4">
                {isSpanish ? 'Redefine Tu Belleza' : 'Redefine Your Beauty'} <br/>
                <span className="font-bold text-[#FFC72C]">{isSpanish ? 'En Manos Expertas' : 'In Trusted Hands'}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 font-light max-w-lg mb-8 leading-relaxed">
                {isSpanish ? 'Conéctate con los mejores cirujanos plásticos certificados de Colombia y disfruta una experiencia de recuperación VIP de 5 estrellas.' : 'Connect with Colombia\'s elite board-certified plastic surgeons and enjoy a 5-star VIP recovery experience.'}
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200 font-semibold uppercase tracking-wider">
                 <div className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-[#FFC72C]" /> Mejores Cirujanos</div>
                 <div className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-[#FFC72C]" /> Concierge VIP</div>
              </div>
            </div>

            {/* Lead Capture Card */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 w-full max-w-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFC72C] to-[#F7B801]"></div>
                
                {funnelState === 'LEAD_CAPTURE' && (
                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-montserrat font-extrabold text-[#002E5D] mb-2">{isSpanish ? 'Evaluación Inicial Gratuita' : 'Secure Medical Dossier'}</h2>
                      <p className="text-sm text-gray-500">{isSpanish ? 'Descubre si eres candidato/a en segundos.' : 'Initiate your priority evaluation ($55 USD).'}</p>
                      {item && (
                          <div className="mt-3 p-2 bg-blue-50 border border-blue-100 rounded-lg text-sm text-[#004A99] font-medium flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {isSpanish ? 'Valoremos:' : 'Evaluation:'} {item.servicio.nombre}
                          </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#004A99] mb-1">{isSpanish ? 'Nombre Completo' : 'Full Name'}</label>
                        <input required type="text" value={leadData.name} onChange={e=>setLeadData({...leadData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/30 outline-none transition-all" placeholder={isSpanish ? "María García" : "Sarah Jenkins"} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#004A99] mb-1">{isSpanish ? 'Número de WhatsApp' : 'WhatsApp Number'}</label>
                        <input required type="tel" value={leadData.whatsapp} onChange={e=>setLeadData({...leadData, whatsapp: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/30 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                      {!item && (
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#004A99] mb-1">{isSpanish ? 'Área de Interés' : 'Area of Interest'}</label>
                          <select required value={leadData.interest} onChange={e=>setLeadData({...leadData, interest: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/30 outline-none transition-all appearance-none cursor-pointer">
                            <option value="">{isSpanish ? 'Selecciona una opción' : 'Select an option'}</option>
                            <option value="Rejuvenecimiento Facial">{isSpanish ? 'Mejoras Faciales' : 'Facial Improvements'}</option>
                            <option value="Mejora de Senos">{isSpanish ? 'Aumento / Reducción de Senos' : 'Breast Enhancement'}</option>
                            <option value="Contorno Corporal">{isSpanish ? 'Contorno Corporal' : 'Body Contouring'}</option>
                            <option value="Consultation Needed">{isSpanish ? 'No estoy seguro/a, necesito asesoría' : 'Not sure, need advice'}</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      disabled={isCapturing}
                      className="w-full py-4 bg-[#004A99] text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-[#002E5D] transition-colors flex justify-center items-center group shadow-md"
                    >
                      {isCapturing ? (isSpanish ? "Conectando..." : "Connecting...") : (
                        <>{isSpanish ? 'Comenzar Mi Viaje' : 'Start My Journey'} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-4 px-4 leading-relaxed">
                      {isSpanish ? 'Al continuar, aceptas nuestra política de privacidad confidencial. Tus datos están completamente seguros.' : 'By continuing, you agree to our confidential privacy policy. Your data is strictly secure.'}
                    </p>
                  </form>
                )}

                {funnelState === 'UPSELL' && (
                  <div className="text-center py-6 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <CheckCircle className="w-10 h-10 text-green-500 animate-bounce" />
                    </div>
                    <h2 className="text-2xl font-montserrat font-extrabold text-[#002E5D] mb-3">¡Excelente, {leadData.name.split(' ')[0] || 'allí'}!</h2>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                      Tu concierge VIP ha sido notificado/a y te escribirá pronto por WhatsApp.<br/><br/>
                      <strong className="text-[#004A99] bg-blue-50 px-3 py-1 rounded-md">¿Quieres acelerar tu cotización quirúrgica?</strong>
                    </p>
                    
                    <button 
                      onClick={() => { setFunnelState('VIP_DOSSIER'); window.scrollTo(0,0); }}
                      className="w-full py-4 bg-gradient-to-r from-[#FFC72C] to-[#F7B801] text-[#002E5D] rounded-xl font-extrabold mt-2 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-center items-center space-x-2"
                    >
                      <span>Completar Dosier VIP</span>
                      <ShieldCheck className="w-5 h-5" />
                    </button>
                    
                    <button onClick={() => window.location.reload()} className="w-full py-3 mt-3 text-xs text-gray-500 hover:text-[#004A99] font-medium transition-colors">
                      Por ahora no, esperaré en WhatsApp
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* PHASE 3: VIP DOSSIER (The long form) */}
      {funnelState === 'VIP_DOSSIER' && (
        <main className="flex-grow pt-28 pb-24 w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
          
          {/* Abstract Bg */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FFC72C] opacity-5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          {isSuccess ? (
             <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100 transform transition-all animate-fade-in-up relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#004A99] via-[#002E5D] to-[#F7B801]"></div>
               <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                 <CheckCircle className="w-12 h-12 text-green-500 animate-bounce" />
               </div>
               <h2 className="text-4xl font-montserrat font-extrabold text-[#002E5D] mb-4">¡Dosier Enviado!</h2>
               <p className="text-gray-600 mb-4 font-inter text-lg max-w-lg mx-auto leading-relaxed">
                 Gracias, {formData.firstName || 'allí'}. Tu expediente médico completo ha sido transmitido de forma segura a nuestro equipo en Colombia. Ahora estás en la lista de prioridad acelerada.
               </p>
               <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
                 Un especialista se pondrá en contacto contigo pronto. Para una respuesta aún más rápida, inicia la conversación directamente por WhatsApp:
               </p>

               {/* WhatsApp CTA - Botón Principal */}
               <a
                 href={buildWhatsAppUrl()}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#1da851] text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all mb-4 w-full sm:w-auto justify-center"
               >
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 <span>Iniciar consulta por WhatsApp</span>
               </a>

               <div className="mt-4">
                 <button onClick={() => window.location.reload()} className="text-sm text-gray-400 hover:text-[#004A99] font-medium transition-colors underline underline-offset-2">
                   Volver al Inicio
                 </button>
               </div>
             </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500">
               {/* Progress Bar */}
               <div className="bg-gray-50 h-2 w-full relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFC72C] to-[#F7B801] transition-all duration-700 ease-out rounded-r-full" style={{ width: `${(step / 6) * 100}%` }}></div>
               </div>

               <div className="p-6 sm:p-12">
                 <div className="mb-10 animate-fade-in">
                   <div className="flex items-center space-x-2 mb-3">
                     <div className="bg-[#004A99]/10 text-[#004A99] px-3 py-1 rounded-full text-xs font-bold font-montserrat uppercase tracking-widest flex items-center space-x-2">
                       {step === 1 && <><User className="w-3 h-3" /> <span>Fase 01</span></>}
                       {step === 2 && <><Activity className="w-3 h-3" /> <span>Fase 02</span></>}
                       {step === 3 && <><FileText className="w-3 h-3" /> <span>Fase 03</span></>}
                       {step === 4 && <><Plane className="w-3 h-3" /> <span>Fase 04</span></>}
                       {step === 5 && <><Camera className="w-3 h-3" /> <span>Fase 05</span></>}
                       {step === 6 && <><CheckCircle className="w-3 h-3" /> <span>Fase Final</span></>}
                     </div>
                   </div>
                   <h1 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#002E5D] leading-tight transition-all duration-300">
                     {step === 1 && "Datos de Contacto y Logística."}
                     {step === 2 && "Definiendo Procedimientos."}
                     {step === 3 && "Protocolo de Salud y Seguridad."}
                     {step === 4 && "Logística de Viaje."}
                     {step === 5 && "Evaluación Visual Segura."}
                     {step === 6 && "Dosier Médico VIP."}
                   </h1>
                   <p className="text-gray-500 mt-3 text-lg leading-relaxed">
                     {step === 1 && "Confirma tu información de contacto precargada de tu pase rápido."}
                     {step === 2 && "Selecciona los procedimientos que deseas para tu transformación."}
                     {step === 3 && "La honestidad en tus respuestas garantiza un procedimiento impecable y seguro."}
                     {step === 4 && "Ayúdanos a crear el itinerario perfecto para tu experiencia médica."}
                     {step === 5 && "Estrictamente confidencial. Necesario para un plan quirúrgico hiper-preciso."}
                     {step === 6 && "Revisa tu solicitud antes de enviarla definitivamente."}
                   </p>
                 </div>

                 {/* Step 1: Contact */}
                 {step === 1 && (
                   <div className="space-y-6 animate-fade-in">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Nombre *</label>
                         <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all" />
                       </div>
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Apellido *</label>
                         <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all" />
                       </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Correo Electrónico *</label>
                         <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all" />
                       </div>
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Teléfono / WhatsApp *</label>
                         <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all" />
                       </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Método de Contacto</label>
                         <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all cursor-pointer">
                           <option>WhatsApp (Recomendado)</option>
                           <option>Correo Electrónico</option>
                           <option>Llamada Telefónica</option>
                         </select>
                       </div>
                       <div className="group">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Ciudad, Estado *</label>
                         <div className="relative">
                           <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                           <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 outline-none transition-all" placeholder="Miami, FL" />
                         </div>
                       </div>
                     </div>
                   </div>
                 )}

                 {/* Step 2: Procedures */}
                 {step === 2 && (
                   <div className="space-y-10 animate-fade-in">
                     <div>
                       <h3 className="text-xl font-montserrat font-bold text-[#004A99] mb-5 flex items-center"><Sparkles className="w-5 h-5 mr-2 text-[#FFC72C]"/> Procedimientos Faciales</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {facialProcedures.map(proc => (
                           <div key={proc} onClick={() => toggleProcedure(proc)} className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between group transition-all hover:-translate-y-1 ${formData.procedures.includes(proc) ? 'border-[#004A99] bg-[#004A99] text-white shadow-md' : 'border-gray-100 bg-white hover:border-[#004A99]/30 text-gray-700'}`}>
                             <span className="font-semibold">{proc}</span>
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${formData.procedures.includes(proc) ? 'bg-[#FFC72C] text-[#002E5D]' : 'border-2 border-gray-200 group-hover:border-[#004A99]/30'}`}>
                               {formData.procedures.includes(proc) && <CheckCircle className="w-4 h-4" />}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                     <div>
                       <h3 className="text-xl font-montserrat font-bold text-[#004A99] mb-5 flex items-center"><Activity className="w-5 h-5 mr-2 text-[#FFC72C]"/> Contorno Corporal</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {bodyProcedures.map(proc => (
                           <div key={proc} onClick={() => toggleProcedure(proc)} className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between group transition-all hover:-translate-y-1 ${formData.procedures.includes(proc) ? 'border-[#004A99] bg-[#004A99] text-white shadow-md' : 'border-gray-100 bg-white hover:border-[#004A99]/30 text-gray-700'}`}>
                             <span className="font-semibold">{proc}</span>
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${formData.procedures.includes(proc) ? 'bg-[#FFC72C] text-[#002E5D]' : 'border-2 border-gray-200 group-hover:border-[#004A99]/30'}`}>
                               {formData.procedures.includes(proc) && <CheckCircle className="w-4 h-4" />}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                     <div className="pt-6 border-t border-gray-100">
                       <label className="block text-sm font-semibold text-[#002E5D] mb-3">¿Cirugía plástica previa?</label>
                       <select name="prevSurgery" value={formData.prevSurgery} onChange={handleInputChange} className="w-full md:w-1/2 px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none cursor-pointer focus:ring-2 focus:ring-[#004A99]/20 transition-all">
                         <option value="">Selecciona una opción</option>
                         <option value="No">No, es la primera vez</option>
                         <option value="Yes">Sí</option>
                       </select>
                     </div>
                   </div>
                 )}

                 {/* Step 3: Medical */}
                 {step === 3 && (
                   <div className="space-y-8 animate-fade-in">
                     <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                       <div className="bg-white p-2 rounded-full shadow-sm">
                         <AlertCircle className="w-6 h-6 text-[#004A99]" />
                       </div>
                       <p className="text-sm text-[#002E5D] leading-relaxed pt-1">
                         Colombia mantiene estándares médicos de élite. La honestidad en tus respuestas garantiza que nuestros cirujanos certificados te ofrezcan un procedimiento impecable y seguro.
                       </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div><label className="block text-sm font-semibold text-[#002E5D] mb-2">Edad</label><input type="number" name="age" value={formData.age} onChange={handleInputChange} className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 transition-all" /></div>
                       <div>
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Estatura</label>
                         <div className="flex space-x-2">
                           <select name="heightFeet" value={formData.heightFeet} onChange={handleInputChange} className="w-1/2 px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#004A99]/20">{[4,5,6,7].map(f=><option key={f} value={f}>{f} ft</option>)}</select>
                           <select name="heightInches" value={formData.heightInches} onChange={handleInputChange} className="w-1/2 px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#004A99]/20">{[0,1,2,3,4,5,6,7,8,9,10,11].map(i=><option key={i} value={i}>{i} in</option>)}</select>
                         </div>
                       </div>
                       <div className="relative">
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Peso (Lbs)</label>
                         <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 transition-all" />
                         {bmi && <span className={`absolute right-3 top-[38px] text-xs font-bold px-2 py-1 rounded-md shadow-sm animate-fade-in ${bmi < 30 ? 'bg-green-100 text-green-700' : 'bg-[#FFC72C] text-[#002E5D]'}`}>IMC: {bmi}</span>}
                       </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">¿Fumas o vapeas?</label>
                         <select name="smoking" value={formData.smoking} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 transition-all">
                           <option value="">Selecciona opción</option><option value="No">No</option><option value="Yes">Sí</option>
                         </select>
                       </div>
                       <div>
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Medicamentos Actuales</label>
                         <input type="text" name="medications" value={formData.medications} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 transition-all" />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-semibold text-[#002E5D] mb-2">Condiciones Preexistentes</label>
                       <textarea name="conditions" value={formData.conditions} onChange={handleInputChange} rows={3} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none resize-none focus:bg-white focus:ring-2 focus:ring-[#004A99]/20 transition-all"></textarea>
                     </div>
                   </div>
                 )}
                 {step === 4 && (
                   <div className="space-y-8 animate-fade-in">
                     <div>
                       <label className="block text-sm font-semibold text-[#002E5D] mb-4">¿Cuándo deseas viajar?</label>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {['Lo antes posible', '1-3 meses', '3-6 meses', 'Explorando opciones'].map(time => (
                           <div key={time} onClick={() => setFormData(prev => ({...prev, timeframe: time}))} className={`p-4 rounded-xl border-2 cursor-pointer flex items-center space-x-4 transition-all hover:-translate-y-1 ${formData.timeframe === time ? 'border-[#004A99] bg-[#004A99] text-white shadow-md' : 'border-gray-100 bg-white text-gray-700'}`}>
                             <div className={`w-5 h-5 rounded-full border-2 ${formData.timeframe === time ? 'border-[#FFC72C] bg-[#FFC72C]' : 'border-gray-300'}`}></div>
                             <span className="font-semibold">{time}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                       <div>
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">¿Viajas con acompañante?</label>
                         <select name="companion" value={formData.companion} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none cursor-pointer focus:ring-2 focus:ring-[#004A99]/20 transition-all">
                           <option value="">Selecciona opción</option><option value="Yes">Sí</option><option value="No">No</option>
                         </select>
                       </div>
                       <div>
                         <label className="block text-sm font-semibold text-[#002E5D] mb-2">Estado del Pasaporte</label>
                         <select name="passport" value={formData.passport} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none cursor-pointer focus:ring-2 focus:ring-[#004A99]/20 transition-all">
                           <option value="">Selecciona opción</option><option value="Yes">Válido</option><option value="Processing">En trámite</option><option value="No">Necesito solicitarlo</option>
                         </select>
                       </div>
                     </div>
                   </div>
                 )}

                 {/* Step 5: Photos */}
                 {step === 5 && (
                   <div className="space-y-6 animate-fade-in">
                     {/* Header */}
                     <div className="bg-gradient-to-r from-yellow-50 to-white border border-[#FFC72C]/40 rounded-2xl p-6 shadow-sm">
                       <h4 className="font-montserrat font-bold text-[#002E5D] mb-1 text-lg">Bóveda Segura de Fotos</h4>
                       <p className="text-sm text-gray-600 font-inter leading-relaxed">
                         Para elaborar una cotización quirúrgica precisa, nuestra junta médica necesita contexto visual.
                         Sube las <strong className="text-[#004A99]">3 vistas requeridas</strong> usando el botón de cada una.
                       </p>
                     </div>

                     {/* Checklist de 3 fotos */}
                     <div className="space-y-3">
                       {photoSlots.map((slot, index) => {
                         const photo = formData.photos[index];
                         const isUploaded = !!photo;
                         return (
                           <div key={slot.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 ${isUploaded ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-white'}`}>
                             <div className="flex items-center space-x-4">
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isUploaded ? 'bg-green-500 shadow-md' : 'bg-gray-100 border-2 border-dashed border-gray-300'}`}>
                                 {isUploaded
                                   ? <CheckCircle className="w-6 h-6 text-white" />
                                   : <span className="text-lg">{slot.icon}</span>
                                 }
                               </div>
                               <div>
                                 <p className={`font-montserrat font-bold text-sm ${isUploaded ? 'text-green-700' : 'text-[#002E5D]'}`}>
                                   {slot.label}
                                   {isUploaded && <span className="ml-2 text-xs font-normal text-green-600">✓ Foto subida</span>}
                                 </p>
                                 <p className="text-xs text-gray-500 mt-0.5">
                                   {isUploaded
                                     ? <span className="text-green-600 font-medium truncate max-w-[180px] inline-block">{photo.name}</span>
                                     : slot.desc
                                   }
                                 </p>
                               </div>
                             </div>
                             <div className="flex items-center space-x-2 flex-shrink-0">
                               {isUploaded ? (
                                 <button
                                   onClick={() => removePhoto(index)}
                                   className="text-xs text-red-400 hover:text-red-600 flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-red-50 transition-colors border border-red-200"
                                 >
                                   <X className="w-3 h-3" /><span>Cambiar</span>
                                 </button>
                               ) : (
                                 <label className="cursor-pointer text-xs font-bold text-[#004A99] flex items-center space-x-1 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors border border-[#004A99]/20">
                                   <UploadCloud className="w-3 h-3" />
                                   <span>Subir foto</span>
                                   <input
                                     type="file"
                                     accept="image/*"
                                     className="hidden"
                                     onChange={(e) => {
                                       if (e.target.files && e.target.files[0]) {
                                         const newFile = e.target.files[0];
                                         setFormData(prev => {
                                           const newPhotos = [...prev.photos];
                                           newPhotos[index] = newFile;
                                           return { ...prev, photos: newPhotos };
                                         });
                                         e.target.value = '';
                                       }
                                     }}
                                   />
                                 </label>
                               )}
                             </div>
                           </div>
                         );
                       })}
                     </div>

                     {/* Barra de progreso */}
                     <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-[#002E5D] uppercase tracking-wider">Progreso</span>
                         <span className={`text-xs font-bold ${allUploaded ? 'text-green-600' : 'text-[#004A99]'}`}>{uploadedCount}/3 fotos</span>
                       </div>
                       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                         <div
                           className={`h-full rounded-full transition-all duration-500 ${allUploaded ? 'bg-green-500' : 'bg-gradient-to-r from-[#004A99] to-[#FFC72C]'}`}
                           style={{ width: `${(uploadedCount / 3) * 100}%` }}
                         />
                       </div>
                       {allUploaded && (
                         <p className="text-xs text-green-600 font-semibold mt-2 text-center">✅ ¡Perfecto! Las 3 fotos están listas. Puedes continuar.</p>
                       )}
                       {!allUploaded && (
                         <p className="text-xs text-gray-500 mt-2 text-center">Faltan {3 - uploadedCount} foto{3 - uploadedCount !== 1 ? 's' : ''} por subir</p>
                       )}
                     </div>
                   </div>
                 )}

                 {/* Step 6: Review */}
                 {step === 6 && (
                   <div className="animate-fade-in relative">
                     <div className="ticket-cutout bg-white text-gray-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row overflow-hidden relative">
                       <div className="p-8 md:w-2/3 md:border-r-2 md:border-dashed md:border-gray-200">
                         <div className="flex justify-between items-center mb-8">
                           <div>
                             <p className="text-[#004A99] font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-1">Paciente Dosier VIP</p>
                             <h3 className="font-montserrat font-extrabold text-2xl uppercase text-[#002E5D]">{formData.lastName || 'Doe'}, {formData.firstName || 'Jane'}</h3>
                           </div>
                         </div>
                         <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                           <div><p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Origen</p><p className="font-semibold text-gray-800 uppercase">{formData.location || 'USA'}</p></div>
                           <div><p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Destino</p><p className="font-semibold text-[#004A99] uppercase">COLOMBIA</p></div>
                           <div><p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Plazo</p><p className="font-semibold text-gray-800">{formData.timeframe || 'Por definir'}</p></div>
                           <div><p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Fotos</p><p className="font-semibold text-gray-800">{formData.photos.length} Imágenes Seguras</p></div>
                         </div>
                         <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                           <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Procedimientos</p>
                           <div className="flex flex-wrap gap-2">
                             {formData.procedures.map(p => <span key={p} className="bg-white border border-gray-200 text-[#002E5D] px-3 py-1 rounded-md text-xs font-bold uppercase shadow-sm">{p}</span>)}
                           </div>
                         </div>
                       </div>
                       <div className="bg-[#002E5D] p-8 md:w-1/3 flex flex-col justify-between text-white relative">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFC72C] rounded-bl-[100px] opacity-20"></div>
                         <div>
                           <p className="text-[#FFC72C] font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-1">Estado</p>
                           <p className="font-bold text-xl mb-6">LISTO PARA ENVIAR</p>
                           <div className="space-y-4 mb-6">
                             <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2"><span className="text-blue-200">IMC</span><span className="font-bold">{bmi || 'N/D'}</span></div>
                             <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2"><span className="text-blue-200">Edad</span><span className="font-bold">{formData.age || 'N/D'}</span></div>
                             <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2"><span className="text-blue-200">Fumador/a</span><span className="font-bold">{formData.smoking || 'N/D'}</span></div>
                           </div>
                         </div>
                         <div className="text-center mt-auto">
                           <div className="font-barcode text-4xl opacity-80 mb-2">LATITUDEMEDTRAVEL</div>
                         </div>
                       </div>
                     </div>
                     <label className="flex items-start space-x-3 cursor-pointer mt-8 bg-blue-50/50 p-4 rounded-xl border border-blue-100 transition-colors hover:bg-blue-50">
                        <input ref={authCheckboxRef} type="checkbox" className="mt-1 w-5 h-5 text-[#004A99] border-gray-300 rounded cursor-pointer" />
                        <span className="text-sm text-[#002E5D] font-medium">Autorizo a Latitude Med Travel a compartir este dosier seguro con su junta médica para su evaluación.</span>
                     </label>
                   </div>
                 )}
               </div>

                {/* Banner de errores de validación */}
                {stepErrors.length > 0 && (
                  <div className="mx-6 sm:mx-12 mt-4">
                    <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 flex items-start space-x-3 animate-fade-in">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        {stepErrors.map((err, i) => (
                          <p key={i} className="text-sm text-red-600 font-medium leading-snug">• {err}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

               {/* Footer Navigation */}
               <div className="bg-white px-6 sm:px-12 py-6 border-t border-gray-100 flex items-center justify-between">
                 {step > 1 ? (
                   <button onClick={prevStep} className="flex items-center space-x-2 text-gray-400 hover:text-[#004A99] font-bold transition-colors group px-4 py-2">
                     <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> <span className="uppercase text-sm tracking-wider">Atrás</span>
                   </button>
                 ) : <div></div>}
                 
                 {step < 6 ? (
                   <button onClick={nextStep} className={`flex items-center space-x-2 px-8 sm:px-10 py-4 rounded-full font-extrabold transition-all group ${stepErrors.length > 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#FFC72C] hover:bg-[#F7B801] text-[#002E5D] shadow-[0_0_20px_rgba(255,199,44,0.3)] hover:shadow-[0_0_30px_rgba(247,184,1,0.5)] hover:-translate-y-1'}`}>
                     <span className="uppercase text-sm tracking-wider">Continuar</span> <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                   </button>
                 ) : (
                   <button onClick={handleSubmit} disabled={isSubmitting} className="flex items-center space-x-3 bg-[#004A99] hover:bg-[#002E5D] text-white px-8 sm:px-12 py-4 rounded-full font-extrabold shadow-[0_0_20px_rgba(0,74,153,0.3)] disabled:opacity-70 group hover:-translate-y-1 transition-all">
                     {isSubmitting ? (
                        <span className="uppercase tracking-wider text-sm">
                          {uploadProgress.status || 'Procesando...'}
                          {uploadProgress.total > 0 && ` (${uploadProgress.current}/${uploadProgress.total})`}
                        </span>
                      ) : (
                        <><span className="uppercase text-sm tracking-wider">Enviar Dosier</span> <Plane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                   </button>
                 )}
               </div>
            </div>
          )}
        </main>
      )}

    </div>
  );
};

export default EvaluationPage;