import type { Member } from '@/types';

export const TEAM_NAME = 'Stakeholders';
export const TEAM_LOGO = '/assets/logo.webp';
export const SUBJECT_NAME = 'Ingenieria en Sistemas de Informacion';
export const UNIVERSITY = 'Universidad Tecnologica Nacional';
export const COURSE_YEAR = '2026';

export const members: Member[] = [
  {
    id: 'insaurralde-mariano',
    fullName: 'Insaurralde, Mariano',
    firstName: 'Mariano',
    avatarPath: '/assets/avatars/insaurralde-mariano.webp',
    roles: ['Lider de Proyecto', 'Analista'],
    strengths: ['Planificacion', 'Comunicacion', 'Analisis funcional'],
    interests: ['Gestion de proyectos', 'IA aplicada', 'Arquitectura de software'],
    bio: 'Coordina el equipo con foco en entregas claras, decisiones trazables y mejora continua.',
  },
  {
    id: 'fernandez-matias',
    fullName: 'Fernandez, Matias',
    firstName: 'Matias',
    avatarPath: '/assets/avatars/fernandez-matias.webp',
    roles: ['Desarrollador', 'Tester'],
    strengths: ['Resolucion de problemas', 'Calidad tecnica', 'Testing'],
    interests: ['Desarrollo web', 'Automatizacion', 'DevOps'],
    bio: 'Impulsa implementaciones robustas y mantenibles, validando cada entrega con criterio de calidad.',
  },
  {
    id: 'philippe-maurel',
    fullName: 'Philippe, Maurel',
    firstName: 'Maurel',
    avatarPath: '/assets/avatars/philippe-maurel.webp',
    roles: ['Desarrollador', 'Analista'],
    strengths: ['Modelado de datos', 'Documentacion', 'Pensamiento sistemico'],
    interests: ['Data analytics', 'Product thinking', 'Sistemas distribuidos'],
    bio: 'Conecta requerimientos funcionales con soluciones tecnicas para generar valor medible.',
  },
  {
    id: 'sanchez-franco',
    fullName: 'Sanchez, Franco',
    firstName: 'Franco',
    avatarPath: '/assets/avatars/sanchez-franco.webp',
    roles: ['Disenador', 'Desarrollador'],
    strengths: ['UX UI', 'Prototipado', 'Accesibilidad'],
    interests: ['Diseno de interfaces', 'Frontend', 'Experiencia de usuario'],
    bio: 'Disena experiencias intuitivas y consistentes, alineando identidad visual con objetivos del equipo.',
  },
  {
    id: 'acosta-sandra',
    fullName: 'Acosta, Sandra',
    firstName: 'Sandra',
    avatarPath: '/assets/avatars/acosta-sandra.webp',
    roles: ['Tester', 'Analista'],
    strengths: ['Validacion funcional', 'Detalle', 'Mejora de procesos'],
    interests: ['Calidad de software', 'Analisis', 'Gestion del conocimiento'],
    bio: 'Asegura coherencia funcional y usabilidad, transformando feedback en mejoras concretas.',
  },
];
