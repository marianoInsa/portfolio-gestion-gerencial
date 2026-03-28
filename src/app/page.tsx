import TeamCard from '@/components/ui/TeamCard';
import EmptyState from '@/components/ui/EmptyState';
import { teamMembers } from '@/lib/data';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';

export const metadata = {
  title: 'Home',
  description:
    'Conocé al equipo Stakeholders: Insaurralde, Fernandez, Philippe, Sanchez y Acosta — Gestión Gerencial, Ingeniería en Sistemas.',
};

export default function HomePage() {
  return (
    <>
      {/* ────── HERO ────── */}
      <HeroBanner />

      {/* ── Content below hero — solid bg to cover the fixed WebGL canvas ── */}
      <div className="relative z-10" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* ────── TEAM GRID ────── */}
      <section
        id="equipo"
        className="section-container py-16 md:py-20"
        aria-labelledby="team-heading"
      >
        <div className="mb-10 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-cta)' }}
          >
            Nuestro Equipo
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold mt-2"
            id="team-heading"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Los integrantes de Stakeholders
          </h2>
          <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
            Un equipo diverso con competencias complementarias, orientado a resolver desafíos de gestión con visión técnica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* ────── DIVIDER ────── */}
      <div className="section-container">
        <hr style={{ borderColor: 'var(--color-border)' }} />
      </div>

      {/* ────── DESAFÍOS SECTION (Empty) ────── */}
      <section
        className="section-container py-16"
        aria-labelledby="desafios-heading"
      >
        <div className="mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-cta)' }}
          >
            Trabajo Práctico
          </span>
          <h2
            className="text-2xl font-bold mt-2"
            id="desafios-heading"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Desafíos Desarrollados
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
            Resolución de casos y problemas de gestión a lo largo de la cursada.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {['D3', 'D4', 'D5', 'D6', 'D7'].map((code) => (
            <Link
              key={code}
              href={`/desafios/${code.toLowerCase()}`}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-200 cursor-pointer hover:border-blue-200"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <span
                className="text-2xl font-bold transition-colors duration-200"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}
              >
                {code}
              </span>
              <span className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                Desafío
              </span>
              <span
                className="mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium"
                style={{ color: 'var(--color-cta)' }}
              >
                Ver →
              </span>
            </Link>
          ))}
        </div>
        <EmptyState
          title="Desafíos en curso"
          description="Las resoluciones de cada desafío se publicarán a medida que el equipo avance en la cursada."
          icon="clock"
        />
      </section>

      {/* ────── RPA ────── */}
      <section
        className="section-container py-16"
        aria-labelledby="rpa-heading"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-cta)' }}
          >
            Aprendizaje
          </span>
          <h2
            className="text-2xl font-bold mt-2"
            id="rpa-heading"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            RPA — Ruta Personal de Aprendizaje
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
            Mapas conceptuales individuales que reflejan el recorrido de aprendizaje de cada integrante.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-3 p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg,#EEF2FF,#C7D2FE)',
                  color: '#3730A3',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {member.firstName.charAt(0)}{member.lastName.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: 'var(--color-text)' }}>
                  {member.fullName}
                </p>
                <span
                  className="text-xs"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Mapa pendiente
                </span>
              </div>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#FEF9C3', color: '#92400E' }}
              >
                Pronto
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ────── MAPA CONCEPTUAL GENERAL ────── */}
      <section
        className="section-container py-16"
        aria-labelledby="mapa-heading"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--color-cta)' }}
          >
            Síntesis
          </span>
          <h2
            className="text-2xl font-bold mt-2"
            id="mapa-heading"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Mapa Conceptual General
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
            Mapa conceptual integrador del equipo al cierre de la cursada.
          </p>
        </div>
        <EmptyState
          title="Mapa Conceptual del Equipo"
          description="El mapa conceptual integrador estará disponible al finalizar el cursado y condensará los aprendizajes colectivos del equipo Stakeholders."
          icon="map"
        />
      </section>
      </div>
    </>
  );
}

