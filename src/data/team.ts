import type { Member } from '@/types';

export const TEAM_NAME = 'Stakeholders';
export const TEAM_LOGO = '/assets/logo.webp';
export const SUBJECT_NAME = 'Ingeniería en Sistemas de Información';
export const UNIVERSITY = 'Universidad Tecnológica Nacional';
export const COURSE_YEAR = '2026';

// TODO: Replace with individual member YouTube video URLs
// Currently using test/placeholder URL for all members
export const members: Member[] = [
  {
    id: 'acosta-sandra',
    fullName: 'Acosta, Sandra',
    firstName: 'Sandra',
    avatarPath: '/assets/avatars/acosta-sandra.svg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    roles: ['Tester', 'Analista'],
    strengths: ['Validacion funcional', 'Detalle', 'Mejora de procesos'],
    interests: ['Calidad de software', 'Analisis', 'Gestion del conocimiento'],
    bio: 'Asegura coherencia funcional y usabilidad, transformando feedback en mejoras concretas.',
  },
  {
    id: 'fernandez-matias',
    fullName: 'Fernandez, Matias',
    firstName: 'Matias',
    avatarPath: '/assets/avatars/fernandez-matias.webp',
    youtubeUrl: 'https://www.youtube.com/embed/cGpz-EEMgi0',
    roles: ['Lider de Proyecto', 'Analista'],
    strengths: ['Planificacion', 'Comunicacion', 'Analisis funcional'],
    interests: ['Gestion de proyectos', 'IA aplicada', 'Arquitectura de software'],
    bio: 'Coordina el equipo con foco en entregas claras, decisiones trazables y mejora continua.',
  },
  {
    id: 'insaurralde-mariano',
    fullName: 'Insaurralde, Mariano',
    firstName: 'Mariano',
    avatarPath: '/assets/avatars/insaurralde-mariano.webp',
    youtubeUrl: 'https://www.youtube.com/embed/4peMlCcX01E',
    roles: ['Desarrollador', 'Tester'],
    strengths: ['Resolucion de problemas', 'Calidad tecnica', 'Testing'],
    interests: ['Ingeniería de software', 'Automatizacion', 'IA generativa'],
    bio: 'Impulsa implementaciones robustas y mantenibles, validando cada entrega con criterio de calidad.',
  },
  {
    id: 'philippe-maurel',
    fullName: 'Philippe, Maurel',
    firstName: 'Maurel',
    avatarPath: '/assets/avatars/philippe-maurel.webp',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    roles: ['Disenador', 'Desarrollador'],
    strengths: ['UX UI', 'Prototipado', 'Accesibilidad'],
    interests: ['Diseno de interfaces', 'Frontend', 'Experiencia de usuario'],
    bio: 'Diseña experiencias intuitivas y consistentes, alineando identidad visual con objetivos del equipo.',
  },
  {
    id: 'sanchez-franco',
    fullName: 'Sanchez, Franco',
    firstName: 'Franco',
    avatarPath: '/assets/avatars/sanchez-franco.webp',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    roles: ['Desarrollador', 'Analista'],
    strengths: ['Modelado de datos', 'Documentacion', 'Pensamiento sistemico'],
    interests: ['Data analytics', 'Product thinking', 'Sistemas distribuidos'],
    bio: 'Conecta requerimientos funcionales con soluciones tecnicas para generar valor medible.',
  },
];
