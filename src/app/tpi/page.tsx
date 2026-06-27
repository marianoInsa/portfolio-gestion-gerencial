import type { Metadata } from 'next';
import { tpi } from '@/data/tpi';
import { SectionWrapper } from '@/components/ui';
import TPIHero from '@/components/tpi/TPIHero';
import TPIInfographic from '@/components/tpi/TPIInfographic';
import TPISectionCard from '@/components/tpi/TPISectionCard';
import TPIClosingQuote from '@/components/tpi/TPIClosingQuote';

export const metadata: Metadata = {
  title: 'Trabajo Práctico Integrador',
  description: 'Desarrollo, diagnóstico de procesos e integración técnica en ECOM Chaco S.A. por el equipo Stakeholders.',
};

export default function TpiPage() {
  const sections = tpi.sections || [];

  return (
    <main className="min-h-screen pb-16">
      {/* Cabecera / Hero */}
      <TPIHero
        title={tpi.title}
        description={tpi.description}
        period={tpi.period}
      />

      {/* Sección 1: Infografía de Síntesis */}
      {tpi.infographicPath && (
        <SectionWrapper className="py-10 md:py-14">
          <TPIInfographic
            src={tpi.infographicPath}
            alt="Mapa de Síntesis del Proyecto - Diagnóstico a Transformación Organizacional"
          />
        </SectionWrapper>
      )}

      {/* Sección 2: Desarrollo del Proyecto en Timeline Vertical */}
      {sections.length > 0 && (
        <SectionWrapper id="desarrollo-tpi" className="py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center md:text-left">
              <h3 className="font-orbitron text-lg font-bold uppercase tracking-wider text-electric-purple">
                Desarrollo del Proyecto
              </h3>
              <p className="mt-2 text-sm text-star-light">
                Etapas detalladas de diagnóstico, ingeniería de procesos, propuesta técnica y gestión del cambio.
              </p>
            </div>

            <div className="relative mt-8">
              {sections.map((section, index) => (
                <TPISectionCard
                  key={section.id}
                  section={section}
                  isLast={index === sections.length - 1}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Cita de Cierre y Reflexión */}
      <SectionWrapper className="py-10">
        <div className="mx-auto max-w-4xl">
          {tpi.closingQuote && <TPIClosingQuote quote={tpi.closingQuote} />}
          
          <div className="mt-12 rounded-2xl border border-nebula/40 bg-dark-matter/30 p-6 md:p-8 backdrop-blur-sm">
            <h4 className="font-exo2 text-lg font-bold text-white-photon mb-3">
              Reflexión General del Equipo
            </h4>
            <p className="text-sm leading-relaxed text-star-light">
              {tpi.reflections}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
