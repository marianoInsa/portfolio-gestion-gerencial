import type { Metadata } from 'next';
import { tpi } from '@/data/tpi';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

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
        {!tpi.isPublished ? (
          <EmptyState
            title="Trabajo Practico Integrador"
            message="Esta seccion esta preparada para publicar el TPI cuando finalice la cursada."
          />
        ) : (
          <article className="rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
            <h2 className="font-exo2 text-3xl font-bold text-white-photon">{tpi.title}</h2>
            <p className="mt-2 text-star-light">{tpi.period}</p>
            <p className="mt-4 leading-relaxed text-star-light">{tpi.description}</p>
            <h3 className="mt-8 font-exo2 text-2xl font-semibold text-cyber-cyan">Reflexion Final</h3>
            <p className="mt-2 leading-relaxed text-star-light">{tpi.reflections}</p>
          </article>
        )}
      </SectionWrapper>
    </main>
  );
}
