import { rpaEntries } from '@/data/rpa';
import { members } from '@/data/team';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function RPASection() {
  const entries = rpaEntries.map((entry) => ({
    ...entry,
    memberName: members.find((member) => member.id === entry.memberId)?.fullName ?? entry.memberId,
  }));

  return (
    <SectionWrapper id="rpa">
      <div className="mb-8">
        <GlitchTitle text="Rutas Personales de Aprendizaje" className="text-3xl md:text-5xl" />
        <p className="mt-3 text-star-light">Consulta de mapas conceptuales individuales publicados por integrante.</p>
      </div>

      {entries.length === 0 ? (
        <EmptyState
          title="Mapas individuales en progreso"
          message="Las rutas personales se iran publicando desde los archivos de datos del proyecto."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <article key={`${entry.memberId}-${entry.uploadedAt}`} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
              <h3 className="font-exo2 text-lg font-semibold text-white-photon">{entry.memberName}</h3>
              <p className="mt-1 text-sm text-star-light">{entry.description || 'Mapa conceptual individual'}</p>
              <a href={entry.conceptMapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
                Ver mapa
              </a>
            </article>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
