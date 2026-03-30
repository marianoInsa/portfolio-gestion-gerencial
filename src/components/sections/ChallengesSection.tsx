import { challenges } from '@/data/challenges';
import { ChallengePreviewCard, EmptyState, GlitchTitle, NeonButton, SectionWrapper } from '@/components/ui';

export default function ChallengesSection() {
  return (
    <SectionWrapper id="desafios">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <GlitchTitle text="Desafios" className="text-4xl md:text-5xl" />
          <p className="mt-3 text-star-light">Total publicados: {challenges.length}</p>
        </div>
        <NeonButton href="/desafios" variant="secondary">
          Ver todos
        </NeonButton>
      </div>

      {challenges.length === 0 ? (
        <EmptyState
          title="Desafios en progreso"
          message="Los desafios se iran publicando a medida que avance la cursada."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.slice(0, 3).map((challenge) => (
            <ChallengePreviewCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
