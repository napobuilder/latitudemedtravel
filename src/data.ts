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
    subtitulo: 'Cirugía de nariz para mejorar apariencia y función, logrando armonía facial.',
    descripcion: 'La rinoplastia es una cirugía de la nariz que busca mejorar la apariencia y función de las estructuras nasales, logrando armonía en el rostro. Puede corregir defectos primarios (con los que se nace) o secundarios (adquiridos por traumas o cirugías previas). El procedimiento incluye diferentes técnicas: rinoplastia cerrada (sin incisiones externas, ideal para defectos menores), rinoplastia abierta (con incisiones externas para mayor visibilidad, indicada para cirugías de revisión), septoplastia (corrige problemas del tabique nasal) y turbinoplastia (mejora la función respiratoria). Se realiza generalmente en pacientes con inconformidad estética o problemas funcionales como giba nasal, asimetría, inconformidad en la punta, alas nasales anchas o dificultades respiratorias. El procedimiento dura de 2 a 4 horas, se realiza con anestesia general (o local con sedación en casos específicos) y los resultados son permanentes. El paciente puede volver a sus actividades diarias después de una semana, aunque el resultado definitivo se aprecia después de varias semanas cuando termina el proceso inflamatorio.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/RINO.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/RINO.jpg'
  },
  {
    id: 'frontoplastia',
    nombre: 'Frontoplastia',
    subtitulo: 'Rejuvenecimiento del tercio superior del rostro mediante tensado de la piel.',
    descripcion: 'La frontoplastia es un procedimiento diseñado para mejorar las líneas de expresión a través del tensado de la piel, generando un efecto de rejuvenecimiento facial en el tercio superior de la cara. Este área es donde se evidencian los primeros signos de envejecimiento con mayor frecuencia, causados por fotoenvejecimiento, exposición al sol, gravedad y factores hereditarios. El procedimiento incluye dos técnicas principales: frontoplastia clásica (con incisión en el cuero cabelludo para tracción de tejidos blandos) y frontoplastia endoscópica (con visión directa mediante endoscopio y pequeños cortes en los músculos que generan las líneas de expresión). Los candidatos ideales son pacientes entre 40 a 60 años que buscan mejorar su apariencia y autoestima. Los resultados se verán a largo plazo con una piel sin líneas de expresión y más tensa.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/FRONTO.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/FRONTO.jpg'
  },
  {
    id: 'blefaroplastia',
    nombre: 'Blefaroplastia',
    subtitulo: 'Cirugía de párpados para remover exceso de piel y bolsas grasas, mejorando el aspecto facial.',
    descripcion: 'La blefaroplastia se puede realizar en los párpados superiores e inferiores para lograr un rostro de aspecto más juvenil y fresco. Este procedimiento consiste en remover el exceso de piel y bolsas grasas, mejorando el aspecto del rostro alterado por el desplazamiento de la grasa hacia la parte inferior del párpado y el descenso dérmico. Existen dos técnicas principales: aproximación tradicional (con incisión oculta en el pliegue natural del párpado superior y pequeño corte en el párpado inferior) y aproximación transconjuntival (para remover tejido graso del párpado inferior a través de una incisión en la cara interna). Este procedimiento es ideal para pacientes adultos que manifiestan peso en los párpados, bolsas en párpados inferiores, líneas de expresión marcadas e inconformidad estética. El procedimiento puede tomar de 1 a 3 horas, se utiliza anestesia general, y los resultados parciales se verán en algunas semanas cuando la desinflamación alcance un 90%, mientras que los resultados finales podrían tardar entre 3 a 6 meses.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://modelbell.es/wp-content/uploads/2025/09/blefaroplastia-superior-e-inferior.569Z-768x419.png',
    cardImageUrl: 'https://modelbell.es/wp-content/uploads/2025/09/blefaroplastia-superior-e-inferior.569Z-768x419.png'
  },
  {
    id: 'ritidoplastia',
    nombre: 'Ritidoplastia',
    subtitulo: 'Retiro del exceso de piel facial para tensar la piel y mejorar los ángulos faciales.',
    descripcion: 'Mediante este procedimiento se realiza el retiro del exceso de piel en la región facial logrando tensar la piel, mejorando los ángulos faciales y atenuando las líneas de expresión generadas por el envejecimiento. Este procedimiento no detiene el envejecimiento ni los cambios generados por la exposición a factores ambientales. Se realizan incisiones en cuero cabelludo y en el reborde del pabellón auricular para disimular el sitio de la incisión, mejorando los ángulos faciales reposicionando los tejidos, tensando la piel y retirando el exceso dérmico. Está dirigida para hombres y mujeres, y puede ayudar notablemente a personas jóvenes que por razones genéticas presentan envejecimiento precoz. La cirugía se realiza bajo anestesia general y el paciente podrá reintegrarse a sus actividades laborales en un plazo aproximado de 7 días. Los resultados son a largo plazo siempre y cuando se tengan los cuidados alimenticios, de protección solar constante y de una rutina de ejercicios.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RITIDO2.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RITIDO2.jpg'
  },
  {
    id: 'cervicoplastia',
    nombre: 'Cervicoplastia',
    subtitulo: 'Lifting cérvico facial para corregir piel flácida bajo la mandíbula y mejorar el contorno mandibular.',
    descripcion: 'La cervicoplastia, también conocida como lifting cérvico facial, permite corregir la piel flácida que se ha acumulado bajo la mandíbula, tensando la piel y los músculos subyacentes para levantar el cuello, así como mejorar y afinar el contorno mandibular. Se realiza a menudo en conjunto con un estiramiento facial, pero también se puede realizar como un procedimiento independiente. La flacidez del cuello se presenta generalmente debido a la edad, puede ser un resultado de la pérdida significativa de peso o por motivos hereditarios. Un cuello esbelto, delgado con una línea de la mandíbula definida es un signo de juventud y vitalidad. Con el pasar de los años estas características se van desvaneciendo, se acumula grasa en el cuello dando esa papada y se produce descolgamiento de los músculos. Esta cirugía de rejuvenecimiento del cuello puede recuperar el brillo y la apariencia juvenil del rostro. Los resultados finales aparecerán en unas cuantas semanas cuando la inflamación haya bajado al menos un 90%, pero los resultados finales tomarán al menos de 2 a 6 meses.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/cuello_recorte.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/cuello_recorte.jpg'
  },
  {
    id: 'bichectomia',
    nombre: 'Bichectomía',
    subtitulo: 'Extirpación de bolsas grasas en las mejillas para afinar los rasgos faciales.',
    descripcion: 'La bichectomía es un procedimiento quirúrgico en el cual se realiza la extirpación de las bolsas grasas localizadas en el borde inferior de las mejillas. Estas bolsas grasas hacen que las mejillas se vean más prominentes. La técnica más usada es el abordaje interno o intraoral, que consiste en realizar una incisión en la mucosa oral en la parte superior a la altura del segundo premolar. Requiere anestesia local y en muy pocos casos requiere colocación de puntos. Los candidatos potenciales suelen ser personas de rostro redondo o que desean resaltar los pómulos para afinar los rasgos faciales, alargar la cara y mejorar la armonía facial. Es frecuente en personas de contextura fina que no logran adelgazar su rostro a pesar del ejercicio, siendo esto causado a veces por predisposición hereditaria. Este procedimiento disminuye el aspecto redondo y ancho del rostro brindando una apariencia más delgada de modo natural. El tiempo de recuperación es corto, de 2 a 4 días, y una de las ventajas es que no hay cicatrices visibles.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/bichectomia2.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/bichectomia2.jpg'
  },
  {
    id: 'mentoplastia',
    nombre: 'Mentoplastia',
    subtitulo: 'Cirugía del mentón para mejorar el equilibrio estético facial y la armonía del rostro.',
    descripcion: 'El mentón hace parte del equilibrio estético facial que le da armonía al rostro. En los casos donde hay una disminución muy marcada del mentón, se debe recurrir a la mentoplastia. Este procedimiento puede darse en combinación con otras cirugías, como la rinoplastia, liposucción de papada, ritidoplastia y blefaroplastia entre otras, con el fin de darle una mejor simetría a los rasgos faciales. Existen dos técnicas principales: implante de mentón (con incisión en el pliegue de la mucosa oral, colocando un implante de material sintético que no genera cicatrices exteriores) y lipoinyección del mentón (mediante aspirado de tejido adiposo de un área corporal e inyección en el mentón, dependiente del aumento o disminución de peso). El candidato potencial es un paciente que haya finalizado su etapa de crecimiento, que tenga algún tipo de malformaciones del mentón, inconformidad estética, alguna alteración secundaria o trauma. Esta cirugía tiene una duración de 1 hora aproximadamente, se realiza con anestesia local con sedación, es un procedimiento ambulatorio, indoloro y seguro. Los resultados serán visibles de manera inmediata, pero a medida que la inflamación disminuya se verán mejor.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/menton_2.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/menton_2.jpg'
  },
  {
    id: 'otoplastia',
    nombre: 'Otoplastia',
    subtitulo: 'Remodelación del pabellón auricular para mejorar forma, posición o proporción de las orejas.',
    descripcion: 'La otoplastia es la remodelación del pabellón auricular. Puede mejorar la forma, posición o proporción de las orejas los cuales son presentados por defectos estructurales, hereditarios o traumas severos, el procedimiento permite generar beneficios a la apariencia y autoestima de la persona. Es importante aclarar que esta cirugía no corrige problemas auditivos o de las estructuras relacionadas con el oído medio e interno. Existen dos tipos principales: corrección de orejas en pantalla (para disminuir la proyección y el ángulo del pabellón auricular, retirando cartílago a nivel de la concha auricular) y microtia o anotia (intervención que inicia con la extracción de cartílago costal del paciente para generar un pabellón auricular parecido al normal). Esta es una de las cirugías estéticas que se pueden realizar desde la infancia, cuando el desarrollo esté completo alrededor de los 6-8 años de edad. Sin embargo, un alto porcentaje de adultos acuden para realizarse este tipo de intervenciones. Los resultados para este tipo de intervención son inmediatos y serán visibles una vez se retiren los apósitos y la inflamación haya cedido en unas semanas. Esta cirugía se puede complementar con otros procedimientos como la blefaroplastia o el levantamiento de cola de ceja.',
    precioConsulta: 55,
    categoria: 'facial',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/otoplastia2.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/otoplastia2.jpg'
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
