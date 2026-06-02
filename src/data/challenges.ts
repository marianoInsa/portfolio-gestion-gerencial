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
    period: '08/05/2026',
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
  {
    id: 'desafio-05-perfil-talento',
    title: 'Mi perfil Talento 4.0 en 2030',
    number: 5,
    period: '27/04/2026',
    problem: 'Identificar y proyectar los estilos de liderazgo de cada miembro del equipo hacia el 2030, basándonos en los estereotipos y características personales.',
    solution: 'Se elaboró el perfil de Talento 4.0 con los estereotipos de liderazgo que identifican a cada integrante del equipo, incluyendo sus caricaturas y una descripción detallada de su enfoque como líderes.',
    teamReflection: 'Comprender los distintos tipos de liderazgo que conviven en el equipo nos permite potenciar la colaboración, delegar eficientemente y aprovechar las fortalezas de cada estilo para el éxito de los proyectos.',
    tools: ['Liderazgo', 'Talento 4.0', 'Gestión de Equipos'],
    evidences: [],
    tags: ['talento', 'liderazgo', 'equipo'],
  },
  {
    id: 'desafio-06-gestion-del-cambio',
    title: 'Gestión del Cambio',
    number: 6,
    period: '01/06/2026',
    problem: 'La empresa debía implementar un sistema WMS reemplazando procesos manuales y culturales arraigados, lo que generó resistencia en los empleados veteranos debido a una mala gestión del cambio técnico vs humano.',
    solution: 'Se propuso un plan en fases basado en el modelo ADKAR, recomponiendo la confianza, incorporando líderes informales, dando capacitación práctica por roles y soporte, para lograr una verdadera transformación digital.',
    teamReflection: 'Aprendimos que la transformación digital no es solo instalar tecnología; requiere preparar y acompañar el factor humano para que el cambio sea adoptado de forma exitosa.',
    tools: ['ADKAR', 'Kotter', 'Gestión del Cambio', 'Transformación Digital'],
    evidences: [],
    tags: ['gestion-del-cambio', 'adkar', 'transformacion-digital', 'recursos-humanos'],
  },
  {
    id: 'desafio-07-causa-efecto',
    title: 'Causa-Efecto',
    number: 7,
    period: '08/06/2026',
    problem: 'Analizar escenarios con Diagrama de Ishikawa (6M) para modelizar problemas, identificar causas raíz en el caso "El doctor está... en" y conectar con la "Cabeza del Pescado" del TPI.',
    solution: 'Se desarrolló un Diagrama Causa-Efecto identificando "Métodos" (agendar 90% turnos fijos) como M crítica, con plan de acción. Para el TPI, se mapearon las 6M determinando una raíz bicausal (Métodos y Tecnología) con propuesta de mejora Tri-Etapa.',
    teamReflection: 'Comprendimos que diagramar las 6M revela la raíz sistémica de un problema. En clínica y en ECOM, síntomas superficiales ocultan fallas profundas de método y tecnología.',
    tools: ['Diagrama de Ishikawa', '6M', 'Resolución de Problemas', 'Gestión de Operaciones'],
    evidences: [
      {
        type: 'imagen',
        label: 'Diagrama Causa-Efecto (Clínica Pediátrica)',
        url: '/assets/challenges/desafio-7/causa-efecto.webp',
      },
      {
        type: 'imagen',
        label: 'Diagrama Causa-Efecto (TPI ECOM)',
        url: '/assets/challenges/desafio-7/causa-efecto-tpi.webp',
      },
    ],
    tags: ['ishikawa', 'causa-efecto', '6m', 'resolucion-de-problemas'],
  },
];
