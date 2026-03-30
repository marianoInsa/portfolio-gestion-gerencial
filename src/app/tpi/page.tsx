import type { Metadata } from 'next';
import { tpi } from '@/data/tpi';
import { GlitchTitle, SectionWrapper } from '@/components/ui';
import TpiCrudSection from '@/components/sections/TpiCrudSection';

export const metadata: Metadata = {
  title: 'TPI',
  description: 'Trabajo Practico Integrador del equipo Stakeholders.',
};

export default function TpiPage() {
  return (
    <main>
      <SectionWrapper className="pt-16">
        <GlitchTitle text="Trabajo Practico Integrador" as="h1" className="text-4xl md:text-6xl" />
      </SectionWrapper>

      <SectionWrapper>
        <TpiCrudSection initialItems={[{ ...tpi, id: 'tpi-inicial' }]} />
      </SectionWrapper>
    </main>
  );
}
