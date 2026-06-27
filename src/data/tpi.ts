import type { TPIProject } from '@/types';

export const tpi: TPIProject = {
  title: 'Trabajo Práctico Integrador',
  description:
    'Diagnóstico, diseño organizacional e integración tecnológica aplicada al Área de Comercialización de ECOM Chaco S.A.',
  period: '29 de junio de 2026',
  evidences: [],
  reflections:
    'El desarrollo de este Trabajo Práctico Integrador nos permitió consolidar los conocimientos teóricos del área de gestión gerencial y de sistemas de información, aplicándolos sobre un caso real. A través del análisis del Área de Comercialización de ECOM Chaco S.A., diseñamos una solución integral que equilibra el modelado de procesos, la gestión del cambio y la integración técnica para optimizar la eficiencia y transparencia operativa.',
  isPublished: true,
  infographicPath: '/assets/tpi/infografía.webp',
  closingQuote: 'Lo que no se define, no se puede medir. Lo que no se mide, no se puede mejorar. Lo que no se mejora, se degrada siempre.',
  sections: [
    {
      id: 'organizacion-diagnostico',
      number: 1,
      title: 'Organización y Diagnóstico',
      content: [
        'ECOM Chaco S.A. es una empresa de base tecnológica con participación estatal mayoritaria (SAPEM) que posee 49 años de trayectoria, posicionándose como el brazo tecnológico de la provincia del Chaco. Brinda soluciones integrales de conectividad (fibra óptica, internet), infraestructura de servidores, desarrollo de software a medida e inteligencia artificial tanto para el sector público como para el privado.',
        'Dentro de esta estructura, el Área de Comercialización actúa como nexo crítico entre el cliente, Atención al Cliente, las áreas técnicas y Facturación, enfocando sus funciones operativas en la presupuestación, seguimiento y prefacturación de los servicios.'
      ],
      subsections: [
        {
          title: 'Conceptos Teóricos Centrales',
          items: [
            'Teoría de la Organización',
            'Comportamiento Organizacional',
            'Sistemas de Información',
            'Gestión por Procesos'
          ]
        },
        {
          title: 'Propuesta de Valor',
          items: [
            'Ofrecer soluciones tecnológicas confiables y adaptadas al sector público mediante procesos trazables y transparentes, garantizando el flujo de caja corporativo y actuando como catalizador de la transformación digital de la provincia.'
          ]
        }
      ]
    },
    {
      id: 'definicion-problema',
      number: 2,
      title: 'Definición del Problema',
      content: [
        'El diagnóstico del área comercial identificó una alta concentración temporal de tareas, demoras sistemáticas en la elaboración de presupuestos y en la ejecución de prefacturaciones, lo cual decanta en ineficiencias operativas y tensiones interdepartamentales.'
      ],
      highlights: [
        'Ausencia de reglas de asignación y criterios documentados en el flujo de trabajo.',
        'Fragmentación de software que obliga al traspaso manual de datos.',
        'Documentación organizacional desactualizada (manuales sin validar desde hace años).',
        'Límites difusos entre áreas, generando islas organizacionales y alta dependencia de la memoria institucional.'
      ],
      subsections: [
        {
          title: 'Impactos Negativos ("Pains")',
          items: [
            { label: 'Pérdida de Trazabilidad', text: 'Riesgo latente de pérdida de seguimiento en los requerimientos y errores por carga manual de datos.' },
            { label: 'Dependencia Crítica', text: 'Excesiva dependencia de personas clave debido a conocimiento tácito, haciendo al área vulnerable a rotaciones.' },
            { label: 'Cuellos de Botella', text: 'Demoras que merman la satisfacción del cliente y ponen en peligro la continuidad operativa de otras áreas.' },
            { label: 'Costo de Oportunidad', text: 'Imposibilidad de destinar el personal a tareas de mayor valor estratégico ni escalar la estructura del negocio.' }
          ]
        }
      ]
    },
    {
      id: 'solucion-propuesta',
      number: 3,
      title: 'Solución Propuesta',
      content: [
        'La solución modela un enfoque técnico e incremental utilizando herramientas de gestión e ingeniería informática estructuradas en tres etapas de ejecución con un estimado de 240 horas totales de implementación.'
      ],
      subsections: [
        {
          title: 'Modelado y Herramientas de Gestión',
          items: [
            { label: 'Orquestación de Procesos (BPMN/UML)', text: 'Mapeo detallado de procesos en modelos AS-IS y TO-BE para erradicar las ineficiencias de flujo y cuellos de botella.' },
            { label: 'Matriz RACI y Competencias', text: 'Clarificación formal de roles, responsabilidades y suplencias para democratizar el conocimiento y eliminar la dependencia unipersonal.' },
            { label: 'Tablero de Indicadores (KPIs)', text: 'Diseño de un dashboard enfocado en el control de procesos (tiempo promedio de ciclo, antigüedad de tickets, prefacturas pendientes).' }
          ]
        },
        {
          title: 'Solución Técnica e Innovación (SI/TI)',
          items: [
            { label: 'Arquitectura de Integración (Middleware)', text: 'Desarrollo de un prototipo funcional basado en arquitectura REST y lenguaje Python (glue code) que conecta de forma no disruptiva el Sistema de Tickets con el ERP y catálogo de datos.' },
            { label: 'Lógica de Habilitación Restrictiva', text: 'Automatización de la prefacturación estrictamente condicionada a la finalización técnica del ticket y la validación de evidencias por el área ejecutora.' }
          ]
        }
      ]
    },
    {
      id: 'resultados-gestion-cambio',
      number: 4,
      title: 'Resultados Esperados y Gestión del Cambio',
      content: [
        'La transición hacia el nuevo modelo operativo no solo requiere software y procesos; exige una estrategia activa que aborde la cultura organizacional para mitigar la resistencia natural al cambio.'
      ],
      highlights: [
        'Reducción drástica del "Tiempo Promedio de Ciclo de Pedido".',
        'Disminución del reproceso y los errores por transcripción manual.',
        'Mayor control gerencial mediante métricas confiables en tiempo real.',
        'Aseguramiento de la continuidad operativa ante rotación de personal o transiciones políticas.'
      ],
      subsections: [
        {
          title: 'Estrategia de Gestión del Cambio (Metodología Scrum - Quick Wins)',
          items: [
            { label: 'Personas', text: 'Capacitación activa, acompañamiento directo en la transición y canales de comunicación transparentes.' },
            { label: 'Procesos', text: 'Formalización gradual con participación directa del equipo de trabajo y foco en la mejora continua.' },
            { label: 'Cultura', text: 'Orientación al servicio, derribando silos de comunicación con herramientas colaborativas (Jira, Discord, Google Workspace) para fomentar un liderazgo colaborativo.' }
          ]
        }
      ]
    },
    {
      id: 'cierre-estrategico',
      number: 5,
      title: 'Cierre Estratégico',
      content: [
        'El proyecto concluye transformando la operación comercial del área en un proceso robusto, trazable y escalable que proyecta valor real tanto para ECOM Chaco S.A. como para la provincia en general.'
      ],
      subsections: [
        {
          title: 'Dimensiones de Impacto',
          items: [
            { label: 'Competencias Proactivas', text: 'Despliegue de pensamiento sistémico, rigor técnico, liderazgo colaborativo y orientación hacia la medición de resultados.' },
            { label: 'Impacto Comercial', text: 'Aumento sustancial de la confianza del cliente por respuestas más ágiles, y mejora en la competitividad en el mercado TIC regional.' },
            { label: 'Rigor Técnico', text: 'Establecimiento de procesos estandarizados y sistemas integrados bajo estrictos principios de datos únicos, gobernanza de TI y seguridad de la información.' }
          ]
        }
      ]
    }
  ]
};
