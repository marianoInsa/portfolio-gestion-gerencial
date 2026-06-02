import type { Member } from '@/types';

export const TEAM_NAME = 'Stakeholders';
export const TEAM_LOGO = '/assets/logo.webp';
export const SUBJECT_NAME = 'Ingeniería en Sistemas de Información';
export const UNIVERSITY = 'Universidad Tecnológica Nacional';
export const COURSE_YEAR = '2026';

export const members: Member[] = [
  {
    id: 'acosta-sandra',
    fullName: 'Sandra Acosta',
    firstName: 'Sandra',
    avatarPath: '/assets/avatars/acosta-sandra.webp',
    cartoonPath: '/assets/cartoons/acosta-sandra-cartoon.webp',
    roles: ['Tester', 'Analista'],
    strengths: ['Validacion funcional', 'Detalle', 'Mejora de procesos'],
    interests: ['Calidad de software', 'Analisis', 'Gestion del conocimiento'],
    bio: 'Asegura coherencia funcional y usabilidad, transformando feedback en mejoras concretas.',
    // leaderType: 'Un líder inspirador que persigue grandes metas a futuro integrando activamente las ideas y el bienestar de su grupo.',
    leaderLabels: ['De Equipo', 'Democrático', 'Visionario'],
    leaderDescription:
      'Un líder inspirador que persigue grandes metas a futuro integrando activamente las ideas y el bienestar de su grupo.',
  },
  {
    id: 'fernandez-matias',
    fullName: 'Matias Fernandez',
    firstName: 'Matias',
    avatarPath: '/assets/avatars/fernandez-matias.webp',
    cartoonPath: '/assets/cartoons/fernandez-matias-cartoon.webp',
    roles: ['Lider de Proyecto', 'Analista'],
    strengths: ['Planificacion', 'Comunicacion', 'Analisis funcional'],
    interests: ['Gestion de proyectos', 'IA aplicada', 'Arquitectura de software'],
    bio: 'Coordina el equipo con foco en entregas claras, decisiones trazables y mejora continua.',
    // leaderType: 'Un supervisor distante e inflexible que impone reglas estrictas desde lejos y exige obediencia sin involucrarse en el día a día.',
    leaderLabels: ['Ajeno', 'Directivo', 'Autoritario'],
    leaderDescription:
      'Un supervisor distante e inflexible que impone reglas estrictas desde lejos y exige obediencia sin involucrarse en el día a día.',
  },
  {
    id: 'insaurralde-mariano',
    fullName: 'Mariano Insaurralde',
    firstName: 'Mariano',
    avatarPath: '/assets/avatars/insaurralde-mariano.webp',
    cartoonPath: '/assets/cartoons/insaurralde-mariano-cartoon.webp',
    roles: ['Desarrollador', 'Tester'],
    strengths: ['Resolucion de problemas', 'Calidad tecnica', 'Testing'],
    interests: ['Ingeniería de software', 'Automatizacion', 'IA generativa'],
    bio: 'Impulsa implementaciones robustas y mantenibles, validando cada entrega con criterio de calidad.',
    // leaderType: 'Lider de equipo y democrático',
    leaderLabels: ['De Equipo', 'Democrático'],
    leaderDescription:
      'Un facilitador cercano y empático que asegura la armonía del grupo tomando las decisiones siempre mediante el consenso.',
  },
  {
    id: 'philippe-maurel',
    fullName: 'Philippe Maurel',
    firstName: 'Philippe',
    avatarPath: '/assets/avatars/philippe-maurel.webp',
    cartoonPath: '/assets/cartoons/philippe-maurel-cartoon.webp',
    roles: ['Disenador', 'Desarrollador'],
    strengths: ['UX UI', 'Prototipado', 'Accesibilidad'],
    interests: ['Diseno de interfaces', 'Frontend', 'Experiencia de usuario'],
    bio: 'Diseña experiencias intuitivas y consistentes, alineando identidad visual con objetivos del equipo.',
    // leaderType: 'Lider democrático con participacion selectiva',
    leaderLabels: ['Ajeno', 'Democrático'],
    leaderDescription:
      'Un guía desprendido que prefiere dar un paso al costado para que el equipo debata, vote y decida con total autonomía.',
  },
  {
    id: 'sanchez-franco',
    fullName: 'Franco Sanchez',
    firstName: 'Franco',
    avatarPath: '/assets/avatars/sanchez-franco.webp',
    cartoonPath: '/assets/cartoons/sanchez-franco-cartoon.webp',
    roles: ['Desarrollador', 'Analista'],
    strengths: ['Modelado de datos', 'Documentacion', 'Pensamiento sistemico'],
    interests: ['Data analytics', 'Product thinking', 'Sistemas distribuidos'],
    bio: 'Conecta requerimientos funcionales con soluciones tecnicas para generar valor medible.',
    // leaderType: 'Lider desarrollador, democrático e integrador',
    leaderLabels: ['De Equipo', 'Democrático', 'Visionario'],
    leaderDescription:
      'Un líder inspirador que persigue grandes metas a futuro integrando activamente las ideas y el bienestar de su grupo.',
  },
];
