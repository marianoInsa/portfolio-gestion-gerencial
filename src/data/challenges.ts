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
  {
    id: 'desafio-04-punto-de-equilibrio',
    title: 'Punto de Equilibrio',
    number: 4,
    period: 'Hasta 08/05/2026 22:45 hs',
    problem:
      'Analizar y calcular el punto de equilibrio en diferentes escenarios empresariales, resolviendo 4 ejercicios progresivos que integran costos fijos, variables, precio unitario y graficos de equilibrio para toma de decisiones financieras.',
    solution:
      'Se resolvieron 4 ejercicios aplicando formulas de punto de equilibrio: (1) tabla completa con ventas, costos y PE de empresa manufacturera, (2) calculo PE en unidades y pesos, (3) analisis de costos variables y fijos para empresa de servicios, (4) impacto de cambios en precios y costos sobre el punto de equilibrio con 3 escenarios.',
    teamReflection:
      'Comprendimos como variaciones en costos fijos, precio unitario y costos variables impactan directamente el punto de equilibrio, herramienta critica para planificacion financiera y escenarios empresariales.',
    tools: ['Google Sheets', 'Excel', 'Analisis Financiero'],
    evidences: [
      {
        type: 'imagen',
        label: 'Infografia del Punto de Equilibrio',
        url: '/assets/challenges/desafio-4/desafío4-infografía.webp',
      },
      {
        type: 'enlace',
        label: 'Planilla de Calculos - Google Sheets',
        url: 'https://docs.google.com/spreadsheets/d/1vBrP1Qsxt0vBPT-QwLlZXgslByJCdBh7hq8ZnXdCg3s/edit?usp=sharing',
      },
    ],
    tags: ['financiero', 'punto-de-equilibrio', 'costos', 'analisis'],
  },
];
