export interface Doctor {
  id: string;
  alias: string;
  especialidad: string;
  fotoUrl: string;
  biografia?: string;
  credenciales?: string[];
}

export const doctores: Doctor[] = [
  {
    id: 'dr_pinto',
    alias: 'Dr. Pinto',
    especialidad: 'Especialista en Contorno Corporal',
    fotoUrl: '/2.jpg',
    biografia: 'Cirujano con formación universitaria en Colombia y entrenamiento avanzado en Estados Unidos, especializado en técnicas de marcación y definición muscular de alta precisión. Líder de opinión que participa activamente como conferencista en congresos científicos, garantizando acceso a los últimos avances tecnológicos. Director de una clínica de primer nivel certificada por las federaciones médicas más importantes de Iberoamérica.',
    credenciales: [
      'Formación universitaria en Colombia',
      'Entrenamiento avanzado en Estados Unidos',
      'Especialista en técnicas de marcación y definición muscular',
      'Conferencista en congresos científicos',
      'Director de clínica certificada por federaciones médicas de Iberoamérica'
    ]
  }
];

export interface Servicio {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  precioConsulta: number; // Precio fijo de consulta
  categoria: 'facial' | 'corporal';
  doctorIds: string[];
  heroImageUrl: string;
  cardImageUrl: string;
}

export const servicios: Servicio[] = [
  // Procedimientos Faciales
  {
    id: 'rinoplastia',
    nombre: 'Rinoplastia',
    subtitulo: 'Cirugía de nariz (funcional o estética).',
    descripcion: 'La rinoplastia es un procedimiento quirúrgico que modifica la forma y estructura de la nariz para mejorar su apariencia estética o corregir problemas funcionales. Puede incluir la reducción o aumento del tamaño, el ajuste de la punta nasal, la corrección de desviaciones del tabique, o la mejora de la respiración.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'frontoplastia',
    nombre: 'Frontoplastia',
    subtitulo: 'Rejuvenecimiento de la frente (lifting).',
    descripcion: 'La frontoplastia es un procedimiento de lifting de la frente que elimina arrugas horizontales, eleva las cejas caídas y rejuvenece la apariencia del tercio superior del rostro. Se realiza mediante técnicas mínimamente invasivas que proporcionan resultados naturales y duraderos.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'blefaroplastia',
    nombre: 'Blefaroplastia',
    subtitulo: 'Cirugía de párpados (para eliminar bolsas o exceso de piel).',
    descripcion: 'La blefaroplastia corrige el exceso de piel, las bolsas y la flacidez en los párpados superiores e inferiores. Este procedimiento rejuvenece la mirada, elimina la apariencia de cansancio y mejora significativamente la estética del área periocular.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'ritidoplastia',
    nombre: 'Ritidoplastia',
    subtitulo: 'Estiramiento facial (lifting) para tratar arrugas y flacidez.',
    descripcion: 'La ritidoplastia, también conocida como lifting facial, es un procedimiento quirúrgico que elimina el exceso de piel y tensa los músculos faciales para reducir arrugas, líneas de expresión y flacidez. Proporciona un aspecto más joven y rejuvenecido del rostro completo.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'cervicoplastia',
    nombre: 'Cervicoplastia',
    subtitulo: 'Cirugía del cuello (papada y flacidez).',
    descripcion: 'La cervicoplastia es un procedimiento que elimina el exceso de piel y grasa del cuello, corrigiendo la papada y la flacidez. Este tratamiento rejuvenece el perfil del cuello y la mandíbula, proporcionando una apariencia más definida y juvenil.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'bichectomia',
    nombre: 'Bichectomía',
    subtitulo: 'Extracción de las bolsas de Bichat para afinar las mejillas.',
    descripcion: 'La bichectomía es un procedimiento quirúrgico que consiste en la extracción de las bolsas de Bichat (grasa facial) para afinar y definir el contorno facial. Este tratamiento proporciona un aspecto más esculpido y definido de las mejillas, creando una silueta facial más armoniosa.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'mentoplastia',
    nombre: 'Mentoplastia',
    subtitulo: 'Cirugía del mentón (aumento o corrección).',
    descripcion: 'La mentoplastia es un procedimiento que modifica la forma y tamaño del mentón mediante aumento con implantes o reducción ósea. Este tratamiento mejora el perfil facial, equilibra las proporciones y puede corregir asimetrías del mentón.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  {
    id: 'otoplastia',
    nombre: 'Otoplastia',
    subtitulo: 'Cirugía de orejas (corrección de orejas prominentes).',
    descripcion: 'La otoplastia es un procedimiento quirúrgico que corrige la forma, posición o tamaño de las orejas. Comúnmente se realiza para corregir orejas prominentes o despegadas, mejorando la armonía facial y aumentando la confianza del paciente.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/18-blefaroplastia.jpg',
    cardImageUrl: '/18-blefaroplastia.jpg'
  },
  // Procedimientos Corporales
  {
    id: 'mamoplastia-aumento',
    nombre: 'Mamoplastia de Aumento',
    subtitulo: 'Aumento de senos con implantes.',
    descripcion: 'La mamoplastia de aumento es un procedimiento que aumenta el tamaño y mejora la forma de los senos mediante la colocación de implantes mamarios. Este tratamiento puede mejorar la proporción corporal, restaurar el volumen perdido y aumentar la confianza del paciente.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'mamoplastia-reduccion',
    nombre: 'Mamoplastia de Reducción',
    subtitulo: 'Reducción del tamaño del busto.',
    descripcion: 'La mamoplastia de reducción es un procedimiento que reduce el tamaño de los senos eliminando exceso de tejido mamario, grasa y piel. Este tratamiento alivia molestias físicas, mejora la proporción corporal y proporciona un aspecto más equilibrado.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'liposuccion-lipoescultura',
    nombre: 'Liposucción / Lipoescultura',
    subtitulo: 'Remodelación del contorno corporal y extracción de grasa.',
    descripcion: 'La liposucción y lipoescultura son procedimientos que eliminan depósitos de grasa localizados y remodelan el contorno corporal. La lipoescultura de alta definición (HD) además define y esculpe la musculatura subyacente, creando un aspecto atlético y tonificado.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'lipectomia-abdominoplastia',
    nombre: 'Lipectomía (Abdominoplastia)',
    subtitulo: 'Eliminación de exceso de piel y grasa abdominal.',
    descripcion: 'La abdominoplastia es un procedimiento que elimina el exceso de piel y grasa del abdomen, tensa los músculos abdominales y mejora el contorno del vientre. Este tratamiento es ideal para pacientes que han perdido peso significativo o después del embarazo.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'gluteoplastia',
    nombre: 'Gluteoplastia',
    subtitulo: 'Aumento o remodelación de glúteos.',
    descripcion: 'La gluteoplastia es un procedimiento que aumenta o remodela los glúteos mediante implantes o transferencia de grasa (BBL - Brazilian Butt Lift). Este tratamiento mejora la forma, volumen y proyección de los glúteos, creando una silueta más armoniosa y atractiva.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'marcacion-abdomen',
    nombre: 'Marcación de Abdomen',
    subtitulo: 'Definición de los músculos abdominales (frecuentemente parte de la lipoescultura de alta definición).',
    descripcion: 'La marcación de abdomen es un procedimiento avanzado que define y resalta los músculos abdominales mediante técnicas de lipoescultura de alta definición. Este tratamiento crea un aspecto de "six-pack" o abdomen definido, ideal para pacientes que buscan un resultado atlético y esculpido.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'retiro-biopolimeros',
    nombre: 'Retiro de Biopolímeros',
    subtitulo: 'Extracción quirúrgica de sustancias inyectables nocivas.',
    descripcion: 'El retiro de biopolímeros es un procedimiento quirúrgico especializado que elimina sustancias inyectables nocivas o no autorizadas del cuerpo. Este tratamiento es crucial para la salud del paciente y requiere experiencia especializada en técnicas de extracción segura.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
  {
    id: 'rejuvenecimiento-vaginal',
    nombre: 'Rejuvenecimiento Vaginal',
    subtitulo: 'Procedimientos estéticos para la zona íntima.',
    descripcion: 'El rejuvenecimiento vaginal incluye diversos procedimientos estéticos y funcionales para la zona íntima, como labioplastia, vaginoplastia y tratamientos de rejuvenecimiento. Estos procedimientos mejoran la apariencia, función y confianza del paciente.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg',
    cardImageUrl: '/liposuccion-HD-o-de-Alta-Definicion.jpg'
  },
];
