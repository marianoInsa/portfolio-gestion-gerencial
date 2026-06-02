import React from 'react';

export default function Challenge7Problem() {
  return (
    <div className="mt-6 space-y-6 text-star-light">
      <div className="rounded-xl border border-nebula bg-dark-matter/30 p-6">
        <h3 className="font-exo2 text-xl font-semibold text-neon-green mb-4">EJERCICIO B - EL DOCTOR ESTÁ......... EN</h3>
        
        <div className="space-y-4">
          <p className="leading-relaxed">
            El grupo de profesionales de la pediatría de nuestra ciudad ha estado enfrentando el continuo problema de la multitud en la sala de espera con muchos pequeños pacientes teniendo que esperar largos períodos de tiempo para ser atendidos. Un equipo de <em className="text-white-photon">Mejoramiento de Calidad</em> ha sido formado para reducir el tiempo que un paciente debe esperar para ser atendido una vez que ella o él llegue.
          </p>
          
          <p className="leading-relaxed">
            Los pacientes vistos en la oficina incluyen aquellos que tienen turnos preestablecidos, aquellos que han solicitado turnos de urgencia en las últimas veinticuatro horas y aquellos sin turno previo que quieren ser atendidos por presuntas urgencias. Los pacientes no son llevados al consultorio hasta que:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Un consultorio está vacante.</li>
            <li>Los informes médicos anteriores del paciente están en el escritorio de la enfermera.</li>
            <li>El Doctor que revisará al paciente estará en el consultorio. Una vez que las condiciones están reunidas la práctica general es tomar los pacientes en orden de llegada, a menos que un médico o una enfermera cambien las prioridades por la urgencia de la condición particular del enfermo.</li>
          </ul>

          <p className="leading-relaxed">
            El primer paso es la comprensión del problema, el equipo está preparando la elaboración de un <strong className="text-white-photon">diagrama de causa y efecto de los factores que provocan los largos tiempos de espera</strong>. El equipo está compuesto de un recepcionista, un médico, una enfermera de información, un empleado de archivo de historias clínicas y una enfermera que asiste en el consultorio.
          </p>

          <p className="leading-relaxed">
            Cuando comienza la reunión el facilitador recuerda al equipo que deben ser creativos en pensar las posibles causas de los tiempos de espera. El equipo debe considerar todos los factores y no sentirse limitado a la condición y conducta del paciente, la disponibilidad de consultorio, la disponibilidad del personal y el archivo de los informes médicos. El equipo no debe olvidar las prácticas y procedimientos programados, tales como:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>La decisión si el paciente debe ver al médico ó a la enfermera y</li>
            <li>La práctica de otorgar turnos hasta un 90 % del tiempo disponible del médico al comienzo del día.</li>
          </ul>

          <div className="mt-6 border-t border-nebula/50 pt-4">
            <p className="leading-relaxed">
              <strong className="text-hot-pink">🎯 Reto.</strong> Trabajar como miembro del equipo asignado para solucionar este problema, abordando los roles respectivos (se pueden crear más roles). Utilizar la información anterior como también sus propias experiencias y conjeturas acerca de cómo este proceso debe funcionar. Preparar, como grupo, un diagrama de causa y efecto (identificar las 4 o 6 M) que recopile la amplia variedad de teorías acerca de los largos tiempos de espera. <strong className="text-white-photon">Identificar la M más crítica y luego redactar una conclusión o plan de acción rápido atacando la M más crítica.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
