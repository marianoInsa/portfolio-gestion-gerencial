import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Section, SectionHeading } from '@/components/ui/primitives';

export const metadata: Metadata = {
  title: 'TPI — Trabajo Práctico Integrador',
  description:
    'Trabajo Práctico Integrador del equipo Stakeholders. Actualmente en desarrollo.',
};

const sections = [
  {
    id: 'descripcion',
    label: 'Descripción',
    text: 'Descripción general del proyecto integrador, alcance y motivación.',
  },
  {
    id: 'objetivos',
    label: 'Objetivos',
    text: 'Objetivos generales y específicos del trabajo práctico integrador.',
  },
  {
    id: 'entregables',
    label: 'Entregables',
    text: 'Lista de artefactos y documentos que conforman la entrega final.',
  },
  {
    id: 'estado',
    label: 'Estado de avance',
    text: 'Seguimiento del progreso y etapas completadas del proyecto.',
  },
];

export default function TPIPage() {
  return (
    <Section tone="base">
      {/* Breadcrumb */}
      <nav aria-label="Migas de pan" className="text-sm mb-10">
        <ol className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
          <li>
            <Link href="/" className="focus-ring rounded-md hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'var(--color-text)' }} aria-current="page">
            TPI
          </li>
        </ol>
      </nav>

      <div className="max-w-2xl mx-auto text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ backgroundColor: '#FEF9C3', color: '#92400E' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
              clipRule="evenodd"
            />
          </svg>
          En Desarrollo
        </div>

        <SectionHeading
          label="Proyecto"
          title="Trabajo Practico Integrador"
          description="El equipo Stakeholders esta trabajando en el proyecto integrador. Esta pagina se actualizara con el contenido completo a medida que avance el cursado."
          align="center"
          className="mb-12"
        />

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between text-xs font-medium mb-2">
            <span style={{ color: 'var(--color-muted)' }}>Progreso</span>
            <span style={{ color: 'var(--color-cta)' }}>En curso…</span>
          </div>
          <div
            className="w-full rounded-full h-2"
            style={{ backgroundColor: 'var(--color-border)' }}
            role="progressbar"
            aria-label="Progreso del TPI"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-2 rounded-full animate-pulse"
              style={{
                width: '15%',
                background: 'linear-gradient(90deg, var(--color-cta), var(--color-accent))',
              }}
            />
          </div>
        </div>

        {/* Structural sections (dimmed) */}
        <div className="text-left space-y-4" aria-label="Estructura del TPI (pendiente de completar)">
          {sections.map((section, idx) => (
            <Card
              key={section.id}
              variant="outline"
              padding="sm"
              className="flex items-start gap-4 opacity-40"
              aria-hidden="true"
            >
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-secondary)',
                }}
              >
                {idx + 1}
              </span>
              <div>
                <h2
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                >
                  {section.label}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>
                  {section.text}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button
            href="/"
            variant="ghost"
            size="md"
            className="gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Volver al Home
          </Button>
        </div>
      </div>
    </Section>
  );
}
