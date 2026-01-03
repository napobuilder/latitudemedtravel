export interface Servicio {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  precioConsulta: number;
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
    subtitulo: 'Aumento del volumen mamario con implantes para lograr forma simétrica y armónica.',
    descripcion: 'La mamoplastia de aumento es una cirugía que requiere la utilización de implantes que se colocan bajo el tejido glandular y muscular. La finalidad es aumentar el volumen mamario, darles una forma simétrica y armónica a las mamas con fines estéticos, ya sea por razones de disminución en su desarrollo, cambios después de la lactancia materna o por una pérdida masiva de peso. Entre los diferentes tipos de implantes se encuentran: de solución salina (se introducen sin volumen y se llenan con solución salina, permitiendo controlar exactamente el volumen final) y de silicona (completamente sellados, con volumen fijo, garantizando más firmeza al seno, disponibles en diferentes formas: redondos con proyección baja, media o alta, o anatómicos en forma de lágrima). Las cirugías se clasifican según el tipo de incisiones: incisión axilar o transaxilar (en la parte media de la axila) e incisión areolar inferior (alrededor de la parte inferior de la areola, la más utilizada). El aumento mamario estiliza y da características especiales a la silueta femenina, logrando una figura armónica. Los resultados son de larga duración, pero no permanentes, ya que se puede tomar la decisión de retirarse los implantes en el momento que se desee.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/MAMOAUMENTO.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/MAMOAUMENTO.jpg'
  },
  {
    id: 'mamoplastia-reduccion',
    nombre: 'Mamoplastia de Reducción',
    subtitulo: 'Reducción del volumen mamario y elevación de senos (pexia mamaria).',
    descripcion: 'Factores como la lactancia, pérdida de peso y la gravedad, hacen que los senos alteren sus dimensiones y su ubicación. Es normal que la mamoplastia de reducción vaya acompañada de una pexia mamaria, que es el nombre técnico que se le da a la elevación de senos. Esta cirugía también permite reducir el tamaño de la areola para dar un mejor efecto visual a la mama. Para esta cirugía se pueden usar múltiples técnicas quirúrgicas cuya elección dependerá de la calidad de la piel, el volumen del seno, el tamaño y posición de la areola: técnica areolar (cuando la caída es muy leve, requiere subir de 2 a 3 cm), técnica vertical (cuando la caída y el peso del seno es mayor) y técnica T invertida (para pacientes con volumen considerable, más invasiva pero logra disminuir el volumen y dar un realce natural del busto). Está dirigida a las mujeres que quieren reducir el volumen de su busto, ya sea porque les genera molestias en la espalda, después de una pérdida de peso considerable, luego de la lactancia o todas aquellas que no están conformes con su apariencia física. El tiempo estimado para este procedimiento es de 2 a 4 horas, con anestesia general. Los resultados son inmediatamente visibles y de larga duración, el nuevo tamaño ayudará a aliviar los problemas de espalda y dolor.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/reduccion.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/reduccion.jpg'
  },
  {
    id: 'liposuccion-lipoescultura',
    nombre: 'Liposucción / Lipoescultura',
    subtitulo: 'Eliminación de grasa corporal localizada para moldear la silueta del paciente.',
    descripcion: 'Normalmente la liposucción se lleva a cabo en el abdomen, caderas y en los muslos, aunque también puede realizarse en otras zonas del cuerpo como brazos, rodillas, tobillos, papada, glúteos o rostro. El objetivo fundamental es retirar la grasa corporal con el fin de eliminar la adiposidad localizada, celulitis, moldear la silueta del paciente y en menor medida reducir el peso corporal. Este procedimiento no es un tratamiento para el control de la obesidad ni el sobrepeso. Existen diferentes técnicas: convencional (aplicación de líquidos con vasoconstrictor directamente en la grasa), micro aire PAL (Power Assisted Liposuction, con movimientos anteroposteriores en la cánula), ultrasónica o Vaser (ondas ultrasónicas que rompen y emulsifican la grasa, útil en zonas con abundante fibrosis) y láser (lipolisis láser, que destruye las membranas de los adipocitos). Esta cirugía está diseñada para personas que deseen eliminar tejido graso, candidatos que han tratado de quitar esos gorditos con ejercicio y dieta sin éxito, o que quieren moldear su cuerpo y poseen un peso normal con piel elástica y firme. Se recomienda contar con 5 días para poder reintegrarse a sus actividades laborales y personales.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/lipo.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/lipo.jpg'
  },
  {
    id: 'lipectomia-abdominoplastia',
    nombre: 'Lipectomía (Abdominoplastia)',
    subtitulo: 'Eliminación de exceso de piel y grasa abdominal con refuerzo de músculos abdominales.',
    descripcion: 'Esta técnica quirúrgica consiste en realizar una incisión por encima del pubis a la altura del pliegue abdominal inferior, donde se levanta y se retira el exceso de piel y de grasa. Se refuerzan los músculos del abdomen permitiendo una apariencia más firme. Este procedimiento permite retirar tejido indeseado en región abdominal el cual se obtuvo ya sea por pérdida de peso, a causa del embarazo o condiciones hereditarias entre otras. Si usted presenta flacidez en la piel, estrías bajo el ombligo y abdomen prominente, usted es candidato para practicarse esta cirugía. Por lo general, este procedimiento es practicado a pacientes que después de haber estado embarazadas quedan con estrías, flacidez de piel y debilidad abdominal marcada y a personas que han tenido pérdidas considerables de peso, en su mayoría luego de una cirugía bariátrica. Esta cirugía puede durar hasta 3 horas y podrá regresar a sus actividades diarias en un lapso de 2 semanas. Se espera obtener con este procedimiento una cintura definida, mejorar el aspecto del ombligo, retirar casi por completo las estrías localizadas en la parte inferior del abdomen y tensar la piel en la región abdominal. Los resultados finales y definitivos se verán a los 12 meses de este procedimiento.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/LIPECTOMIA.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/LIPECTOMIA.jpg'
  },
  {
    id: 'gluteoplastia',
    nombre: 'Gluteoplastia',
    subtitulo: 'Aumento y moldeamiento de la forma de los glúteos mediante implantes o lipoinyección.',
    descripcion: 'La elevación de los glúteos puede realizarse mediante la colocación de implantes, dejando únicamente una cicatriz a nivel del pliegue interglúteo o con lipoinyección glútea la cual es realizada por las incisiones de la liposucción. En este procedimiento se busca aumentar y moldear la forma de los glúteos o nalgas. Existen dos tipos principales: lipoinyección glútea (se aprovecha la grasa extraída de la liposucción para realizar un aumento de volumen en los glúteos, transfiriendo aproximadamente 300-350cc de grasa en cada glúteo, tiene la ventaja que no habrá rechazo por parte del organismo y los resultados son más naturales) e implantes de silicona (similares a los implantes de senos pero con características especiales, más grandes y aplanados, semejando la forma de los glúteos, utilizados en personas con poco tejido adiposo y músculos de los glúteos poco desarrollados). La gluteoplastia es indicada para pacientes que desean mejorar el volumen y proyección de la región glútea, o que encuentran cierta desproporción en la forma de los glúteos. Estos procedimientos pueden tener una duración hasta de 2 horas y pueden ser combinados con una lipoescultura en las áreas circundantes para definir mejor la curvatura de los glúteos. Los resultados parciales pueden verse en cuestión de semanas cuando los morados y la inflamación disminuya en un 90%.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/GLUTEO.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/GLUTEO.jpg'
  },
  {
    id: 'marcacion-abdomen',
    nombre: 'Marcación de Abdomen',
    subtitulo: 'Resaltar las marcas laterales y centrales del abdomen para lograr abdominales marcados.',
    descripcion: 'Lucir unos abdominales marcados es el sueño de muchos y este es una intervención que ha logrado que deje de serlo. Este procedimiento permite resaltar las marcas laterales y centrales del abdomen. No es una solución de pérdida de peso. Se suele utilizar en personas con un índice de masa corporal normal y que su dieta y rutina de ejercicio no le han permitido una marcación abdominal. Este tipo de procedimiento está dirigido a mujeres y hombres que quieren lucir un abdomen definido y marcado y que las rutinas de ejercicios y un modo de vida saludable no han sido suficientes para lograrlo. Este procedimiento no es aconsejado realizarlo en pacientes con problemas de sobrepeso y obesidad. La combinación de la lipoescultura en otras áreas le ayudará a conseguir unos muy buenos resultados que serán perceptibles de manera inmediata, pero a medida que baje la inflamación se notarán aún más en unas cuantas semanas. No es un procedimiento permanente y el paciente debe aceptar una rutina de ejercicios y dieta que ayudará a que los resultados sean duraderos.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/marcacion.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/marcacion.jpg'
  },
  {
    id: 'retiro-biopolimeros',
    nombre: 'Retiro de Biopolímeros',
    subtitulo: 'Extracción quirúrgica de sustancias inyectables nocivas que ponen en riesgo la salud.',
    descripcion: 'Los Biopolímeros o Biogel son dosis de silicona líquida que se inyectan en región facial o corporal. En algunos casos a estas sustancias se le añaden otros materiales que al aplicarlos, el cuerpo los encapsula produciendo granulomas o abultamientos que producen reacciones inflamatorias e inmunológicas severas, haciendo rechazo al producto, lo cual ponen en riesgo la integridad y la vida de los pacientes. Estos solo pueden ser extraídos mediante cirugía y no hay una plena garantía que la extracción sea del 100%. Los Biopolímeros están prohibidos a nivel mundial por los distintos problemas que se han presentado y al alto número de víctimas que ha dejado. El tipo de cirugía depende primordialmente de varios factores como la cantidad de sustancia aplicada, la zona, el tipo de material implantado, la reacción que el cuerpo haya producido y el tiempo que haya transcurrido entre otros. En casos como sustancias en la cara, labios y pómulos, es recomendable realizar la extracción de forma directa mediante una o varias cirugías dependiendo del caso. Lo importante en este tipo de cirugías es la extracción de la mayor cantidad de material de relleno. Al extraer el tejido comprometido y al sacar las sustancias invasivas, el paciente ya no presentará más inflamación ni dolor en la zona.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RETIROBIOPOLIMEROS.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RETIROBIOPOLIMEROS.jpg'
  },
  {
    id: 'rejuvenecimiento-vaginal',
    nombre: 'Rejuvenecimiento Vaginal',
    subtitulo: 'Procedimientos estéticos y funcionales para mejorar la apariencia y sensibilidad de los genitales.',
    descripcion: 'Lo que busca este procedimiento es darle un aspecto natural a los genitales y corregir esas pequeñas imperfecciones que se han vuelto incómodas para la paciente. Así mismo permite mejorar la sensibilidad a las mujeres que desean una vida sexual plena. El ensanchamiento de las paredes del introito vaginal no permite una fricción adecuada, disminuyendo el placer en el acto sexual. Con esta intervención se logra mejorar características propias de la juventud, la recreación del himen y la reducción del monte de Venus entre otras. Se pueden corregir condiciones como la hipertrofia de labios menores, mayores y el subdesarrollo de los mismos. También se puede realizar cirugía de clítoris y estrechamiento vaginal. La vagina queda reducida a solo 3 cm. de diámetro, medida standard establecida por los cirujanos, permitiendo aumentar el placer para ambas partes. Este procedimiento logra rejuvenecer y devolver el aspecto estético de la vagina ocasionado por el parto, herencia y pérdida dramática de peso. Está orientado a mejorar la calidad de vida de las pacientes, permitiendo tomar decisiones, mejorando su autoestima, aumentando la confianza y fortaleciendo el apetito sexual.',
    precioConsulta: 55,
    categoria: 'corporal',
    doctorIds: ['dr_pinto'],
    heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/REJUVAGINAL.jpg',
    cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/REJUVAGINAL.jpg'
  },
];
