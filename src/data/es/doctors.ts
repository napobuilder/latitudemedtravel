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
