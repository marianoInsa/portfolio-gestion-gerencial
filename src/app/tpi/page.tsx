import type { Metadata } from 'next';
import { tpi } from '@/data/tpi';
import { GlitchTitle, SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'TPI',
  description: 'Trabajo Practico Integrador del equipo Stakeholders.',
};

export default function TpiPage() {
  return (
    <main>
      <SectionWrapper className="pt-16">
        <GlitchTitle
          text="Trabajo Practico Integrador"
          as="h1"
          className="text-[clamp(2rem,10vw,3rem)] md:text-6xl"
        />
      </SectionWrapper>

      <SectionWrapper>
        <article className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
          <h2 className="font-exo2 text-3xl font-semibold text-white-photon">{tpi.title}</h2>
          <p className="mt-2 text-sm text-star-light">{tpi.period}</p>

          {tpi.isPublished ? (
            <>
              <p className="mt-4 text-star-light">{tpi.description}</p>
              <p className="mt-4 text-star-light">{tpi.reflections}</p>
            </>
          ) : (
            <p className="mt-4 text-star-light">
              El TPI esta en construccion.
            </p>
          )}
        </article>
      </SectionWrapper>
    </main>
  );
}
