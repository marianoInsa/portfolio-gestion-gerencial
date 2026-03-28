import type { Desafio, Evidence } from '@/lib/types';
import Link from 'next/link';

interface DesafioTemplateProps {
  desafio: Desafio;
}

const evidenceIcons: Record<Evidence['type'], React.ReactNode> = {
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75-6.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
    </svg>
  ),
  presentation: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.96 3.4 6.75 6.75 0 0 0-1.08-.152.75.75 0 0 0-.63.705v.004c0 .414.336.75.75.75h.008a5.25 5.25 0 0 1 1.297.161 10.527 10.527 0 0 1 4.365-3.569Z" clipRule="evenodd" />
    </svg>
  ),
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
    </svg>
  ),
  other: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
    </svg>
  ),
};

function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${className}`}
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-4">
      <span
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--color-cta)' }}
      >
        {label}
      </span>
      <h2
        className="text-xl font-bold mt-1"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function DesafioTemplate({ desafio }: DesafioTemplateProps) {
  return (
    <article className="section-container py-12 space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Migas de pan" className="text-sm">
        <ol className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
          <li><Link href="/" className="hover:underline cursor-pointer">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/desafios/d3" className="hover:underline cursor-pointer">Desafíos</Link></li>
          <li aria-hidden="true">/</li>
          <li style={{ color: 'var(--color-text)' }} aria-current="page">{desafio.code}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="space-y-3">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: '#EEF2FF', color: 'var(--color-cta)' }}
        >
          {desafio.code}
        </span>
        <h1
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
        >
          {desafio.title}
        </h1>
      </header>

      {/* Problem + Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard>
          <SectionHeading label="Contexto" title="Problema Abordado" />
          <p className="text-sm leading-relaxed" style={{ color: '#52525B' }}>
            {desafio.problem}
          </p>
        </SectionCard>
        <SectionCard>
          <SectionHeading label="Respuesta" title="Solución Propuesta" />
          <p className="text-sm leading-relaxed" style={{ color: '#52525B' }}>
            {desafio.solution}
          </p>
        </SectionCard>
      </div>

      {/* Tools */}
      <SectionCard>
        <SectionHeading label="Stack" title="Herramientas Utilizadas" />
        <div className="flex flex-wrap gap-2">
          {desafio.tools.map((tool) => (
            <span key={tool} className="badge">{tool}</span>
          ))}
        </div>
      </SectionCard>

      {/* Evidences */}
      <SectionCard>
        <SectionHeading label="Recursos" title="Evidencias" />
        {desafio.evidences.length > 0 ? (
          <ul className="space-y-3" role="list">
            {desafio.evidences.map((ev) => (
              <li key={ev.label}>
                <a
                  href={ev.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer transition-colors duration-200 hover:underline"
                  style={{ color: 'var(--color-cta)' }}
                >
                  {evidenceIcons[ev.type]}
                  {ev.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-60" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Las evidencias estarán disponibles una vez completado el desafío.
          </p>
        )}
      </SectionCard>

      {/* Reflection — highlighted block */}
      <section
        className="rounded-2xl border-l-4 p-6"
        style={{
          backgroundColor: '#EEF2FF',
          borderLeftColor: 'var(--color-cta)',
        }}
        aria-labelledby="reflection-heading"
      >
        <div className="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: 'var(--color-cta)' }} aria-hidden="true">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5Z" clipRule="evenodd" />
          </svg>
          <h2
            className="text-base font-bold"
            id="reflection-heading"
            style={{ fontFamily: 'var(--font-heading)', color: '#1E3A8A' }}
          >
            Reflexión del Equipo
          </h2>
        </div>
        <p className="text-sm leading-relaxed italic" style={{ color: '#1E40AF' }}>
          &ldquo;{desafio.reflection}&rdquo;
        </p>
      </section>
    </article>
  );
}
