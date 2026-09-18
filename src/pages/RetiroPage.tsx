import React, { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   PALETTE — Latitude Med Travel Brand Colors
   Navy: #071224, #0B1830, #0E2246
   Gold: #F5A623, #FFB84D, #D48812
   Accents & Overlays: Glassmorphism + Luxury Glows
   ───────────────────────────────────────────── */

// ── Intersection Observer Hook for Smooth Fade/Slide In ──
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Reusable Animated Wrapper ──
const FadeIn: React.FC<{ children: React.ReactNode; delay?: string; className?: string; direction?: 'up' | 'none' }> = ({
  children,
  delay = '0ms',
  className = '',
  direction = 'up',
}) => {
  const { ref, visible } = useInView();
  const transformStyle =
    direction === 'up'
      ? visible
        ? 'translateY(0)'
        : 'translateY(24px)'
      : 'none';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: transformStyle,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
      }}
    >
      {children}
    </div>
  );
};

// ── Image Placeholder Component with High-Converting Styling ──
interface ImageSlotProps {
  src?: string;
  label: string;
  hint: string;
  badge?: string;
  className?: string;
  aspect?: string;
}

const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  label,
  hint,
  badge,
  className = '',
  aspect = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-xl ${aspect} ${className}`}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={label}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        /* Visual Placeholder Box when no image provided or fails */
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
          {/* Subtle Grid / Camera Icon */}
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 text-[#F5A623] shadow-inner transition-transform duration-300 group-hover:scale-110">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-white/90">{label}</span>
          <span className="mt-1 max-w-[220px] text-xs text-white/50">{hint}</span>
        </div>
      )}

      {/* Decorative gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071224]/80 via-transparent to-transparent opacity-80" />

      {/* Badge (e.g., Zona Colonial, Hotel Boutique, etc.) */}
      {badge && (
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#071224]/80 px-3 py-1 text-xs font-medium text-[#FFB84D] backdrop-blur-md">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
          {badge}
        </div>
      )}
    </div>
  );
};

// ── FAQ Accordion Item ──
const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 transition-colors hover:border-[#F5A623]/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-white/95 focus:outline-none md:text-lg"
      >
        <span className="pr-4">{q}</span>
        <span
          className="ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-light text-[#F5A623] transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? '320px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-sm leading-relaxed text-white/70 md:text-base">{a}</p>
      </div>
    </div>
  );
};

// ── Floating Action Bar for Mobile & Desktop ──
const FloatingCTA: React.FC<{ whatsappUrl: string }> = ({ whatsappUrl }) => (
  <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar o consultar cupo vía WhatsApp"
      className="group flex items-center gap-3 rounded-full border border-[#25D366]/40 bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/50 md:text-base"
    >
      <svg className="h-5 w-5 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      <span>Consultar Disponibilidad</span>
    </a>
  </div>
);

// ═══════════════════════════════════════════════
//   MAIN RETIRO SALES PAGE COMPONENT
// ═══════════════════════════════════════════════
const RetiroPage: React.FC = () => {
  // Configuración de WhatsApp (puedes reemplazar con tu número real)
  const whatsappUrl =
    'https://wa.me/1XXXXXXXXXX?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Escapada%20de%20Armonizaci%C3%B3n%20Facial%20%E2%9C%A8';

  const faqs = [
    {
      q: '¿Por qué cuesta lo mismo que solo el procedimiento en EE. UU.?',
      a: 'En EE. UU. los costos de quirófano, honorarios y gastos administrativos elevan enormemente las tarifas estéticas. En República Dominicana contamos con médicos de prestigio internacional e instalaciones premium a una estructura de costos que nos permite incluirte estancia de lujo, traslados, gastronomía y tour cultural por el mismo presupuesto.',
    },
    {
      q: '¿Quién realiza los tratamientos estéticos?',
      a: 'Todos los procedimientos son realizados por médicos especialistas certificados en armonización y medicina estética facial. Jamás delegamos tratamientos en personal no calificado y realizamos valoración previa.',
    },
    {
      q: '¿Qué tipo de tratamientos de armonización incluye?',
      a: 'El paquete base está diseñado para rejuvenecer y equilibrar facciones (zonas con ácido hialurónico de alta gama, toxina botulínica / neuromoduladores y bioestimuladores según tu necesidad específica). Antes del viaje se define tu plan 100% personalizado.',
    },
    {
      q: '¿Por qué los grupos son de solo 5 a 7 personas?',
      a: 'Para garantizar la intimidad, la atención médica sin prisas y un ambiente relajado y de lujo. No es un tour masivo: es una experiencia boutique de descanso y renovación.',
    },
    {
      q: '¿El vuelo está incluido?',
      a: 'El vuelo a República Dominicana no está incluido para darte flexibilidad de fechas y ciudad de salida. Te recibimos en el aeropuerto con chofer privado y nos encargamos de absolutamente todo lo demás desde tu llegada hasta tu regreso.',
    },
    {
      q: '¿Tendré tiempo de recuperarme antes de regresar?',
      a: 'Sí. Los procedimientos son mínimamente invasivos con rápida recuperación. Además, el Día 3 incluye chequeo matutino previo a tu check-out y vuelo de regreso.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#071224] font-sans text-white selection:bg-[#F5A623] selection:text-[#071224]">
      {/* ─────────────────────────────────────────
          TOP BAR / LOGO
         ───────────────────────────────────────── */}
      <header className="absolute top-0 z-40 w-full border-b border-white/5 bg-[#071224]/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/logo-latitude.png"
              alt="Latitude Med Travel Logo"
              className="h-10 w-auto object-contain drop-shadow"
              onError={(e) => {
                // Fallback si no carga la ruta
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#F5A623]/40 bg-[#F5A623]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#FFB84D] uppercase transition-all duration-300 hover:bg-[#F5A623] hover:text-[#071224] sm:inline-flex"
          >
            Cupos Reducidos (5-7 Pax)
          </a>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          HERO SECTION (Hook + Aspirational Visual)
         ───────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#F5A623]/15 to-transparent blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-[#1A365D]/40 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5A623]/30 bg-gradient-to-r from-[#F5A623]/20 via-[#F5A623]/10 to-transparent px-4 py-1.5 backdrop-blur-md">
              <span className="text-xs font-semibold tracking-widest text-[#FFB84D] uppercase">
                ✈️ Escapada Exclusiva · 3 Días & 2 Noches
              </span>
            </div>

            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Tu Armonización Facial + Mini Vacaciones{' '}
              <span className="bg-gradient-to-r from-[#F5A623] via-[#FFC069] to-[#F5A623] bg-clip-text text-transparent">
                al mismo precio
              </span>{' '}
              que pagarías en EE. UU.
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Un retiro íntimo de <strong>solo 5 a 7 personas</strong> en la histórica Zona Colonial:
              tratamientos estéticos de alta gama, hotel de lujo, gastronomía caribeña y seguimiento médico continuo.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFB84D] px-8 py-4 text-center text-base font-bold text-[#071224] shadow-lg shadow-[#F5A623]/25 transition-all duration-300 hover:scale-105 hover:shadow-[#F5A623]/40 sm:w-auto md:text-lg"
              >
                Quiero Mi Lugar en la Próxima Fecha →
              </a>
              <a
                href="#itinerario"
                className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                Ver Itinerario Completo
              </a>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 sm:gap-10 sm:text-sm">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Médicos Estéticos Certificados
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Grupo VIP (5–7 cupos)
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Todo Incluido en Destino
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FOTO GALLERY / DESTINATION SHOWCASE
          (Visuales del escape de ensueño)
         ───────────────────────────────────────── */}
      <section className="relative border-y border-white/5 bg-[#0B1830]/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                El Escenario de tu Renovación
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Un entorno boutique pensado para tu confort y discreción
              </h2>
            </div>

            {/* Grid con Placeholders para fotos turísticas */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ImageSlot
                src="/assets/images/zona-colonial-calle.jpg"
                badge="Zona Colonial"
                label="Arquitectura Colonial"
                hint="Foto sugerida: Calles empedradas, balcones floridos y esencia caribeña"
                aspect="aspect-[4/3]"
              />
              <ImageSlot
                src="/assets/images/hotel-boutique-suite.jpg"
                badge="Hotel de Lujo"
                label="Hospedaje de Calma y Confort"
                hint="Foto sugerida: Suite privada del hotel, piscina o terraza relajante"
                aspect="aspect-[4/3]"
              />
              <ImageSlot
                src="/assets/images/clinica-estetica.jpg"
                badge="Clínica Médica"
                label="Atención Médica VIP"
                hint="Foto sugerida: Sala estética moderna, pulcra e instrumental de vanguardia"
                aspect="aspect-[4/3]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PASTOR: P & A (Problem & Amplify)
          "La Comparativa Racional & Emocional"
         ───────────────────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                La Realidad de la Medicina Estética
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                ¿Por qué pagar solo por agujas cuando puedes vivir una transformación completa?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                En EE. UU., un plan integral de armonización facial (toxina botulínica + ácido hialurónico en pómulos,
                mandíbula y labios) fácilmente ronda entre los <strong>$3,500 y $6,500 USD</strong>.
                Sales del consultorio con prisa, regresas al tráfico diario y te recuperas en soledad.
              </p>
            </div>
          </FadeIn>

          {/* Comparativa visual lado a lado */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Tarjeta EE. UU. */}
            <FadeIn delay="100ms">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-inner">
                <div>
                  <div className="mb-4 inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold tracking-wider text-red-400 uppercase">
                    La Consulta Tradicional en EE. UU.
                  </div>
                  <h3 className="text-2xl font-bold text-white/90">Tratamiento Aislado</h3>
                  <div className="my-6 text-3xl font-extrabold text-white/40 line-through">
                    $3,500 – $6,500 USD
                  </div>
                  <ul className="space-y-3.5 text-sm text-white/60">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✕</span>
                      Solo el procedimiento médico (citas frías y apresuradas)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✕</span>
                      Recuperación en medio de tu rutina de trabajo y estrés
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✕</span>
                      Cero desconexión ni descanso reparador
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✕</span>
                      Sin traslados ni experiencias culturales
                    </li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/40">
                  Gastas lo mismo, pero te quedas en tu misma rutina.
                </div>
              </div>
            </FadeIn>

            {/* Tarjeta Retiro Latitude */}
            <FadeIn delay="200ms">
              <div className="relative flex h-full flex-col justify-between rounded-3xl border-2 border-[#F5A623] bg-gradient-to-b from-[#F5A623]/15 via-[#0B1830] to-[#071224] p-8 shadow-2xl shadow-[#F5A623]/15">
                <div className="absolute -top-3.5 right-6 rounded-full bg-[#F5A623] px-4 py-1 text-xs font-bold text-[#071224] uppercase shadow">
                  Todo Resuelto
                </div>
                <div>
                  <div className="mb-4 inline-block rounded-full bg-[#F5A623]/20 px-3 py-1 text-xs font-bold tracking-wider text-[#FFB84D] uppercase">
                    Escapada Latitude Med Travel
                  </div>
                  <h3 className="text-2xl font-bold text-white">Retiro de Armonización 3D / 2N</h3>
                  <div className="my-6 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#F5A623]">Misma Inversión</span>
                    <span className="text-xs text-white/70">(Tratamiento + Mini Vacaciones)</span>
                  </div>
                  <ul className="space-y-3.5 text-sm text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-[#F5A623]">✓</span>
                      <span><strong>Armonización facial de alta gama</strong> con médicos especialistas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-[#F5A623]">✓</span>
                      <span><strong>Hotel boutique de 3 días / 2 noches</strong> con calma absoluta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-[#F5A623]">✓</span>
                      <span><strong>Paseo guiado por la Zona Colonial</strong> y velada gastronómica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-[#F5A623]">✓</span>
                      <span><strong>Chequeo médico de seguimiento</strong> antes de tu retorno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-[#F5A623]">✓</span>
                      <span>Grupo íntimo (5 a 7 mujeres) con atención 100% personalizada</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 border-t border-[#F5A623]/30 pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-[#F5A623] py-3 text-center text-sm font-bold text-[#071224] transition-all hover:bg-[#FFB84D]"
                  >
                    Consultar Paquete y Fechas Disponibles
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PASTOR: S (Story / The Experience)
          ITINERARIO PASO A PASO CON FOTOS
         ───────────────────────────────────────── */}
      <section id="itinerario" className="relative border-t border-white/5 bg-[#0A1933] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Tu Escapada de Transformación
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">
                Así vivirás tus 3 días inolvidables
              </h2>
              <p className="mt-4 text-base text-white/60">
                Diseñado para equilibrar el relax, la cultura y la precisión estética.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {/* DÍA 1 */}
            <FadeIn>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] font-black text-[#071224]">
                      1
                    </span>
                    <span className="text-sm font-bold tracking-wider text-[#FFB84D] uppercase">
                      Día 1 · Llegada & Bienvenida
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Desconexión y bienvenida al paraíso
                  </h3>
                  <p className="mt-3 text-sm text-white/70 sm:text-base">
                    Llegas al destino, donde nuestro chofer te recibe para trasladarte directamente al hotel boutique.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      Check-in tranquilo y tiempo para acomodarte en tu habitación.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      Cóctel exclusivo para romper el hielo y conocer al selecto grupo (solo 5 a 7 personas).
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      Cena de integración con gastronomía de autor y descanso reparador.
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <ImageSlot
                    src="/assets/images/coctel-bienvenida.jpg"
                    label="Foto Cóctel y Hotel"
                    hint="Foto sugerida: Brindis de bienvenida, copa en mano en patio colonial o terraza nocturna"
                    badge="Día 1 · Cóctel VIP"
                    aspect="aspect-[4/3]"
                  />
                </div>
              </div>
            </FadeIn>

            {/* DÍA 2 */}
            <FadeIn>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="order-2 lg:order-1 lg:col-span-5">
                  <ImageSlot
                    src="/assets/images/zona-colonial-paseo.jpg"
                    label="Foto Zona Colonial / Cita"
                    hint="Foto sugerida: Caminata guiada por monumentos coloniales / momento de consulta estética"
                    badge="Día 2 · Belleza & Cultura"
                    aspect="aspect-[4/3]"
                  />
                </div>
                <div className="order-1 lg:order-2 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] font-black text-[#071224]">
                      2
                    </span>
                    <span className="text-sm font-bold tracking-wider text-[#FFB84D] uppercase">
                      Día 2 · Cultura & Tu Momento de Belleza
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    El día de tu renovación estética
                  </h3>
                  <p className="mt-3 text-sm text-white/70 sm:text-base">
                    Combinamos la magia histórica de Santo Domingo con la dedicación que tu rostro merece.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      <strong>Mañana:</strong> Paseo turístico guiado por la emblemática Zona Colonial para capturar fotos increíbles y absorber historia.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      <strong>Tarde:</strong> Tu cita médica personalizada. Aplicación cuidadosa de tus tratamientos de armonización facial con insumos de primera línea.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      <strong>Noche:</strong> Reposo, cena suave y relajación profunda en la serenidad del hotel.
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* DÍA 3 */}
            <FadeIn>
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] font-black text-[#071224]">
                      3
                    </span>
                    <span className="text-sm font-bold tracking-wider text-[#FFB84D] uppercase">
                      Día 3 · Recuperación & Retorno Renovada
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Despedida radiante y con total seguridad
                  </h3>
                  <p className="mt-3 text-sm text-white/70 sm:text-base">
                    No te vas sin la certeza de que tu evolución marcha con total normalidad y satisfacción.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      <strong>Mañana:</strong> Chequeo médico presencial para validar la evolución de tu procedimiento y entregarte indicaciones post-viaje.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      Mañana libre de compras o descanso junto a la piscina.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#F5A623]">✦</span>
                      <strong>Tarde:</strong> Check-out, traslado al aeropuerto y vuelo de regreso a casa luciendo fresca y renovada.
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <ImageSlot
                    src="/assets/images/mujer-renovada-cafe.jpg"
                    label="Foto Rostro Radiante / Relax"
                    hint="Foto sugerida: Mujer relajada disfrutando un café o sonriente lista con su equipaje"
                    badge="Día 3 · Nueva Tú"
                    aspect="aspect-[4/3]"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PASTOR: O (Offer Breakdown)
          "¿QUÉ INCLUYE EL PAQUETE?"
         ───────────────────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Todo Resuelto en una Sola Inversión
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">
                Qué está 100% incluido en tu Escapada
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '💉',
                title: 'Armonización de Alta Gama',
                desc: 'Productos certificados de prestigiosas marcas mundiales aplicados por médicos especialistas.',
              },
              {
                icon: '🏨',
                title: 'Hotel de Lujo (2 Noches)',
                desc: 'Alojamiento boutique seleccionado en zona colonial con máxima privacidad y confort.',
              },
              {
                icon: '🚗',
                title: 'Traslados Privados',
                desc: 'Transporte coordinado desde el aeropuerto, clínica, hotel y recorridos turísticos.',
              },
              {
                icon: '🏛️',
                title: 'Tour Cultural Guiado',
                desc: 'Recorrido histórico por la Ciudad Colonial con guía y spots fotográficos exclusivos.',
              },
              {
                icon: '🍽️',
                title: 'Gastronomía & Cóctel',
                desc: 'Cóctel de bienvenida, cenas seleccionadas de autor y desayunos incluidos.',
              },
              {
                icon: '🩺',
                title: 'Seguimiento Médico Post',
                desc: 'Evaluación de evolución médica previa al vuelo y contacto directo tras volver a casa.',
              },
              {
                icon: '👭',
                title: 'Grupo Íntimo (5–7 Pax)',
                desc: 'Ambiente cálido, cercano y sin multitudes para garantizar calma y amistad sincera.',
              },
              {
                icon: '💎',
                title: 'Concierge de Bienestar',
                desc: 'Un coordinador de Latitude Med Travel acompaña la logística en todo momento.',
              },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={`${idx * 50}ms`}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#F5A623]/40 hover:bg-white/[0.06]">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h4 className="mb-2 text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Banner de Escasez / Próxima Salida */}
          <FadeIn delay="150ms">
            <div className="mt-16 rounded-3xl border border-[#F5A623]/30 bg-gradient-to-r from-[#F5A623]/10 via-[#0B1830] to-[#F5A623]/10 p-8 text-center sm:p-12">
              <span className="inline-block rounded-full bg-[#F5A623] px-3.5 py-1 text-xs font-black text-[#071224] uppercase tracking-wider">
                Exclusividad Real
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Solo 5 a 7 cupos por grupo
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Mantenemos las salidas muy reducidas para asegurar que cada participante reciba atención médica
                milimétrica y una estancia inolvidable.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#F5A623] px-8 py-4 text-base font-bold text-[#071224] shadow-lg shadow-[#F5A623]/30 transition-all duration-300 hover:scale-105 hover:bg-[#FFB84D]"
                >
                  Postular para la Próxima Salida
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PASTOR: T (Transformation & Testimonies)
         ───────────────────────────────────────── */}
      <section className="relative border-t border-white/5 bg-[#0B1830]/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Experiencias Reales
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">
                La emoción de volver a sentirte radiante
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    'Estaba dudosa de viajar para hacerme retoques, pero la organización fue impecable. Me sentí como reina en el hotel y mi rostro luce fresco y supernatural.',
                  author: 'Mariana S.',
                  origin: 'Desde Miami, FL',
                  badge: 'Armonización + Tercio Medio',
                },
                {
                  quote:
                    'En Nueva York me cobraban el doble solo por los rellenos. Aquí viví una escapada mágica con mujeres maravillosas y regresé con la piel de hace 10 años.',
                  author: 'Clara V.',
                  origin: 'Desde New Jersey',
                  badge: 'Neuromodulador + Labios',
                },
                {
                  quote:
                    'Lo que más amé fue que no me sentí en un hospital frío. Fue como un retiro entre amigas, pero con médicos sumamente preparados y detallistas.',
                  author: 'Elena R.',
                  origin: 'Desde Orlando, FL',
                  badge: 'Full Face Rejuvenecimiento',
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm"
                >
                  <div>
                    <div className="mb-4 flex text-[#F5A623]">
                      {'★★★★★'}
                    </div>
                    <p className="text-sm italic leading-relaxed text-white/80">"{t.quote}"</p>
                  </div>
                  <div className="mt-6 border-t border-white/5 pt-4">
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-xs text-white/50">{t.origin}</div>
                    <div className="mt-2 inline-block rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-[#FFB84D]">
                      {t.badge}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PASTOR: R (Response / FAQ & Final CTA)
         ───────────────────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                Preguntas Frecuentes
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Resolvemos tus dudas al instante
              </h2>
            </div>

            <div className="space-y-2">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>

            {/* Tarjeta Final de Cierre */}
            <div className="mt-20 text-center">
              <div className="inline-block rounded-full bg-[#F5A623]/10 p-4 text-3xl text-[#F5A623]">
                ✨
              </div>
              <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                ¿Lista para verte y sentirte como mereces?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/70 sm:text-base">
                Habla directamente con nuestro equipo por WhatsApp para resolver tus dudas médicas, conocer las
                fechas tentativas y apartar tu cupo en el próximo grupo selecto.
              </p>
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-full bg-gradient-to-r from-[#F5A623] via-[#FFB84D] to-[#F5A623] px-10 py-4 text-base font-extrabold text-[#071224] shadow-2xl shadow-[#F5A623]/30 transition-all duration-300 hover:scale-105 sm:w-auto md:text-lg"
                >
                  Quiero Más Información por WhatsApp →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FOOTER
         ───────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#050D1A] px-6 py-10 text-center text-xs text-white/40">
        <div className="mx-auto max-w-6xl">
          <p className="font-medium text-white/60">
            Latitude Med Travel · Turismo Médico & Retiros de Bienestar Estético
          </p>
          <p className="mt-2">
            latitudemedtravel.com · Todos los procedimientos son realizados por personal médico debidamente certificado en República Dominicana.
          </p>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <FloatingCTA whatsappUrl={whatsappUrl} />
    </div>
  );
};

export default RetiroPage;
