import TeamCard from '@/components/ui/TeamCard';
import EmptyState from '@/components/ui/EmptyState';
import { teamMembers } from '@/lib/data';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import { Card, Section, SectionHeading } from '@/components/ui/primitives';

export const metadata = {
  title: 'Home',
  description:
    'Conoce al equipo Stakeholders: Insaurralde, Fernandez, Philippe, Sanchez y Acosta - Gestion Gerencial, Ingenieria en Sistemas.',
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <div className="relative z-10" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Section id="equipo" tone="base" ariaLabelledBy="team-heading">
          <SectionHeading
            label="Nuestro Equipo"
            title="Los integrantes de Stakeholders"
            description="Un equipo diverso con competencias complementarias, orientado a resolver desafios de gestion con vision tecnica."
            align="center"
            titleId="team-heading"
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Section>

        <div className="section-container">
          <hr style={{ borderColor: 'var(--color-border)' }} />
        </div>

        <Section tone="base" ariaLabelledBy="desafios-heading">
          <SectionHeading
            label="Trabajo Practico"
            title="Desafios Desarrollados"
            description="Resolucion de casos y problemas de gestion a lo largo de la cursada."
            titleId="desafios-heading"
            className="mb-8"
          />

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {['D3', 'D4', 'D5', 'D6', 'D7'].map((code) => (
              <Link
                key={code}
                href={`/desafios/${code.toLowerCase()}`}
                className="focus-ring group"
              >
                <Card
                  variant="outline"
                  padding="sm"
                  className="flex min-h-28 flex-col items-center justify-center text-center transition-colors duration-200 group-hover:border-blue-200"
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}
                  >
                    {code}
                  </span>
                  <span className="mt-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                    Desafio
                  </span>
                  <span className="mt-2 text-xs font-medium" style={{ color: 'var(--color-cta)' }}>
                    Ver
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <EmptyState
            title="Desafios en curso"
            description="Las resoluciones de cada desafio se publicaran a medida que el equipo avance en la cursada."
            icon="clock"
          />
        </Section>

        <Section tone="base" ariaLabelledBy="rpa-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
          <SectionHeading
            label="Aprendizaje"
            title="RPA - Ruta Personal de Aprendizaje"
            description="Mapas conceptuales individuales que reflejan el recorrido de aprendizaje de cada integrante."
            titleId="rpa-heading"
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} variant="outline" padding="sm" className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                  style={{
                    background: 'linear-gradient(135deg,#EEF2FF,#C7D2FE)',
                    color: '#3730A3',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {member.firstName.charAt(0)}
                  {member.lastName.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    {member.fullName}
                  </p>
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    Mapa pendiente
                  </span>
                </div>
                <span
                  className="ml-auto flex-shrink-0 rounded-full px-2 py-0.5 text-xs"
                  style={{ backgroundColor: '#FEF9C3', color: '#92400E' }}
                >
                  Pronto
                </span>
              </Card>
            ))}
          </div>
        </Section>

        <Section tone="base" ariaLabelledBy="mapa-heading" className="border-t" style={{ borderColor: 'var(--color-border)' }}>
          <SectionHeading
            label="Sintesis"
            title="Mapa Conceptual General"
            description="Mapa conceptual integrador del equipo al cierre de la cursada."
            titleId="mapa-heading"
            className="mb-8"
          />

          <EmptyState
            title="Mapa Conceptual del Equipo"
            description="El mapa conceptual integrador estara disponible al finalizar el cursado y condensara los aprendizajes colectivos del equipo Stakeholders."
            icon="map"
          />
        </Section>
      </div>
    </>
  );
}
