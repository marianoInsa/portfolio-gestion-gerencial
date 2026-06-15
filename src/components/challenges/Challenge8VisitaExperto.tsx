import React from 'react';
import { Users, Cpu, Repeat, Briefcase, Award, AlertTriangle, Shield, FileText } from 'lucide-react';

export default function Challenge8VisitaExperto() {
  return (
    <div className="mt-8 space-y-8 text-star-light">
      {/* ACTIVIDAD 1 - PREPARACIÓN */}
      <div className="rounded-xl border border-nebula bg-dark-matter/30 p-6 transition-all duration-300 hover:border-cyber-cyan/50">
        <h3 className="font-exo2 text-xl font-bold text-cyber-cyan flex items-center gap-2 mb-4">
          <Users className="size-5" />
          Actividad N°1 – Preparación de la Visita
        </h3>
        <p className="leading-relaxed">
          Previo a la visita del <strong className="text-white-photon">Ing. Nicolás Dogi (CCO en Devlights)</strong> el día viernes 03/06, 
          realizamos una investigación detallada de la organización y su perfil profesional. Como parte de la preparación, se definieron 
          y coordinaron junto a todo el curso preguntas estratégicas orientadas a comprender la escala, el modelo de exportación y la 
          cultura organizacional de la compañía.
        </p>
      </div>

      {/* ACTIVIDAD 2 - ANÁLISIS */}
      <div className="space-y-6">
        <h3 className="font-exo2 text-2xl font-bold text-white-photon border-b border-nebula pb-2">
          Actividad N°2 - Análisis de la Organización
        </h3>

        {/* 1. SISTEMA SOCIOTÉCNICO */}
        <section className="space-y-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">1.</span> Introducción de la Empresa como Sistema Sociotécnico
          </h4>
          <p className="leading-relaxed">
            Devlights opera como un sistema sociotécnico maduro donde la cohesión de sus estructuras humanas es inseparable de su sofisticación infraestructural.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="rounded-xl border border-nebula bg-deep-space/50 p-5 transition-all hover:-translate-y-1 hover:border-neon-green/40">
              <div className="flex items-center gap-2 text-neon-green mb-3">
                <Users className="size-5" />
                <h5 className="font-bold text-white-photon">Subsistema Social</h5>
              </div>
              <p className="text-sm leading-relaxed">
                Se fundamenta en una red de más de 100 empleados directos que operan bajo modalidades remotas e híbridas. 
                La cultura promueve la autogestión, la formación continua (educación, clases de inglés y Bootcamps propios) 
                y rituales de integración física en oficinas de Corrientes. Jerarquía matricial de liderazgos funcionales 
                permanentes con células dinámicas temporales.
              </p>
            </div>

            <div className="rounded-xl border border-nebula bg-deep-space/50 p-5 transition-all hover:-translate-y-1 hover:border-cyber-cyan/40">
              <div className="flex items-center gap-2 text-cyber-cyan mb-3">
                <Cpu className="size-5" />
                <h5 className="font-bold text-white-photon">Subsistema Técnico</h5>
              </div>
              <p className="text-sm leading-relaxed">
                El andamiaje operativo se apoya en un Tech Stack avanzado (C#, .NET, Node.js) y herramientas de control 
                de versiones distribuidas (Git, BitBucket). La columna vertebral tecnológica reside en su división CloudOps, 
                enfocada en infraestructuras de AWS con despliegues automatizados y monitoreo SRE que garantiza un 99.99% de SLA.
              </p>
            </div>

            <div className="rounded-xl border border-nebula bg-deep-space/50 p-5 transition-all hover:-translate-y-1 hover:border-electric-purple/40">
              <div className="flex items-center gap-2 text-electric-purple mb-3">
                <Repeat className="size-5" />
                <h5 className="font-bold text-white-photon">Interacción Sistémica</h5>
              </div>
              <p className="text-sm leading-relaxed">
                La interdependencia entre ambos subsistemas se gestiona a través del marco ágil de SCRUM. Este exige rituales 
                diarios (Daily Stand-ups) que fuerzan a las células de desarrollo humano a sincronizarse constantemente con 
                los ciclos técnicos de entrega iterativa de código funcional.
              </p>
            </div>
          </div>
        </section>

        {/* 2. PERSPECTIVA DE NEGOCIOS */}
        <section className="space-y-4 pt-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">2.</span> El Sistema de Información desde la Perspectiva de Negocios
          </h4>
          <p className="leading-relaxed">
            Desde una óptica comercial, el sistema de información de Devlights no opera como una herramienta de soporte pasivo, sino como el núcleo de su cadena de valor exportadora orientada al sector Business-to-Business (B2B).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="rounded-xl border border-nebula bg-dark-matter/30 p-5 transition-all hover:bg-dark-matter/50">
              <h5 className="font-bold text-white-photon mb-2 flex items-center gap-1.5">
                <Briefcase className="size-4 text-cyber-cyan" />
                Alineación Comercial
              </h5>
              <p className="text-sm leading-relaxed">
                La información fluye bajo lógicas consultivas. El CCO traduce requerimientos de negocio complejos provenientes 
                de directores de TI extranjeros en especificaciones técnicas concretas, evitando asimetrías de información 
                y sobrepromesas operativas.
              </p>
            </div>

            <div className="rounded-xl border border-nebula bg-dark-matter/30 p-5 transition-all hover:bg-dark-matter/50">
              <h5 className="font-bold text-white-photon mb-2 flex items-center gap-1.5">
                <Cpu className="size-4 text-cyber-cyan" />
                Datos como Servicio
              </h5>
              <p className="text-sm leading-relaxed">
                Devlights construye pipelines de procesamiento y análisis que permiten a corporaciones clientes ingerir, 
                estructurar y visualizar volúmenes masivos de datos para la toma de decisiones estratégicas informadas y 
                la optimización de flujos operativos.
              </p>
            </div>

            <div className="rounded-xl border border-nebula bg-dark-matter/30 p-5 transition-all hover:bg-dark-matter/50">
              <h5 className="font-bold text-white-photon mb-2 flex items-center gap-1.5">
                <Repeat className="size-4 text-cyber-cyan" />
                Trazabilidad CI/CD
              </h5>
              <p className="text-sm leading-relaxed">
                El desarrollo de software se documenta e integra continuamente (CI/CD) en repositorios centralizados. 
                Al entregar incrementos de valor funcionales en plazos cortos (Sprints), se mitigan riesgos financieros 
                y se permite a los Product Managers pivotar comercialmente.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FCE & PARTICULARIDADES */}
        <section className="space-y-4 pt-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">3.</span> Particularidades Organizacionales y Factores Claves de Éxito (FCE)
          </h4>
          <p className="leading-relaxed">
            La inserción competitiva de la empresa en un mercado global se sustenta en características asimétricas altamente definidas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="rounded-xl border border-nebula bg-deep-space/65 p-6 space-y-4">
              <h5 className="font-exo2 text-md font-bold text-white-photon uppercase tracking-wider text-cyber-cyan border-b border-nebula/40 pb-2">
                Particularidades Organizacionales
              </h5>
              <div className="space-y-3">
                <div>
                  <h6 className="font-semibold text-white-photon text-sm">Liderazgo de Frontera (Boundary Spanning)</h6>
                  <p className="text-xs mt-1 leading-relaxed text-star-light">
                    La cúpula directiva (ejemplificada en el Ing. Nicolás Dogi) interactúa activamente con el Estado, 
                    la Academia y la Industria a través del Polo IT Corrientes, ejerciendo influencia en normativas 
                    y en la formación educativa regional.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-white-photon text-sm">Endogeneización de la Capacitación</h6>
                  <p className="text-xs mt-1 leading-relaxed text-star-light">
                    Ante un sistema universitario tradicional que corre detrás de la demanda industrial, la firma 
                    internalizó la creación de talento fundando los Devlights IT Bootcamps gratuitos, un embudo 
                    de reclutamiento hiper-especializado.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-nebula bg-deep-space/65 p-6 space-y-4">
              <h5 className="font-exo2 text-md font-bold text-white-photon uppercase tracking-wider text-electric-purple border-b border-nebula/40 pb-2">
                Factores Claves de Éxito (FCE)
              </h5>
              <div className="space-y-3">
                <div>
                  <h6 className="font-semibold text-white-photon text-sm flex items-center gap-1">
                    <Award className="size-3.5 text-electric-purple" />
                    Modelo Nearshore Efectivo
                  </h6>
                  <p className="text-xs mt-1 leading-relaxed text-star-light">
                    Alineación total de zonas horarias (EST, CST, PST) y alta afinidad cultural con Estados Unidos, 
                    eliminando la latencia de comunicación típica de la deslocalización tradicional.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-white-photon text-sm flex items-center gap-1">
                    <Award className="size-3.5 text-electric-purple" />
                    Arbitraje Salarial Altamente Rentable
                  </h6>
                  <p className="text-xs mt-1 leading-relaxed text-star-light">
                    Capacidad de ofrecer equipos de desarrollo de élite a una fracción del costo de Silicon Valley, 
                    capturando dólares para blindarse frente al contexto inflacionario local.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-white-photon text-sm flex items-center gap-1">
                    <Award className="size-3.5 text-electric-purple" />
                    Entrega Ágil y Calidad Auditada
                  </h6>
                  <p className="text-xs mt-1 leading-relaxed text-star-light">
                    Uso riguroso de SCRUM sumado a áreas dedicadas de QA (Testing) y auditorías independientes (Clutch) 
                    que actúan como prueba social irrefutable frente a clientes internacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROBLEMÁTICAS Y GESTIÓN DEL CAMBIO */}
        <section className="space-y-4 pt-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">4.</span> Problemáticas que Afectan a la Empresa y Gestión del Cambio
          </h4>
          <p className="leading-relaxed">
            La adaptabilidad organizacional ante factores disruptivos de mercado e institucionales se gestiona mediante estrategias concretas:
          </p>

          <div className="overflow-x-auto rounded-xl border border-nebula bg-dark-matter/30 mt-4">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-nebula text-white-photon bg-deep-space/80">
                  <th className="p-3 font-semibold w-1/3">Problemática Identificada</th>
                  <th className="p-3 font-semibold">Estrategia de Mitigación y Gestión del Cambio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nebula/40">
                <tr className="hover:bg-dark-matter/50 transition-colors">
                  <td className="p-3 font-medium text-white-photon flex items-start gap-1.5">
                    <AlertTriangle className="size-4 text-hot-pink shrink-0 mt-0.5" />
                    Déficit Global de Talento Técnico
                  </td>
                  <td className="p-3 leading-relaxed">
                    Integración vertical hacia la educación. Lanzamiento sistemático de Bootcamps corporativos gratuitos 
                    que operan como un filtro de selección y adquisición de talento a costo cero.
                  </td>
                </tr>
                <tr className="hover:bg-dark-matter/50 transition-colors">
                  <td className="p-3 font-medium text-white-photon flex items-start gap-1.5">
                    <AlertTriangle className="size-4 text-hot-pink shrink-0 mt-0.5" />
                    Volatilidad Macroeconómica Nacional
                  </td>
                  <td className="p-3 leading-relaxed">
                    Desacople total del mercado interno mediante exportación pura. Facturación de servicios (Nearshoring 
                    y Staffing) en dólares estadounidenses hacia mercados corporativos internacionales.
                  </td>
                </tr>
                <tr className="hover:bg-dark-matter/50 transition-colors">
                  <td className="p-3 font-medium text-white-photon flex items-start gap-1.5">
                    <AlertTriangle className="size-4 text-hot-pink shrink-0 mt-0.5" />
                    Disrupción Tecnológica por IA
                  </td>
                  <td className="p-3 leading-relaxed">
                    Aceptación proactiva y capitalización del cambio paradigmático. Organización del Primer Hackathon de IA 
                    en 2025 para detectar talento fronterizo y asimilar conocimiento en nuevos servicios corporativos.
                  </td>
                </tr>
                <tr className="hover:bg-dark-matter/50 transition-colors">
                  <td className="p-3 font-medium text-white-photon flex items-start gap-1.5">
                    <AlertTriangle className="size-4 text-hot-pink shrink-0 mt-0.5" />
                    Homonimia Competitiva de Marca
                  </td>
                  <td className="p-3 leading-relaxed">
                    Diferenciación mediante validación empírica y construcción de redes de confianza. Posicionamiento basado 
                    en reseñas B2B independientes (Clutch, DesignRush) y relaciones comerciales presenciales de largo plazo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. PROPUESTA Y APORTE PROFESIONAL */}
        <section className="space-y-4 pt-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">5.</span> Propuesta y Aporte Profesional
          </h4>
          
          <div className="rounded-xl border border-hot-pink/50 bg-hot-pink/5 p-6 space-y-4 transition-all hover:border-hot-pink">
            <div className="flex items-center gap-2.5 text-hot-pink">
              <Shield className="size-5" />
              <h5 className="font-bold text-white-photon text-lg">Institucionalización Estricta de Políticas de Divulgación de Vulnerabilidades (VDP)</h5>
            </div>
            
            <p className="leading-relaxed text-sm">
              La organización exhibe una madurez técnica incuestionable en su infraestructura comercial (<code className="text-white-photon">CloudOps</code>). 
              Sin embargo, el informe pericial revela una vulnerabilidad estructural en su política de código abierto. La carencia de 
              archivos estándar de política de seguridad (<code className="text-white-photon text-xs font-mono bg-dark-matter p-1 rounded">SECURITY.md</code>) 
              en repositorios públicos de GitHub expone a la compañía a riesgos reputacionales y de gestión de dependencias.
            </p>
            
            <p className="leading-relaxed text-sm">
              <strong className="text-cyber-cyan">Aporte Propuesto:</strong> El área técnica debe implementar de inmediato un protocolo 
              estandarizado en todos sus ecosistemas públicos, delimitando canales seguros y encriptados para que investigadores 
              independientes de ciberseguridad reporten fallas de forma ética antes de su explotación. Esta medida es de implementación 
              gratuita y cierra de forma definitiva la brecha de seguridad detectada.
            </p>
          </div>
        </section>

        {/* 6. SÍNTESIS DE LA ORGANIZACIÓN */}
        <section className="space-y-4 pt-4">
          <h4 className="font-exo2 text-lg font-semibold text-white-photon flex items-center gap-2">
            <span className="text-neon-green">6.</span> Síntesis de la Organización Devlights
          </h4>

          <div className="rounded-xl border-l-4 border-neon-green bg-dark-matter/30 p-6 space-y-4">
            <div className="flex items-center gap-2 text-neon-green">
              <FileText className="size-5" />
              <h5 className="font-bold text-white-photon">Resumen Sistémico Integrado</h5>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-star-light">
              <p>
                Devlights se consolida como una organización tecnológica de base argentina, originada en la región del Noreste (NEA) en 2016, 
                que ha logrado trascender exitosamente las limitaciones periféricas para insertarse en las cadenas globales de valor correspondientes 
                a la economía del conocimiento. La evolución ininterrumpida de la compañía, que cruzó la marca crítica de los cien colaboradores 
                en el año 2026, refleja una expansión orgánica anclada en una arquitectura organizacional sistémica, antifrágil y orientada 
                a la hiper-especialización funcional.
              </p>
              <p>
                Desde el punto de vista sociotécnico, la gobernanza institucional es ejecutada por una mesa directiva donde perfiles como el CCO 
                Nicolás Dogi articulan activamente tanto la estrategia comercial transnacional como el ecosistema político y académico local bajo 
                el modelo de la &quot;Triple Hélice&quot;. El flujo operativo interno ha transitado hacia una matriz estructural que fusiona 
                departamentos permanentes, como Recursos Humanos, con células técnicas transitorias. Estas unidades de producción basan su 
                sincronización en el marco ágil de SCRUM, una metodología indispensable que fragmenta el trabajo en iteraciones continuas para 
                reducir asimetrías de información, detectar fallas sistémicas tempranas y facilitar la rotación rápida del rumbo estratégico si 
                el contexto comercial del cliente lo demanda.
              </p>
              <p>
                El núcleo de captura de valor económico de Devlights se encuentra sostenido en un modelo de negocios dual, apoyado mayoritariamente 
                en los servicios de externalización Nearshore y Staff Augmentation. Este esquema proporciona a corporaciones de Estados Unidos un 
                acceso inmediato a ingeniería de software de primer nivel, explotando una tríada de ventajas sistémicas irrefutables: una alineación 
                temporal absoluta gracias a la compatibilidad de husos horarios, una asimilación cultural sin fricciones idiomáticas y un arbitraje 
                de costos sumamente rentable. De este modo, la empresa elude el asfixiante y volátil macroentorno argentino, cobrando tarifas en 
                dólares que aseguran la previsibilidad de sus flujos de caja y permiten la reinversión constante en sus operaciones.
              </p>
              <p>
                Para sostener este nivel de competitividad, la firma diversificó su oferta técnica más allá del desarrollo web básico. La 
                institucionalización de unidades complejas de Aseguramiento de Calidad (QA), Ingeniería de Datos y operaciones en la nube 
                (CloudOps) sobre Amazon Web Services—que avalan matemáticamente tiempos de actividad del 99.99%—demuestran un nivel de consultoría 
                técnica crítica que blinda operativamente a sus socios corporativos.
              </p>
              <p>
                Finalmente, la resiliencia a largo plazo de Devlights radica en su manera de enfrentar las perturbaciones estructurales del mercado 
                mundial. La escasez crónica de programadores a nivel mundial se contrarresta internamente a través de los Devlights IT Bootcamps, 
                una academia gratuita que provee un suministro constante de talento local pre-alineado con la ética laboral de la compañía. 
                Simultáneamente, el cambio de paradigma impuesto por la Inteligencia Artificial no es ignorado, sino asimilado agresivamente mediante 
                estrategias de innovación abierta, como la ejecución regional de Hackathons. Devlights demuestra que el éxito corporativo en la economía 
                contemporánea depende de la interconexión deliberada entre la excelencia técnica algorítmica, la retención de un capital humano 
                motivado y una adaptabilidad estratégica implacable frente a los cisnes negros de la industria.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
