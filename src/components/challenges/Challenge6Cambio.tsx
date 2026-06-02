import React from 'react';

export default function Challenge6Cambio() {
  return (
    <div className="mt-8 space-y-6 text-star-light">
      <div className="rounded-xl border border-nebula bg-dark-matter/30 p-6">
        <h3 className="font-exo2 text-xl font-semibold text-cyber-cyan mb-4">Resolución Completa: Caso de estudio "Almacenes del Norte S.A."</h3>
        
        <div className="space-y-6">
          <section>
            <h4 className="font-semibold text-white-photon text-lg">1. Introducción y presentación del caso</h4>
            <p className="mt-2 leading-relaxed">
              El presente trabajo analiza el caso "Almacenes del Norte S.A." desde el enfoque de la Gestión del Cambio, asumiendo el rol de consultores organizacionales. Se trata de una empresa familiar con 40 años de trayectoria, dedicada a la distribución de productos de consumo masivo, con 250 empleados y tres centros de distribución.
            </p>
            <p className="mt-2 leading-relaxed">
              Durante años, la empresa sostuvo su funcionamiento a partir del conocimiento empírico de sus trabajadores, especialmente del personal operativo con mayor antigüedad. Sin embargo, el contexto competitivo y tecnológico actual generó nuevas exigencias: clientes que demandan stock en tiempo real, entregas más rápidas y pedidos automáticos. A esto se sumaron problemas internos, como el aumento de errores de inventario manual.
            </p>
            <p className="mt-2 leading-relaxed">
              Frente a esta situación, la empresa decidió implementar un sistema WMS, destinado a automatizar la gestión de almacenes, reemplazar registros en papel, incorporar escáneres de códigos de barra y actualizar el inventario en tiempo real. Este cambio no era solo tecnológico, sino también cultural, porque implicaba pasar de una lógica basada en la memoria y la experiencia práctica a una gestión basada en datos, trazabilidad y tecnología.
            </p>
            <p className="mt-2 leading-relaxed">
              El problema principal del caso no fue la decisión de incorporar el sistema, sino la forma en que se gestionó el cambio. Valeria, la Directora de Operaciones, priorizó la implementación técnica, pero no preparó adecuadamente a las personas. La falta de comunicación, capacitación, participación y acompañamiento provocó una fuerte resistencia del personal, especialmente de Don Roberto y de los trabajadores veteranos.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">2. Diagnóstico del cambio</h4>
            <h5 className="font-medium text-electric-purple mt-3">2.1. Fuerzas externas e internas que impulsaron el cambio</h5>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-nebula text-white-photon">
                    <th className="p-2">Tipo de fuerza</th>
                    <th className="p-2">Situación identificada</th>
                    <th className="p-2">Impacto en la empresa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-nebula/50">
                  <tr>
                    <td className="p-2 font-medium">Fuerza externa</td>
                    <td className="p-2">Ingreso de un gigante del comercio electrónico con entregas en 24 horas.</td>
                    <td className="p-2">Aumentó la presión competitiva y obligó a mejorar tiempos de entrega.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Fuerza externa</td>
                    <td className="p-2">Clientes corporativos que exigen plataforma web, stock en tiempo real y pedidos automáticos.</td>
                    <td className="p-2">La empresa necesitó modernizar sus procesos para responder a nuevas demandas del mercado.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Fuerza interna</td>
                    <td className="p-2">Pérdidas por errores de inventario manual, que aumentaron un 15% en el último año.</td>
                    <td className="p-2">Evidenció que los procesos manuales ya no eran suficientes.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Fuerza interna</td>
                    <td className="p-2">Advertencia de Valeria al Directorio sobre el riesgo de perder clientes si no se automatizaba el centro de distribución.</td>
                    <td className="p-2">Impulsó la decisión estratégica de invertir en un sistema WMS.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">
              También puede considerarse como fuerza interna la necesidad de modificar una cultura organizacional muy arraigada, basada en la experiencia de memoria del personal antiguo. Ese conocimiento fue valioso durante muchos años, pero comenzó a mostrar limitaciones frente a un entorno que exige información precisa, rapidez y trazabilidad.
            </p>

            <h5 className="font-medium text-electric-purple mt-4">2.2. Tipo de cambio: planeado/proactivo o no planeado/reactivo</h5>
            <p className="mt-2 leading-relaxed">
              El cambio puede considerarse principalmente planeado o proactivo, porque la empresa aprobó un presupuesto específico para implementar el sistema WMS y buscó anticiparse a la posible pérdida de clientes. No se trató de una reacción improvisada, sino de una decisión tomada por el Directorio para modernizar la operación.
            </p>
            <p className="mt-2 leading-relaxed">
              Sin embargo, también tuvo un componente reactivo, ya que la decisión surgió ante presiones concretas: el ingreso de un competidor fuerte, las nuevas exigencias de los clientes y el incremento de errores internos. Por lo tanto, fue un cambio formalmente planeado, pero motivado por una situación crítica que ya estaba afectando la competitividad de la empresa.
            </p>

            <h5 className="font-medium text-electric-purple mt-4">2.3. Cambio brusco o evolutivo</h5>
            <p className="mt-2 leading-relaxed">
              Desde la perspectiva de los empleados, el cambio fue brusco. Valeria comunicó mediante un correo electrónico masivo que en dos semanas el sistema anterior dejaría de funcionar. Ese plazo fue insuficiente para una organización con una cultura tradicional y con gran parte del personal acostumbrado durante años a trabajar con planillas, papel, Excel y conocimiento práctico.
            </p>
            <p className="mt-2 leading-relaxed">
              El impacto de esa velocidad fue negativo: aparecieron rumores, temor, resistencia pasiva, pérdida de productividad, retrasos en pedidos, quejas de clientes y conflicto sindical. Si bien el cambio tecnológico era necesario, debería haberse implementado de manera más gradual, con pruebas piloto, capacitación previa, acompañamiento y participación del personal clave.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">3. Análisis de la resistencia al cambio</h4>
            <h5 className="font-medium text-electric-purple mt-3">3.1. Principales causas humanas y emocionales</h5>
            <p className="mt-2 leading-relaxed mb-3">La resistencia al cambio en Almacenes del Norte S.A. no debe entenderse como una simple oposición a la tecnología. Fue una reacción humana frente a un cambio percibido como amenazante, impuesto y poco explicado.</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li><strong>Miedo a perder el empleo:</strong> Don Roberto instaló el rumor de que el software venía a reemplazar trabajadores.</li>
              <li><strong>Incertidumbre:</strong> Los empleados no recibieron información clara sobre el objetivo del proyecto ni sobre su futuro laboral.</li>
              <li><strong>Falta de capacitación:</strong> Operarios y choferes no se sentían seguros usando escáneres, pantallas táctiles o tablets.</li>
              <li><strong>Hábitos arraigados:</strong> Muchos trabajadores seguían usando cuadernos y registros manuales.</li>
              <li><strong>Pérdida de poder informal:</strong> Don Roberto, como supervisor antiguo y respetado, pudo sentir amenazada su influencia dentro del almacén.</li>
              <li><strong>Desvalorización de la experiencia:</strong> El personal veterano sintió que su conocimiento práctico perdía importancia frente al sistema digital.</li>
            </ul>
            <p className="mt-2 leading-relaxed">En los operarios veteranos predominó una resistencia pasiva: decían que los escáneres fallaban, olvidaban cargarlos y continuaban usando registros manuales. En los choferes, la resistencia se vinculó principalmente con la falta de confianza en el uso de tablets para registrar firmas digitales. En ambos casos, el problema no fue solo técnico, sino emocional y cultural.</p>

            <h5 className="font-medium text-electric-purple mt-4">3.2. Errores cometidos por Valeria</h5>
            <p className="mt-2 leading-relaxed mb-3">Valeria cometió el error central de confundir implementación tecnológica con gestión del cambio. Compró licencias, instaló infraestructura y contrató consultores, pero no preparó adecuadamente a las personas.</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li><strong>Comunicación tardía e impersonal mediante correo masivo:</strong> Aumentó la incertidumbre y no permitió resolver dudas.</li>
              <li><strong>Plazo de solo dos semanas para abandonar el sistema anterior:</strong> Generó presión, ansiedad y rechazo.</li>
              <li><strong>Falta de participación del personal operativo:</strong> El cambio fue percibido como una imposición.</li>
              <li><strong>No involucrar a Don Roberto como líder informal:</strong> Su influencia terminó fortaleciendo la resistencia.</li>
              <li><strong>Ausencia de capacitación progresiva:</strong> Los empleados no desarrollaron seguridad para usar el sistema.</li>
              <li><strong>Falta de contención emocional:</strong> No se trabajaron miedos, rumores ni sensación de amenaza.</li>
              <li><strong>Falta de seguimiento durante la implementación:</strong> La productividad cayó, los pedidos se retrasaron y aumentaron las quejas.</li>
            </ul>
            <p className="mt-2 leading-relaxed">En síntesis, el sistema WMS podía ser beneficioso para la empresa, pero fue implementado sin una estrategia adecuada de comunicación, liderazgo, capacitación y acompañamiento humano.</p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">4. Propuesta de solución: Plan de acción</h4>
            <p className="mt-2 leading-relaxed">Si fuéramos contratados como Directores de Gestión del Cambio, no recomendaríamos abandonar el proyecto WMS, porque responde a una necesidad real de la empresa. La propuesta sería reconducirlo mediante un plan organizado en fases.</p>
            
            <h5 className="font-medium text-electric-purple mt-3">Fase 1: Recomponer la confianza</h5>
            <p className="mt-1 leading-relaxed">La primera acción sería suspender temporalmente el reemplazo total del sistema anterior y establecer una etapa de transición controlada. Durante ese período podrían convivir el sistema anterior y el WMS, mientras se capacita al personal y se corrigen dificultades operativas. También sería necesario realizar reuniones presenciales con los equipos para explicar por qué la empresa necesita cambiar. El mensaje central debería ser claro: el WMS no busca reemplazar personas, sino mejorar procesos, reducir errores y sostener la competitividad.</p>

            <h5 className="font-medium text-electric-purple mt-3">Fase 2: Incorporar a Don Roberto y a referentes internos</h5>
            <p className="mt-1 leading-relaxed">Don Roberto no debería ser tratado como un obstáculo, sino como un actor clave. Por su experiencia y prestigio, conviene convocarlo, escuchar sus preocupaciones y reconocer su conocimiento del almacén. Luego, podría ser incorporado como "embajador del cambio" o usuario clave. Su rol sería participar en pruebas piloto, detectar problemas prácticos, acompañar a otros operarios y ayudar a adaptar el sistema a la realidad del trabajo diario.</p>

            <h5 className="font-medium text-electric-purple mt-3">Fase 3: Capacitación práctica y por roles</h5>
            <p className="mt-1 leading-relaxed">La capacitación debería ser práctica, gradual y diferenciada según cada función. Los operarios tendrían que aprender a usar escáneres, registrar movimientos de mercadería y consultar stock. Los supervisores deberían capacitarse en reportes, control de inventario y resolución de inconsistencias. Los choferes deberían practicar el uso de tablets, firmas digitales y procedimientos frente al cliente. No alcanzaría con explicar el sistema en teoría. Sería necesario realizar simulaciones de tareas reales.</p>

            <h5 className="font-medium text-electric-purple mt-3">Fase 4: Implementación gradual y soporte</h5>
            <p className="mt-1 leading-relaxed">El WMS debería aplicarse primero en un sector piloto o en un centro de distribución reducido. Luego, una vez estabilizado el funcionamiento, se extendería progresivamente al resto de la empresa. Durante las primeras semanas debería funcionar una mesa de ayuda, integrada por personal de sistemas, consultores y usuarios clave.</p>

            <h5 className="font-medium text-electric-purple mt-3">Fase 5: Seguimiento y refuerzo</h5>
            <p className="mt-1 leading-relaxed">Finalmente, la empresa debería medir tanto indicadores operativos como humanos: productividad, errores de inventario, retrasos, reclamos de clientes, asistencia a capacitaciones, adopción del sistema y percepción del personal. Además, sería importante comunicar logros tempranos, como reducción de errores o mejora en tiempos de preparación de pedidos, para reforzar la confianza en el cambio.</p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">5. Modelo de gestión del cambio recomendado</h4>
            <p className="mt-2 leading-relaxed mb-3">El modelo principal que debería haberse aplicado es ADKAR, porque el problema central del caso está en la adopción individual del cambio. El sistema WMS no fracasó por falta de tecnología, sino porque los trabajadores no fueron preparados para comprender, aceptar, aprender, aplicar y sostener la nueva forma de trabajo.</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li><strong>Awareness / Conciencia:</strong> Explicar por qué era necesario cambiar (competencia, clientes, errores).</li>
              <li><strong>Desire / Deseo:</strong> Generar compromiso mostrando beneficios (menos errores, continuidad).</li>
              <li><strong>Knowledge / Conocimiento:</strong> Capacitar sobre el uso del WMS, escáneres, tablets y nuevos procedimientos.</li>
              <li><strong>Ability / Habilidad:</strong> Permitir práctica real, simulaciones, acompañamiento y soporte.</li>
              <li><strong>Reinforcement / Refuerzo:</strong> Reconocer avances, medir resultados, corregir dificultades y consolidar el sistema.</li>
            </ul>
            <p className="mt-2 leading-relaxed">De manera complementaria, también podrían aplicarse elementos del modelo de Kotter, especialmente para crear sentido de urgencia, formar una coalición, comunicar una visión clara y generar logros a corto plazo.</p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">6. Estrategia breve de comunicación y capacitación previa</h4>
            <p className="mt-2 leading-relaxed">En comunicación, el Directorio y Valeria debían presentar formalmente el proyecto a toda la empresa, explicando la situación actual, los riesgos de no cambiar y los beneficios esperados. Luego, se debían realizar reuniones por sector. El mensaje principal debía ser: "El WMS se implementa para mejorar la eficiencia... No se incorpora para reemplazar personas".</p>
            <p className="mt-2 leading-relaxed">En capacitación, se debían organizar instancias prácticas por rol y formar usuarios clave, incluyendo a Don Roberto y otros referentes veteranos, para acompañar a sus compañeros durante la implementación.</p>
          </section>

          <section>
            <h4 className="font-semibold text-white-photon text-lg">7. ¿El proyecto de Valeria es una transformación digital?</h4>
            <p className="mt-2 leading-relaxed">Sí, el proyecto puede considerarse una transformación digital porque no se limita a incorporar una herramienta aislada. La implementación del WMS modifica procesos centrales de la empresa, cambia la forma de registrar inventarios, incorpora datos en tiempo real, automatiza tareas y transforma la relación con los clientes.</p>
            <p className="mt-2 leading-relaxed">Sin embargo, el caso demuestra que transformación digital no es solamente instalar software o dispositivos. También requiere rediseñar procesos, preparar a las personas y modificar la cultura organizacional. Valeria impulsó una transformación digital necesaria, pero la gestionó de manera deficiente porque no acompañó adecuadamente el cambio humano y cultural.</p>
          </section>

          <div className="border-t border-nebula/50 my-6 pt-6">
            <h4 className="font-semibold text-neon-green text-lg">Reflexiones del Equipo</h4>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>¿Por qué las personas suelen resistirse al cambio?</strong> Modifica rutinas, hábitos y espacios de seguridad. Surge por miedo a lo desconocido, falta de información, inseguridad laboral o temor a no estar capacitado.</li>
              <li><strong>¿Todos los cambios organizacionales son positivos?</strong> No por sí mismos. Si se implementan sin planificación ni participación, pueden generar resultados negativos, como ocurrió inicialmente con el WMS.</li>
              <li><strong>¿Qué ocurre cuando una organización no se adapta?</strong> Puede perder competitividad, clientes, eficiencia y sostenibilidad frente a un entorno que exige velocidad y trazabilidad.</li>
              <li><strong>¿La tecnología siempre mejora el trabajo?</strong> No por sí sola. Solo lo hace si está bien implementada, alineada con procesos claros, y si las personas están capacitadas para usarla.</li>
              <li><strong>¿Qué papel tiene el liderazgo en el cambio?</strong> Es central. Los líderes deben comunicar la visión, escuchar temores, generar confianza y acompañar la adaptación. Valeria tuvo visión técnica pero su liderazgo fue insuficiente en lo humano.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
