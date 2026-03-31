import { teamConceptMap } from '@/data/concept-map';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function ConceptMapSection() {
  return (
    <SectionWrapper id="mapa-conceptual">
      <div className="mb-8">
        <GlitchTitle text="Mapa Conceptual" className="text-4xl md:text-5xl" />
      </div>

      {teamConceptMap.isPublished && teamConceptMap.resourceUrl ? (
        <article className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
          <h3 className="font-exo2 text-xl font-semibold text-white-photon">{teamConceptMap.title}</h3>
          <p className="mt-1 text-sm text-star-light">Mapa conceptual del equipo</p>
          <a href={teamConceptMap.resourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
            Ver mapa
          </a>
        </article>
      ) : (
        <EmptyState
          title="Mapa de equipo en preparacion"
          message="El mapa conceptual de equipo se publicara cuando este finalizado en los archivos de datos."
        />
      )}
    </SectionWrapper>
  );
}
