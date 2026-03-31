import type { Metadata } from 'next';
import Link from 'next/link';
import { challenges } from '@/data/challenges';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Desafios',
  description: 'Listado de desafios academicos del equipo Stakeholders.',
};

export default function DesafiosPage() {
  const orderedChallenges = [...challenges].sort((a, b) => a.number - b.number);

  return (
    <main>
      <SectionWrapper className="pt-16">
        <GlitchTitle text="DESAFIOS" as="h1" className="text-5xl md:text-6xl" />
        <p className="mt-4 max-w-2xl text-star-light">
          Registro cronologico de desafios, decisiones, evidencias y aprendizajes del equipo.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        {orderedChallenges.length === 0 ? (
          <EmptyState
            title="Desafios en progreso"
            message="Los desafios se publicaran desde los archivos de datos cuando haya nuevas entregas."
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {orderedChallenges.map((challenge) => (
              <article key={challenge.id} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
                <div>
                  <p className="font-mono text-xs text-neon-green">DESAFIO #{String(challenge.number).padStart(2, '0')}</p>
                  <h2 className="mt-1 font-exo2 text-xl font-semibold text-white-photon">{challenge.title}</h2>
                  <p className="mt-1 text-sm text-star-light">{challenge.period}</p>
                </div>

                <p className="mt-3 text-sm text-star-light">{challenge.problem}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {challenge.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-nebula px-2 py-1 text-xs text-star-light">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/desafios/${challenge.id}`} className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
                  Ver detalle
                </Link>
              </article>
            ))}
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}
