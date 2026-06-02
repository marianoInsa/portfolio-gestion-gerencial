import React from 'react';
import { ZoomableImage } from '@/components/ui';

export default function Challenge7CausaEfecto() {
  return (
    <div className="mt-8 space-y-6 text-star-light">
      <div className="rounded-xl border border-nebula bg-dark-matter/30 p-6">
        <h3 className="font-exo2 text-xl font-semibold text-cyber-cyan mb-4">Resolución Completa: Caso de estudio "El doctor está......... en"</h3>
        
        <div className="space-y-6">
          <section>
            <p className="mt-2 leading-relaxed">
              Como equipo creemos que agendar el 90% del tiempo del médico con turnos preestablecidos en una clínica pediátrica es un error matemático de diseño. Los niños se enferman sin previo aviso. Si el 90% de la capacidad diaria está bloqueada desde el inicio, cualquier urgencia (de 24 horas o espontánea) colapsará el sistema inevitablemente, generando un retraso en cascada para el resto del día. La congestión no es un accidente de ejecución, es el resultado directo de esta política de turnos.
            </p>
            <p className="mt-2 leading-relaxed">
              Aquí está el desglose estructurado de los factores.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">1. Diagrama de Causa y Efecto (6M)</h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-nebula text-white-photon">
                    <th className="p-2 w-1/4">Categoría</th>
                    <th className="p-2">Causas Identificadas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-nebula/50">
                  <tr>
                    <td className="p-2 font-medium">Métodos</td>
                    <td className="p-2">Agendar el 90% del tiempo del médico; falta de protocolo estricto para derivar casos a enfermería; atención por orden de llegada mezclada con urgencias.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Mano de Obra</td>
                    <td className="p-2">Médicos absorbiendo consultas de baja complejidad que podrían delegarse; personal de archivo lento.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Maquinaria (Infraestructura)</td>
                    <td className="p-2">Consultorios ocupados sin rotación ágil; dependencia de un sistema de archivo físico en lugar de digital.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Materiales</td>
                    <td className="p-2">Historias clínicas que no llegan al escritorio de la enfermera a tiempo (condición excluyente para ingresar al paciente).</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Medición</td>
                    <td className="p-2">Asignación de tiempos de turno irreales que no reflejan la duración verdadera de una consulta pediátrica.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Medio Ambiente</td>
                    <td className="p-2">Sala de espera saturada que genera estrés e interrupciones constantes a los recepcionistas por quejas de los padres.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h5 className="font-medium text-electric-purple mt-6">La "M" Más Crítica: Métodos</h5>
            <p className="mt-2 leading-relaxed">
              El cuello de botella principal radica en los <strong>Métodos</strong>, específicamente en la gestión del flujo de demanda. Optimizar la búsqueda de historias clínicas o limpiar más rápido los consultorios no resolverá el problema de fondo si matemáticamente no hay ancho de banda para absorber la demanda espontánea, la cual es la norma, no la excepción, en pediatría.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">2. Plan de Acción Inmediato</h4>
            <ul className="list-decimal pl-5 mt-3 space-y-2">
              <li><strong>Reducir el tope de turnos programados:</strong> Disminuir el límite de turnos fijos del 90% al 65-70%. El tiempo restante debe dividirse en bloques estratégicos (media mañana y media tarde) reservados exclusivamente para urgencias de 24 horas y demanda espontánea.</li>
              <li><strong>Implementar triaje de enfermería como filtro:</strong> Todo paciente sin turno debe pasar primero por la enfermera de información. Las consultas de baja complejidad (controles rutinarios simples, constancias, dudas menores) deben derivarse a la enfermera que asiste en el consultorio, protegiendo el tiempo del médico para patologías reales.</li>
              <li><strong>Desacoplar la preparación de historias clínicas:</strong> El empleado de archivo debe extraer y apilar el 100% de los expedientes de los pacientes programados el día anterior. Para las urgencias, la búsqueda se activa en el momento en que el paciente cruza la puerta, no cuando el consultorio se vacía.</li>
              <li><strong>Eliminar el orden de llegada absoluto:</strong> Abandonar la regla de "primer llegado, primer atendido" cuando se mezclan flujos. Operar con colas paralelas: el médico alterna un paciente programado con uno de urgencia clasificado por el triaje, evitando que los turnos fijos sufran retrasos irracionales.</li>
            </ul>
            
            <div className="mt-6 border border-nebula/50 rounded-lg p-2 bg-dark-matter/50">
              <ZoomableImage 
                src="/assets/challenges/desafio-7/causa-efecto.webp" 
                alt="Diagrama Causa-Efecto (Clínica Pediátrica)" 
                className="w-full h-auto rounded"
              />
            </div>
          </section>

          <div className="border-t border-nebula/50 my-6 pt-6">
            <h4 className="font-semibold text-neon-green text-xl">Reflexión y Conexión con el TPI (Caso ECOM - Área Comercial)</h4>
            
            <div className="mt-5 space-y-6">
              <div>
                <h5 className="font-medium text-electric-purple text-lg">a) Definiendo la "Cabeza del Pescado" de su TPI</h5>
                <p className="mt-2 leading-relaxed">
                  El problema central exacto y medible que vamos a abordar no es simplemente "la gente está cansada" o "faltan sistemas". Basado en su diagnóstico, la cabeza del pescado es:
                </p>
                <p className="mt-2 leading-relaxed font-medium text-white-photon bg-deep-space/50 p-3 rounded-lg border border-nebula/30">
                  "Cuello de botella operativo y sobrecarga de personal clave por la persistencia de prácticas informales heredadas en la gestión comercial."
                </p>
                <p className="mt-2 leading-relaxed">
                  Es un problema organizacional medible porque se puede cuantificar a través de la distribución desigual de la carga de tickets, el tiempo de ciclo de cada pedido, y el nivel de dependencia hacia personas específicas.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-electric-purple text-lg">b) Mapeando las 6M en su organización</h5>
                <ul className="list-disc pl-5 mt-3 space-y-3">
                  <li>
                    <strong>Sistemas e Información (Medición):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>A la empresa le faltan KPIs de procesos (como el Tiempo Promedio de Ciclo de Pedido o el Índice de Uso de la Capacidad por Rol) para medir la eficiencia real y anticipar cuellos de botella.</li>
                      <li>Carecen de un sistema CRM integral (evidenciado por el nivel "Novato" en Comunicaciones), lo que les impide tener analítica centralizada sobre la relación con los clientes.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Procesos (Métodos):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>Existen rutinas críticas, como las regularizaciones de clientes particulares, que funcionan por tradición oral ("siempre se hizo así") y carecen de manuales o flujos estandarizados.</li>
                      <li>Falta una Matriz de Asignación (Triage o RACI) formal para derivar requerimientos, dependiendo actualmente del conocimiento tácito de la jefatura o la proactividad individual.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tecnología (Maquinaria/Software):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>Aunque el ERP automatiza la creación de presupuestos, no está completamente alineado con el flujo de trabajo: carece de un módulo que conecte automáticamente el presupuesto aprobado con el motor de facturación.</li>
                      <li>Esta brecha obliga a realizar cargas manuales (ej. actualizaciones trimestrales de precios), generando demoras operativas.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Mano de Obra (Personal):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>Existe un desequilibrio de cargas: sobreexplotación del personal más capacitado y subutilización de los menos experimentados por la falta de roles definidos.</li>
                      <li>Riesgo crítico de pérdida del "saber hacer" (know-how) ante retiros planificados, ya que el conocimiento reside en las personas y no en la estructura.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Materiales (Insumos Estructurales/Datos):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>La base organizativa que sostiene al equipo es obsoleta: la estructura formal de puestos data de 1986 y no se revisa integralmente desde 2016.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Medio Ambiente (Entorno y Cultura):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-star-light/90">
                      <li>Aún persisten rezagos de una cultura histórica de "áreas estanco" (islas), lo que exige un esfuerzo constante para evitar fricciones y mantener la trazabilidad formal mediante el sistema de tickets.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-electric-purple text-lg">c) ¿Cuál de las 6M es la verdadera raíz del problema? y ¿Su propuesta de mejora atacará esa M o se quedará en soluciones superficiales?</h5>
                <p className="mt-2 leading-relaxed">
                  La verdadera raíz del problema es <strong>bicausal</strong>: radica en los <strong>Métodos</strong> (cultura de procesos informales y conocimiento tácito) sostenida por una brecha en la <strong>Tecnología</strong> (falta de integración final en el ERP y ausencia de CRM).
                </p>
                <p className="mt-2 leading-relaxed">
                  La propuesta de mejora formulada en el <em>Plan Tri-Etapa</em> <strong>no se queda en soluciones superficiales</strong>, ya que ataca directamente la raíz estructural:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li><strong>En lo metodológico:</strong> Transfiere el conocimiento de las personas a la organización mediante la formalización de roles, auditoría de procesos en UML y la matriz de Triage.</li>
                  <li><strong>En lo tecnológico:</strong> Cierra la brecha desarrollando el módulo integrador ERP-Facturación para eliminar las cargas manuales, e implementa el CRM para centralizar las comunicaciones.</li>
                </ol>
                <p className="mt-2 leading-relaxed">
                  Al capitalizar la tecnología que ECOM ya posee (y madurarla), se estandarizan los procesos blandos, logrando que el software refuerce y exija el cumplimiento de los nuevos métodos formales.
                </p>
                
                <div className="mt-6 border border-nebula/50 rounded-lg p-2 bg-dark-matter/50">
                  <ZoomableImage 
                    src="/assets/challenges/desafio-7/causa-efecto-tpi.webp" 
                    alt="Diagrama Causa-Efecto (TPI ECOM)" 
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
