export interface Doctor {
  id: string;
  alias: string;
  especialidad: string;
  fotoUrl: string;
}

export const doctores: Doctor[] = [
  {
    id: 'dr_pinto',
    alias: 'Dr. Pinto',
    especialidad: 'Especialista en Contorno Corporal',
    fotoUrl: '/2.jpg'
  }
];

export interface Servicio {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  precioServicio: number;
  incluye: string[];
  doctorIds: string[];
  heroImageUrl: string;
  cardImageUrl: string;
}

export const servicios: Servicio[] = [
  {
    id: 'liposuccion-hd',
    nombre: 'Liposucción HD',
    subtitulo: 'Define tu silueta y esculpe tu cuerpo.',
    descripcion: 'La Liposucción de Alta Definición (HD) es un procedimiento avanzado que no solo elimina la grasa, sino que también esculpe y define la musculatura subyacente para crear un aspecto atlético y tonificado. Es ideal para pacientes que ya están en buena forma pero luchan por eliminar depósitos de grasa rebeldes.',
    precioServicio: 1500,
    incluye: [
      'Coordinación de citas con el cirujano',
      'Traslados privados (aeropuerto-hotel-clínica)',
      'Alojamiento en hotel 5 estrellas',
      'Acompañamiento bilingüe personalizado',
      'Seguimiento post-operatorio en Miami'
    ],
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'diseno-de-sonrisa',
    nombre: 'Diseño de Sonrisa',
    subtitulo: 'La sonrisa perfecta, diseñada para ti.',
    descripcion: 'El diseño de sonrisa combina varios procedimientos de odontología cosmética para lograr una sonrisa armoniosa y estéticamente agradable. Se personaliza completamente para adaptarse a tus rasgos faciales y objetivos estéticos.',
    precioServicio: 1200,
    incluye: [
      'Consulta y diseño 3D de la sonrisa',
      'Blanqueamiento dental profesional',
      'Carillas de porcelana o composite',
      'Traslados y alojamiento premium',
      'Seguimiento y ajustes'
    ],
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/Smile_Design.png',
    cardImageUrl: '/Smile_Design.png'
  },
  {
    id: 'cirugia-facial',
    nombre: 'Cirugía Facial',
    subtitulo: 'Armoniza tus rasgos y rejuvenece tu rostro.',
    descripcion: 'Procedimientos como el lifting facial, la rinoplastia o la blefaroplastia, diseñados para mejorar la proporción y la juventud del rostro, realizados por cirujanos expertos en técnicas mínimamente invasivas.',
    precioServicio: 2500,
    incluye: [
      'Análisis facial y planificación quirúrgica',
      'Honorarios del equipo quirúrgico',
      'Estancia en clínica de primer nivel',
      'Cuidado post-operatorio 24/7',
      'Kit de recuperación y medicamentos'
    ],
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'medicina-estetica',
    nombre: 'Medicina Estética',
    subtitulo: 'Tratamientos no invasivos para una piel radiante.',
    descripcion: 'Desde toxina botulínica (Botox) y rellenos dérmicos hasta terapias láser avanzadas, nuestros tratamientos de medicina estética rejuvenecen tu piel sin necesidad de cirugía, ofreciendo resultados naturales y duraderos.',
    precioServicio: 800,
    incluye: [
      'Evaluación dermatológica completa',
      'Aplicación de tratamientos por especialistas',
      'Productos de cuidado de la piel de alta gama',
      'Sesiones de seguimiento',
      'Asesoría de mantenimiento'
    ],
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/cuidado-piel-frio.jpg',
    cardImageUrl: '/cuidado-piel-frio.jpg'
  },
  {
    id: 'implante-capilar',
    nombre: 'Implante Capilar',
    subtitulo: 'Recupera la densidad y la confianza.',
    descripcion: 'Utilizando las técnicas más avanzadas como FUE (Extracción de Unidad Folicular), restauramos la densidad del cabello de forma natural y con resultados permanentes, tanto para hombres como para mujeres.',
    precioServicio: 3500,
    incluye: [
      'Consulta y diagnóstico capilar',
      'Procedimiento de trasplante capilar',
      'Tratamientos de bioestimulación (PRP)',
      'Kit de cuidado post-implante',
      'Revisiones de seguimiento durante 1 año'
    ],
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/evolucion-del-trasplante-capilar.jpg',
    cardImageUrl: '/evolucion-del-trasplante-capilar.jpg'
  }
];
