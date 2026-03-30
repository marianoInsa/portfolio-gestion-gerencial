import { teamConceptMap } from '@/data/concept-map';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function ConceptMapSection() {
  return (
    <SectionWrapper id="mapa-conceptual">
      <div className="mb-8">
        <GlitchTitle text="Mapa Conceptual" className="text-4xl md:text-5xl" />
      </div>

      {!teamConceptMap.isPublished ? (
        <EmptyState
          title="Mapa Conceptual del Equipo"
          message="El mapa conceptual del equipo estara disponible al finalizar la cursada."
        />
      ) : (
        <article className="rounded-2xl border border-nebula bg-deep-space/70 p-6">
          <h3 className="font-exo2 text-2xl font-semibold text-white-photon">{teamConceptMap.title}</h3>
          <p className="mt-2 text-star-light">Vista del mapa conceptual compartido por el equipo.</p>
          <a
            href={teamConceptMap.resourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-cyber-cyan"
          >
            Abrir recurso
          </a>
        </article>
      )}
    </SectionWrapper>
  );
}
