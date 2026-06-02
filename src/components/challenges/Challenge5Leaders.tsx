import { members } from '@/data/team';
import Image from 'next/image';

const leaderDescriptions: Record<string, string> = {
  "De Equipo": "Se centra en la cohesión, el apoyo mutuo y la colaboración del grupo para alcanzar las metas. A diferencia de otros estilos más enfocados en la tarea o en el poder, este líder prioriza el bienestar, la motivación y la sinergia emocional de los miembros, actuando como un facilitador que fomenta un ambiente de confianza y pertenencia.",
  "Democrático": "Toma decisiones de manera participativa, consultando y valorando activamente las opiniones de sus colaboradores antes de definir el rumbo. Se distingue del líder de equipo en que su enfoque principal es el proceso de toma de decisiones por consenso y el fomento de la voz individual, garantizando que todos tengan voto en las acciones a seguir.",
  "Visionario": "Inspira y moviliza a las personas hacia un objetivo a largo plazo compartiendo una imagen clara, apasionante e innovadora del futuro. Su mayor diferencia radica en que no se enfoca en el micro-manejo ni en el paso a paso detallado, sino en contagiar el 'por qué' de las cosas, otorgando libertad sobre el 'cómo' mientras se avance hacia la visión compartida.",
  "Ajeno": "Adopta una postura de mínima intervención, delegando casi por completo la autoridad y la toma de decisiones en los miembros del grupo. Contrasta radicalmente con los demás estilos al otorgar una libertad absoluta, confiando en que el equipo resolverá los problemas por sí mismo e interviniendo únicamente si se le solicita de manera expresa.",
  "Directivo": "Establece reglas claras, expectativas precisas y define exactamente qué, cómo y cuándo deben hacerse las tareas. Se diferencia de los demás porque su enfoque es puramente instructivo y estructurado; busca reducir la ambigüedad guiando de cerca al personal paso a paso, ideal para equipos que requieren dirección constante o en situaciones de crisis.",
  "Autoritario": "Centraliza todo el poder y la toma de decisiones en sí mismo, exigiendo obediencia estricta y sin dar espacio a sugerencias o cuestionamientos. A diferencia del líder directivo (que guía e instruye detalladamente), el autoritario impone su voluntad de forma unilateral, verticalista e indiscutible, priorizando el control total y absoluto sobre el equipo y los procesos.",
};

export default function Challenge5Leaders() {
  return (
    <div className="space-y-8 mt-6">
      <h3 className="font-exo2 text-xl font-semibold text-white-photon">Perfiles de Liderazgo del Equipo</h3>
      {members.map(member => (
        <div key={member.id} className="flex flex-col md:flex-row gap-6 items-start rounded-2xl border border-nebula bg-dark-matter/45 p-6">
          <div className="shrink-0 w-32 h-32 relative rounded-full overflow-hidden border-2 border-cyber-cyan">
            <Image src={member.cartoonPath} alt={member.fullName} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white-photon">{member.fullName}</h4>
            <p className="text-electric-purple text-sm mb-4">{member.leaderDescription}</p>
            <div className="space-y-4">
              {member.leaderLabels.map(label => (
                <div key={label} className="text-sm">
                  <span className="font-semibold text-neon-green uppercase tracking-wider">Líder {label}: </span>
                  <span className="text-star-light">{leaderDescriptions[label]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
