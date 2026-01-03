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
