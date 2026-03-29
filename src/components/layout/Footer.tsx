import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t"
      style={{
        backgroundColor: 'var(--color-primary)',
        borderColor: '#27272A',
        color: '#A1A1AA',
      }}
      role="contentinfo"
    >
      <div className="section-container section-y-tight">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2
              className="text-lg font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: '#FAFAFA' }}
            >
              Stakeholders
            </h2>
            <p className="max-w-xs text-sm leading-relaxed">
              Equipo de trabajo de la cátedra{' '}
              <span className="font-medium" style={{ color: '#D4D4D8' }}>
                Gestión Gerencial
              </span>
              .
            </p>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: '#71717A' }}
            >
              Navegación
            </h3>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: '/', label: 'Home' },
                { href: '/desafios/d3', label: 'Desafíos' },
                { href: '/tpi', label: 'TPI' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-md transition-colors duration-200 hover:text-white"
                    style={{ color: '#A1A1AA' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: '#71717A' }}
            >
              Info Académica
            </h3>
            <ul className="space-y-1 text-sm" role="list">
              <li>Gestión Gerencial</li>
              <li style={{ color: '#D4D4D8' }}>Ingeniería en Sistemas de Información</li>
              <li>UTN · Facultad Regional</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-2 border-t pt-6 text-xs sm:flex-row"
          style={{ borderColor: '#27272A' }}
        >
          <p>© {year} Stakeholders. Todos los derechos reservados.</p>
          <p>Gestión Gerencial — Ingeniería en Sistemas de Información</p>
        </div>
      </div>
    </footer>
  );
}
