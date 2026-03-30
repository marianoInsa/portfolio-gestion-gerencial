import { members } from '@/data/team';
import { rpaEntries } from '@/data/rpa';
import { Badge, EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function RPASection() {
  return (
    <SectionWrapper id="rpa">
      <div className="mb-8">
        <GlitchTitle text="Rutas Personales de Aprendizaje" className="text-3xl md:text-5xl" />
        <p className="mt-3 text-star-light">Espacio individual para compartir mapas conceptuales y evolucion profesional.</p>
      </div>

      {rpaEntries.length === 0 ? (
        <div className="space-y-6">
          <EmptyState
            title="Rutas Personales de Aprendizaje"
            message="Cada integrante publicara su RPA en esta seccion durante la cursada."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
            {members.map((member) => (
              <div key={member.id} className="rounded-xl border border-nebula bg-dark-matter/50 p-3 text-center">
                <p className="text-sm font-semibold text-white-photon">{member.firstName}</p>
                <Badge color="purple" className="mt-2">
                  Slot listo
                </Badge>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rpaEntries.map((entry) => (
            <article key={entry.memberId} className="rounded-2xl border border-nebula bg-deep-space/70 p-5">
              <h3 className="font-exo2 text-xl font-semibold text-white-photon">{entry.memberId}</h3>
              <p className="mt-2 text-sm text-star-light">{entry.description ?? 'Mapa conceptual disponible.'}</p>
              <a
                href={entry.conceptMapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-cyber-cyan"
              >
                Ver mapa
              </a>
            </article>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
