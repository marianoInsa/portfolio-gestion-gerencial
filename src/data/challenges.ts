import type { Challenge } from '@/types';

export const challenges: Challenge[] = [
  // {
  //   id: 'desafio-01-diagnostico-digital',
  //   title: 'Diagnostico Digital del Equipo',
  //   number: 1,
  //   period: 'Marzo 2026',
  //   problem:
  //     'El equipo necesitaba una vision compartida del punto de partida tecnico y organizacional para definir prioridades de cursada.',
  //   solution:
  //     'Se relevaron habilidades, herramientas y expectativas; luego se consolidaron acuerdos de trabajo, canales y criterios de calidad.',
  //   teamReflection:
  //     'Aprendimos que una base de acuerdos explicitos reduce retrabajo, mejora tiempos de entrega y fortalece la colaboracion.',
  //   tools: ['Miro', 'Google Meet', 'Notion', 'GitHub'],
  //   evidences: [
  //     {
  //       type: 'presentacion',
  //       label: 'Presentacion del diagnostico',
  //       url: 'https://docs.google.com/presentation',
  //     },
  //     {
  //       type: 'documento',
  //       label: 'Acta de acuerdos iniciales',
  //       url: 'https://docs.google.com/document',
  //     },
  //   ],
  //   tags: ['diagnostico', 'equipo', 'planificacion'],
  // },
  // {
  //   id: 'desafio-02-mapa-de-procesos',
  //   title: 'Mapa de Procesos y Flujo de Trabajo',
  //   number: 2,
  //   period: 'Abril 2026',
  //   problem:
  //     'Habia inconsistencias en la forma de planificar tareas y validar entregables entre integrantes.',
  //   solution:
  //     'Se diseno un flujo de trabajo estandar con etapas, criterios de entrada/salida y responsables por actividad.',
  //   teamReflection:
  //     'Estandarizar procesos permitio detectar bloqueos antes y mejorar la trazabilidad de decisiones.',
  //   tools: ['Draw.io', 'GitHub Projects', 'Discord'],
  //   evidences: [
  //     {
  //       type: 'imagen',
  //       label: 'Mapa de procesos del equipo',
  //       url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  //     },
  //     {
  //       type: 'enlace',
  //       label: 'Tablero de trabajo',
  //       url: 'https://github.com',
  //     },
  //   ],
  //   tags: ['procesos', 'gestion', 'metodologia'],
  // },
  {
    id: 'desafio-03-primera-entrega-portfolio',
    title: 'Primera Entrega del Portfolio',
    number: 3,
    period: '03/04/2026',
    problem:
      'Se requeria consolidar en un micrositio los avances del equipo con enfoque de comunicacion tecnica y visual coherente.',
    solution:
      'Se implemento el portfolio con arquitectura modular en Next.js, sistema visual cyberpunk y contenido estructurado por secciones.',
    teamReflection:
      'Integramos diseño, desarrollo y documentacion en una entrega unificada, con mejor equilibrio entre forma y contenido.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    evidences: [
      // {
      //   type: 'video',
      //   label: 'Demo de la entrega',
      //   url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      // },
      {
        type: 'enlace',
        label: 'Repositorio del portfolio',
        url: 'https://github.com/marianoInsa/portfolio-gestion-gerencial',
      },
    ],
    tags: ['portfolio', 'frontend', 'integracion'],
  },
];
