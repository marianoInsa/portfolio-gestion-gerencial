import type { Metadata } from 'next';
import { challenges } from '@/data/challenges';
import { ChallengePreviewCard, EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

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
            title="Sin desafios publicados"
            message="Todavia no hay desafios cargados. Vuelve pronto para ver nuevos avances."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orderedChallenges.map((challenge) => (
              <ChallengePreviewCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}
