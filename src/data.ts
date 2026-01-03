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
    especialidad: 'Cirujano Plástico, Estético, Maxilofacial y de la Mano',
    fotoUrl: '/2.jpg',
    biografia: 'Médico cirujano egresado de la Universidad del Rosario en Bogotá, Colombia, con más de 15 años de experiencia. Especializado en cirugía plástica, estética, maxilofacial y de la mano, con postgrado realizado en Bogotá. Especialista certificado en marcación del músculo y con formación avanzada en estética facial y corporal obtenida mediante fellow en Estados Unidos. Miembro activo de la Sociedad Colombiana de Cirugía Plástica Estética Maxilofacial y de la Mano, y de la FILACP (Federación Iberoamericana de Cirugía Plástica y Reconstructiva). Líder de opinión que participa activamente como conferencista en congresos científicos, garantizando acceso a los últimos avances tecnológicos en cirugía estética.',
    credenciales: [
      'Médico Cirujano - Universidad del Rosario, Bogotá - Colombia',
      'Más de 15 años de experiencia en cirugía plástica y estética',
      'Postgrado en Cirugía Plástica, Estética, Maxilofacial y de la Mano',
      'Especialista en Marcación del Músculo',
      'Fellow en Estética Facial y Corporal - Estados Unidos',
      'Miembro de la Sociedad Colombiana de Cirugía Plástica Estética Maxilofacial y de la Mano',
      'Miembro de la FILACP - Federación Iberoamericana de Cirugía Plástica y Reconstructiva',
      'Conferencista en congresos científicos internacionales'
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

// Traducciones de servicios en inglés
const servicioRinoplastiaEn: Servicio = {
  id: 'rinoplastia',
  nombre: 'Rhinoplasty',
  subtitulo: 'Nose surgery to improve appearance and function, achieving facial harmony.',
  descripcion: 'Rhinoplasty is a nose surgery that seeks to improve the appearance and function of nasal structures, achieving harmony in the face. It can correct primary defects (present at birth) or secondary defects (acquired through trauma or previous surgeries). The procedure includes different techniques: closed rhinoplasty (without external incisions, ideal for minor defects), open rhinoplasty (with external incisions for better visibility, indicated for revision surgeries), septoplasty (corrects nasal septum problems) and turbinoplasty (improves respiratory function). It is generally performed on patients with aesthetic concerns or functional problems such as nasal hump, asymmetry, tip concerns, wide nasal wings, or breathing difficulties. The procedure lasts 2 to 4 hours, is performed under general anesthesia (or local with sedation in specific cases) and results are permanent. The patient can return to daily activities after one week, although the definitive result is appreciated after several weeks when the inflammatory process ends.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/RINO.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/RINO.jpg'
};

const servicioFrontoplastiaEn: Servicio = {
  id: 'frontoplastia',
  nombre: 'Forehead Lift',
  subtitulo: 'Rejuvenation of the upper third of the face through skin tightening.',
  descripcion: 'Forehead lift is a procedure designed to improve expression lines through skin tightening, generating a facial rejuvenation effect in the upper third of the face. This area is where the first signs of aging are most frequently evident, caused by photoaging, sun exposure, gravity, and hereditary factors. The procedure includes two main techniques: classic forehead lift (with incision in the scalp for soft tissue traction) and endoscopic forehead lift (with direct vision through an endoscope and small cuts in the muscles that generate expression lines). Ideal candidates are patients between 40 to 60 years old who seek to improve their appearance and self-esteem. Results will be seen long-term with skin without expression lines and tighter.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/FRONTO.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto-eng/images/FRONTO.jpg'
};

const servicioBlefaroplastiaEn: Servicio = {
  id: 'blefaroplastia',
  nombre: 'Blepharoplasty',
  subtitulo: 'Eyelid surgery to remove excess skin and fat bags, improving facial appearance.',
  descripcion: 'Blepharoplasty can be performed on upper and lower eyelids to achieve a more youthful and fresh-looking face. This procedure consists of removing excess skin and fat bags, improving the appearance of the face altered by fat displacement to the lower part of the eyelid and dermal descent. There are two main techniques: traditional approach (with hidden incision in the natural fold of the upper eyelid and small cut in the lower eyelid) and transconjunctival approach (to remove fatty tissue from the lower eyelid through an incision on the inner side). This procedure is ideal for adult patients who manifest heaviness in the eyelids, bags in lower eyelids, marked expression lines, and aesthetic concerns. The procedure can take 1 to 3 hours, general anesthesia is used, and partial results will be seen in a few weeks when deflation reaches 90%, while final results could take 3 to 6 months.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://modelbell.es/wp-content/uploads/2025/09/blefaroplastia-superior-e-inferior.569Z-768x419.png',
  cardImageUrl: 'https://modelbell.es/wp-content/uploads/2025/09/blefaroplastia-superior-e-inferior.569Z-768x419.png'
};

const servicioRitidoplastiaEn: Servicio = {
  id: 'ritidoplastia',
  nombre: 'Facelift',
  subtitulo: 'Removal of excess facial skin to tighten the skin and improve facial angles.',
  descripcion: 'Through this procedure, excess skin in the facial region is removed, achieving skin tightening, improving facial angles, and attenuating expression lines generated by aging. This procedure does not stop aging or changes generated by exposure to environmental factors. Incisions are made in the scalp and on the edge of the auricular pavilion to disguise the incision site, improving facial angles by repositioning tissues, tightening the skin, and removing excess dermis. It is aimed at men and women, and can notably help young people who, for genetic reasons, present premature aging. The surgery is performed under general anesthesia and the patient can return to work activities in approximately 7 days. Results are long-term as long as dietary care, constant sun protection, and an exercise routine are maintained.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RITIDO2.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RITIDO2.jpg'
};

const servicioCervicoplastiaEn: Servicio = {
  id: 'cervicoplastia',
  nombre: 'Neck Lift',
  subtitulo: 'Cervicofacial lift to correct sagging skin under the jaw and improve mandibular contour.',
  descripcion: 'Neck lift, also known as cervicofacial lift, allows correcting sagging skin that has accumulated under the jaw, tightening the skin and underlying muscles to lift the neck, as well as improving and refining the mandibular contour. It is often performed in conjunction with a facial lift, but can also be performed as an independent procedure. Neck sagging generally occurs due to age, can be a result of significant weight loss, or hereditary reasons. A slim, thin neck with a defined jawline is a sign of youth and vitality. Over the years, these characteristics fade, fat accumulates in the neck giving that double chin, and muscle sagging occurs. This neck rejuvenation surgery can restore the brightness and youthful appearance of the face. Final results will appear in a few weeks when inflammation has decreased by at least 90%, but final results will take at least 2 to 6 months.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/cuello_recorte.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/cuello_recorte.jpg'
};

const servicioBichectomiaEn: Servicio = {
  id: 'bichectomia',
  nombre: 'Buccal Fat Removal',
  subtitulo: 'Removal of fat pads in the cheeks to refine facial features.',
  descripcion: 'Buccal fat removal is a surgical procedure in which the fat pads located at the lower edge of the cheeks are removed. These fat pads make the cheeks look more prominent. The most used technique is the internal or intraoral approach, which consists of making an incision in the oral mucosa at the upper part at the height of the second premolar. It requires local anesthesia and in very few cases requires stitches. Potential candidates are usually people with round faces or who wish to highlight the cheekbones to refine facial features, lengthen the face, and improve facial harmony. It is frequent in people with thin build who cannot slim their face despite exercise, sometimes caused by hereditary predisposition. This procedure decreases the round and wide appearance of the face, providing a thinner appearance naturally. Recovery time is short, 2 to 4 days, and one of the advantages is that there are no visible scars.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/bichectomia2.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/bichectomia2.jpg'
};

const servicioMentoplastiaEn: Servicio = {
  id: 'mentoplastia',
  nombre: 'Chin Surgery',
  subtitulo: 'Chin surgery to improve facial aesthetic balance and facial harmony.',
  descripcion: 'The chin is part of the facial aesthetic balance that gives harmony to the face. In cases where there is a very marked decrease in the chin, chin surgery should be resorted to. This procedure can be given in combination with other surgeries, such as rhinoplasty, double chin liposuction, facelift, and blepharoplasty, among others, in order to give better symmetry to facial features. There are two main techniques: chin implant (with incision in the oral mucosa fold, placing a synthetic material implant that does not generate external scars) and chin lipoinjection (by aspirating adipose tissue from a body area and injecting it into the chin, dependent on weight gain or loss). The potential candidate is a patient who has finished their growth stage, who has some type of chin malformations, aesthetic concerns, some secondary alteration, or trauma. This surgery lasts approximately 1 hour, is performed with local anesthesia with sedation, is an outpatient procedure, painless and safe. Results will be visible immediately, but as inflammation decreases, they will look better.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/menton_2.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/menton_2.jpg'
};

const servicioOtoplastiaEn: Servicio = {
  id: 'otoplastia',
  nombre: 'Otoplasty',
  subtitulo: 'Remodeling of the auricular pavilion to improve shape, position, or proportion of the ears.',
  descripcion: 'Otoplasty is the remodeling of the auricular pavilion. It can improve the shape, position, or proportion of the ears which are presented by structural, hereditary defects, or severe trauma, the procedure allows generating benefits to the appearance and self-esteem of the person. It is important to clarify that this surgery does not correct hearing problems or structures related to the middle and inner ear. There are two main types: prominent ear correction (to decrease the projection and angle of the auricular pavilion, removing cartilage at the auricular concha level) and microtia or anotia (intervention that begins with the extraction of costal cartilage from the patient to generate an auricular pavilion similar to normal). This is one of the aesthetic surgeries that can be performed from childhood, when development is complete around 6-8 years of age. However, a high percentage of adults come to have this type of intervention. Results for this type of intervention are immediate and will be visible once the dressings are removed and inflammation has subsided in a few weeks. This surgery can be complemented with other procedures such as blepharoplasty or eyebrow tail lift.',
  precioConsulta: 55,
  categoria: 'facial',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/otoplastia2.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/otoplastia2.jpg'
};

// Body Procedures
const servicioMamoplastiaAumentoEn: Servicio = {
  id: 'mamoplastia-aumento',
  nombre: 'Breast Augmentation',
  subtitulo: 'Increase in breast volume with implants to achieve symmetric and harmonious shape.',
  descripcion: 'Breast augmentation is a surgery that requires the use of implants that are placed under the glandular and muscular tissue. The purpose is to increase breast volume, give them a symmetric and harmonious shape to the breasts for aesthetic purposes, whether due to decreased development, changes after breastfeeding, or massive weight loss. Among the different types of implants are: saline solution (introduced without volume and filled with saline solution, allowing exact control of the final volume) and silicone (completely sealed, with fixed volume, guaranteeing more firmness to the breast, available in different shapes: round with low, medium, or high projection, or anatomical in teardrop shape). Surgeries are classified according to the type of incisions: axillary or transaxillary incision (in the middle part of the armpit) and lower areolar incision (around the lower part of the areola, the most used). Breast augmentation stylizes and gives special characteristics to the female silhouette, achieving a harmonious figure. Results are long-lasting but not permanent, as the decision can be made to remove the implants at any time.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/MAMOAUMENTO.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/MAMOAUMENTO.jpg'
};

const servicioMamoplastiaReduccionEn: Servicio = {
  id: 'mamoplastia-reduccion',
  nombre: 'Breast Reduction',
  subtitulo: 'Reduction of breast volume and breast lift (mastopexy).',
  descripcion: 'Factors such as breastfeeding, weight loss, and gravity cause breasts to alter their dimensions and location. It is normal for breast reduction to be accompanied by mastopexy, which is the technical name given to breast lift. This surgery also allows reducing the size of the areola to give a better visual effect to the breast. For this surgery, multiple surgical techniques can be used, the choice of which will depend on skin quality, breast volume, and areola size and position: areolar technique (when the drop is very mild, requires lifting 2 to 3 cm), vertical technique (when the drop and weight of the breast is greater) and inverted T technique (for patients with considerable volume, more invasive but achieves volume reduction and natural bust enhancement). It is aimed at women who want to reduce the volume of their bust, either because it causes back discomfort, after considerable weight loss, after breastfeeding, or all those who are not satisfied with their physical appearance. Estimated time for this procedure is 2 to 4 hours, with general anesthesia. Results are immediately visible and long-lasting, the new size will help alleviate back problems and pain.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/reduccion.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/reduccion.jpg'
};

const servicioLiposuccionEn: Servicio = {
  id: 'liposuccion-lipoescultura',
  nombre: 'Liposuction / Body Contouring',
  subtitulo: 'Removal of localized body fat to shape the patient\'s silhouette.',
  descripcion: 'Normally liposuction is performed on the abdomen, hips, and thighs, although it can also be performed on other areas of the body such as arms, knees, ankles, double chin, buttocks, or face. The fundamental objective is to remove body fat in order to eliminate localized adiposity, cellulite, shape the patient\'s silhouette, and to a lesser extent reduce body weight. This procedure is not a treatment for obesity or overweight control. There are different techniques: conventional (application of liquids with vasoconstrictor directly to the fat), micro air PAL (Power Assisted Liposuction, with anteroposterior movements in the cannula), ultrasonic or Vaser (ultrasonic waves that break and emulsify fat, useful in areas with abundant fibrosis) and laser (laser lipolysis, which destroys adipocyte membranes). This surgery is designed for people who wish to eliminate fatty tissue, candidates who have tried to remove those fat deposits with exercise and diet without success, or who want to shape their body and have normal weight with elastic and firm skin. It is recommended to have 5 days to be able to return to work and personal activities.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/lipo.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/lipo.jpg'
};

const servicioLipectomiaEn: Servicio = {
  id: 'lipectomia-abdominoplastia',
  nombre: 'Abdominoplasty',
  subtitulo: 'Removal of excess abdominal skin and fat with reinforcement of abdominal muscles.',
  descripcion: 'This surgical technique consists of making an incision above the pubis at the height of the lower abdominal fold, where excess skin and fat are lifted and removed. The abdominal muscles are reinforced, allowing a firmer appearance. This procedure allows removing unwanted tissue in the abdominal region which was obtained either due to weight loss, pregnancy, or hereditary conditions, among others. If you present skin sagging, stretch marks under the navel, and prominent abdomen, you are a candidate for this surgery. Generally, this procedure is performed on patients who, after being pregnant, are left with stretch marks, skin sagging, and marked abdominal weakness, and people who have had considerable weight loss, mostly after bariatric surgery. This surgery can last up to 3 hours and you can return to daily activities within 2 weeks. With this procedure, a defined waist is expected, improve the appearance of the navel, remove almost completely the stretch marks located in the lower abdomen, and tighten the skin in the abdominal region. Final and definitive results will be seen at 12 months of this procedure.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/LIPECTOMIA.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/LIPECTOMIA.jpg'
};

const servicioGluteoplastiaEn: Servicio = {
  id: 'gluteoplastia',
  nombre: 'Buttock Augmentation',
  subtitulo: 'Increase and shaping of the buttock shape through implants or lipoinjection.',
  descripcion: 'Buttock lift can be performed through implant placement, leaving only a scar at the intergluteal fold level, or with gluteal lipoinjection which is performed through liposuction incisions. This procedure seeks to increase and shape the buttocks. There are two main types: gluteal lipoinjection (the fat extracted from liposuction is used to perform a volume increase in the buttocks, transferring approximately 300-350cc of fat in each buttock, has the advantage that there will be no rejection by the organism and results are more natural) and silicone implants (similar to breast implants but with special characteristics, larger and flattened, resembling the shape of the buttocks, used in people with little adipose tissue and poorly developed gluteal muscles). Buttock augmentation is indicated for patients who wish to improve the volume and projection of the gluteal region, or who find some disproportion in the shape of the buttocks. These procedures can last up to 2 hours and can be combined with body contouring in surrounding areas to better define the curvature of the buttocks. Partial results can be seen in a matter of weeks when bruising and inflammation decrease by 90%.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/GLUTEO.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/GLUTEO.jpg'
};

const servicioMarcacionEn: Servicio = {
  id: 'marcacion-abdomen',
  nombre: 'Abdominal Etching',
  subtitulo: 'Highlight the lateral and central marks of the abdomen to achieve defined abs.',
  descripcion: 'Having defined abs is the dream of many and this is an intervention that has made it stop being just a dream. This procedure allows highlighting the lateral and central marks of the abdomen. It is not a weight loss solution. It is usually used in people with a normal body mass index and whose diet and exercise routine have not allowed abdominal definition. This type of procedure is aimed at women and men who want to show a defined and marked abdomen and whose exercise routines and healthy lifestyle have not been enough to achieve it. This procedure is not advised to be performed on patients with overweight and obesity problems. The combination of body contouring in other areas will help achieve very good results that will be noticeable immediately, but as inflammation decreases, they will be noticed even more in a few weeks. It is not a permanent procedure and the patient must accept an exercise and diet routine that will help make the results lasting.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/marcacion.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/marcacion.jpg'
};

const servicioRetiroBiopolimerosEn: Servicio = {
  id: 'retiro-biopolimeros',
  nombre: 'Biopolymer Removal',
  subtitulo: 'Surgical extraction of harmful injectable substances that put health at risk.',
  descripcion: 'Biopolymers or Biogel are doses of liquid silicone that are injected into the facial or body region. In some cases, other materials are added to these substances that, when applied, the body encapsulates them, producing granulomas or lumps that cause severe inflammatory and immunological reactions, causing rejection of the product, which puts the integrity and life of patients at risk. These can only be extracted through surgery and there is no full guarantee that the extraction will be 100%. Biopolymers are banned worldwide due to the various problems that have occurred and the high number of victims it has left. The type of surgery depends primarily on several factors such as the amount of substance applied, the area, the type of material implanted, the reaction the body has produced, and the time that has elapsed, among others. In cases such as substances in the face, lips, and cheekbones, it is advisable to perform the extraction directly through one or several surgeries depending on the case. What is important in this type of surgery is the extraction of the largest amount of filler material. By extracting the compromised tissue and removing the invasive substances, the patient will no longer present inflammation or pain in the area.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RETIROBIOPOLIMEROS.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/serviciosnuevos/RETIROBIOPOLIMEROS.jpg'
};

const servicioRejuvenecimientoVaginalEn: Servicio = {
  id: 'rejuvenecimiento-vaginal',
  nombre: 'Vaginal Rejuvenation',
  subtitulo: 'Aesthetic and functional procedures to improve the appearance and sensitivity of the genitals.',
  descripcion: 'What this procedure seeks is to give a natural appearance to the genitals and correct those small imperfections that have become uncomfortable for the patient. It also allows improving sensitivity for women who desire a full sexual life. The widening of the vaginal introitus walls does not allow adequate friction, decreasing pleasure in sexual intercourse. With this intervention, characteristics of youth are improved, hymen recreation, and reduction of the mons pubis, among others. Conditions such as hypertrophy of the labia minora, majora, and their underdevelopment can be corrected. Clitoral surgery and vaginal tightening can also be performed. The vagina is reduced to only 3 cm in diameter, a standard measure established by surgeons, allowing increased pleasure for both parties. This procedure achieves rejuvenation and restoration of the aesthetic appearance of the vagina caused by childbirth, heredity, and dramatic weight loss. It is oriented to improve the quality of life of patients, allowing them to make decisions, improving their self-esteem, increasing confidence, and strengthening sexual appetite.',
  precioConsulta: 55,
  categoria: 'corporal',
  doctorIds: ['dr_pinto'],
  heroImageUrl: 'https://drfreddypinto.com.co/drpinto/images/REJUVAGINAL.jpg',
  cardImageUrl: 'https://drfreddypinto.com.co/drpinto/images/REJUVAGINAL.jpg'
};

/**
 * Mapa de traducciones de servicios en inglés
 */
const serviciosTraducidosEn: Record<string, Servicio> = {
  // Facial Procedures
  'rinoplastia': servicioRinoplastiaEn,
  'frontoplastia': servicioFrontoplastiaEn,
  'blefaroplastia': servicioBlefaroplastiaEn,
  'ritidoplastia': servicioRitidoplastiaEn,
  'cervicoplastia': servicioCervicoplastiaEn,
  'bichectomia': servicioBichectomiaEn,
  'mentoplastia': servicioMentoplastiaEn,
  'otoplastia': servicioOtoplastiaEn,
  // Body Procedures
  'mamoplastia-aumento': servicioMamoplastiaAumentoEn,
  'mamoplastia-reduccion': servicioMamoplastiaReduccionEn,
  'liposuccion-lipoescultura': servicioLiposuccionEn,
  'lipectomia-abdominoplastia': servicioLipectomiaEn,
  'gluteoplastia': servicioGluteoplastiaEn,
  'marcacion-abdomen': servicioMarcacionEn,
  'retiro-biopolimeros': servicioRetiroBiopolimerosEn,
  'rejuvenecimiento-vaginal': servicioRejuvenecimientoVaginalEn,
};

/**
 * Obtiene un servicio traducido según el idioma
 */
export const getServicioTraducido = (servicioId: string, language: 'es' | 'en'): Servicio | undefined => {
  const servicio = servicios.find(s => s.id === servicioId);
  if (!servicio) return undefined;
  
  // Si es inglés y tenemos traducción, devolverla
  if (language === 'en' && serviciosTraducidosEn[servicioId]) {
    return serviciosTraducidosEn[servicioId];
  }
  
  // Por defecto devolver el servicio en español
  return servicio;
};

/**
 * Obtiene todos los servicios traducidos según el idioma
 */
export const getServiciosTraducidos = (language: 'es' | 'en'): Servicio[] => {
  if (language === 'en') {
    return servicios.map(servicio => {
      // Si tiene traducción, usar la traducida
      if (serviciosTraducidosEn[servicio.id]) {
        return serviciosTraducidosEn[servicio.id];
      }
      // Si no, devolver el original en español
      return servicio;
    });
  }
  
  return servicios;
};

// Traducciones de doctores en inglés
const doctorPintoEn: Doctor = {
  id: 'dr_pinto',
  alias: 'Dr. Pinto',
  especialidad: 'Plastic, Aesthetic, Maxillofacial and Hand Surgeon',
  fotoUrl: '/2.jpg',
  biografia: 'Medical surgeon graduated from Universidad del Rosario in Bogotá, Colombia, with more than 15 years of experience. Specialized in plastic, aesthetic, maxillofacial, and hand surgery, with postgraduate studies completed in Bogotá. Certified specialist in muscle definition and with advanced training in facial and body aesthetics obtained through a fellowship in the United States. Active member of the Colombian Society of Plastic, Aesthetic, Maxillofacial and Hand Surgery, and FILACP (Ibero-American Federation of Plastic and Reconstructive Surgery). Opinion leader who actively participates as a speaker at scientific congresses, guaranteeing access to the latest technological advances in aesthetic surgery.',
  credenciales: [
    'Medical Surgeon - Universidad del Rosario, Bogotá - Colombia',
    'More than 15 years of experience in plastic and aesthetic surgery',
    'Postgraduate in Plastic, Aesthetic, Maxillofacial and Hand Surgery',
    'Specialist in Muscle Definition',
    'Fellow in Facial and Body Aesthetics - United States',
    'Member of the Colombian Society of Plastic, Aesthetic, Maxillofacial and Hand Surgery',
    'Member of FILACP - Ibero-American Federation of Plastic and Reconstructive Surgery',
    'Speaker at international scientific congresses'
  ]
};

const doctoresTraducidosEn: Record<string, Doctor> = {
  'dr_pinto': doctorPintoEn,
};

/**
 * Obtiene todos los doctores traducidos según el idioma
 */
export const getDoctoresTraducidos = (language: 'es' | 'en'): Doctor[] => {
  if (language === 'en') {
    return doctores.map(doctor => {
      if (doctoresTraducidosEn[doctor.id]) {
        return doctoresTraducidosEn[doctor.id];
      }
      return doctor;
    });
  }
  
  return doctores;
};

// Traducciones de equipo en inglés
const equipoCarolinaEn: MiembroEquipo = {
  id: 'carolina_matheus',
  nombre: 'Carolina Matheus',
  cargo: 'Specialized Nurse in Plastic Surgery',
  fotoUrl: '/assets/images/Carolina Matheus.png',
  descripcion: 'Professional nurse specialized in the area of plastic surgery, with a solid career dedicated to comprehensive patient care before, during, and after surgical procedures.',
  descripcionCompleta: 'I am a professional nurse specialized in the area of plastic surgery, with a solid career dedicated to comprehensive patient care before, during, and after surgical procedures. My professional practice is distinguished by clinical excellence, personalized attention, and deep respect for the safety, well-being, and optimal recovery of each patient. I have extensive experience in pre and postoperative care, advanced management of surgical wounds, pain control, continuous clinical follow-up, and close accompaniment, fundamental aspects to achieve successful aesthetic results and safe recovery. My work is based on updated protocols, ethical practices, and quality standards of modern plastic surgery. I am characterized by providing human, warm, and highly professional care, understanding that each patient is unique and requires not only technical knowledge but also trust, tranquility, and clear guidance throughout their process. I work with a high sense of responsibility, discretion, and commitment, taking care of every detail that influences the patient\'s experience and satisfaction. My goal is to offer the best nursing care in plastic surgery, providing security, comfort, and expert accompaniment, so that each patient lives their process with confidence, serenity, and results that reflect well-being and harmony.',
  especialidades: [
    'Pre and Postoperative Care',
    'Advanced Wound Management',
    'Pain Control',
    'Continuous Clinical Follow-up',
    'Personalized Accompaniment'
  ]
};

const equipoAngelaEn: MiembroEquipo = {
  id: 'angela_pena',
  nombre: 'Angela Peña',
  cargo: 'Specialized Nurse',
  fotoUrl: '/assets/images/Angela Peña.png',
  descripcion: 'Nursing professional with extensive experience in specialized care for plastic surgery patients, committed to providing excellence in care and personalized accompaniment throughout the recovery process.',
  especialidades: [
    'Specialized Care',
    'Personalized Attention',
    'Recovery Follow-up',
    'Patient Support'
  ]
};

const equipoTraducidoEn: Record<string, MiembroEquipo> = {
  'carolina_matheus': equipoCarolinaEn,
  'angela_pena': equipoAngelaEn,
};

/**
 * Obtiene todo el equipo traducido según el idioma
 */
export const getEquipoTraducido = (language: 'es' | 'en'): MiembroEquipo[] => {
  if (language === 'en') {
    return equipo.map(miembro => {
      if (equipoTraducidoEn[miembro.id]) {
        return equipoTraducidoEn[miembro.id];
      }
      return miembro;
    });
  }
  
  return equipo;
};

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

export interface MiembroEquipo {
  id: string;
  nombre: string;
  cargo: string;
  fotoUrl: string;
  descripcion?: string;
  descripcionCompleta?: string;
  especialidades?: string[];
  badge?: string;
}

export const equipo: MiembroEquipo[] = [
  {
    id: 'carolina_matheus',
    nombre: 'Carolina Matheus',
    cargo: 'Enfermera Especializada en Cirugía Plástica',
    fotoUrl: '/assets/images/Carolina Matheus.png',
    descripcion: 'Enfermera profesional especializada en el área de cirugía plástica, con una sólida trayectoria dedicada al cuidado integral del paciente antes, durante y después de los procedimientos quirúrgicos.',
    descripcionCompleta: 'Soy enfermera profesional especializada en el área de cirugía plástica, con una sólida trayectoria dedicada al cuidado integral del paciente antes, durante y después de los procedimientos quirúrgicos. Mi ejercicio profesional se distingue por la excelencia clínica, la atención personalizada y un profundo respeto por la seguridad, el bienestar y la recuperación óptima de cada paciente. Cuento con amplia experiencia en cuidados pre y postoperatorios, manejo avanzado de heridas quirúrgicas, control del dolor, seguimiento clínico continuo y acompañamiento cercano, aspectos fundamentales para lograr resultados estéticos exitosos y una recuperación segura. Mi labor se basa en protocolos actualizados, prácticas éticas y estándares de calidad propios de la cirugía plástica moderna. Me caracterizo por brindar una atención humana, cálida y altamente profesional, entendiendo que cada paciente es único y requiere no solo conocimientos técnicos, sino también confianza, tranquilidad y orientación clara durante todo su proceso. Trabajo con un alto sentido de responsabilidad, discreción y compromiso, cuidando cada detalle que influye en la experiencia y satisfacción del paciente. Mi objetivo es ofrecer los mejores cuidados de enfermería en cirugía plástica, aportando seguridad, confort y acompañamiento experto, para que cada paciente viva su proceso con confianza, serenidad y resultados que reflejen bienestar y armonía.',
    especialidades: [
      'Cuidados Pre y Postoperatorios',
      'Manejo Avanzado de Heridas',
      'Control del Dolor',
      'Seguimiento Clínico Continuo',
      'Acompañamiento Personalizado'
    ]
  },
  {
    id: 'angela_pena',
    nombre: 'Angela Peña',
    cargo: 'Enfermera Especializada',
    fotoUrl: '/assets/images/Angela Peña.png',
    descripcion: 'Profesional de enfermería con amplia experiencia en cuidados especializados para pacientes de cirugía plástica, comprometida con brindar atención de excelencia y acompañamiento personalizado durante todo el proceso de recuperación.',
    especialidades: [
      'Cuidados Especializados',
      'Atención Personalizada',
      'Seguimiento de Recuperación',
      'Apoyo al Paciente'
    ]
  }
];
