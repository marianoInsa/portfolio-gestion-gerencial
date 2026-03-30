import type { Metadata } from 'next';
import { challenges } from '@/data/challenges';
import { GlitchTitle, SectionWrapper } from '@/components/ui';
import ChallengesCrudSection from '@/components/sections/ChallengesCrudSection';

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
        <ChallengesCrudSection initialChallenges={orderedChallenges} />
      </SectionWrapper>
    </main>
  );
}
