'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const desafioLinks = [
  { href: '/desafios/d3', label: 'D3' },
  { href: '/desafios/d4', label: 'D4' },
  { href: '/desafios/d5', label: 'D5' },
  { href: '/desafios/d6', label: 'D6' },
  { href: '/desafios/d7', label: 'D7' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desafiosOpen, setDesafiosOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(250,250,250,0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--color-border)',
      }}
      role="banner"
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Stakeholders - Inicio"
        >
          <div
            className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0"
            style={{ background: 'var(--color-primary)' }}
          >
            <Image
              src="/assets/logo.webp"
              alt="Stakeholders logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span
            className="text-lg font-semibold tracking-tight hidden sm:block"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Stakeholders
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          <NavLink href="/" isActive={isActive('/')} exact>
            Home
          </NavLink>

          {/* Desafíos Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setDesafiosOpen(true)}
              onMouseLeave={() => setDesafiosOpen(false)}
              onClick={() => setDesafiosOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{
                color: pathname.startsWith('/desafios')
                  ? 'var(--color-cta)'
                  : 'var(--color-secondary)',
              }}
              aria-haspopup="true"
              aria-expanded={desafiosOpen}
            >
              Desafíos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {desafiosOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-36 rounded-xl shadow-lg border overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
                onMouseEnter={() => setDesafiosOpen(true)}
                onMouseLeave={() => setDesafiosOpen(false)}
                role="menu"
              >
                {desafioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer"
                    style={{
                      color: isActive(link.href)
                        ? 'var(--color-cta)'
                        : 'var(--color-secondary)',
                      backgroundColor: isActive(link.href)
                        ? '#EEF2FF'
                        : 'transparent',
                    }}
                    role="menuitem"
                    onClick={() => setDesafiosOpen(false)}
                  >
                    Desafío {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/tpi" isActive={isActive('/tpi')}>
            TPI
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200"
          style={{ color: 'var(--color-secondary)' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-4 pb-4 pt-2 space-y-1"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
          role="navigation"
          aria-label="Menú móvil"
        >
          <MobileNavLink href="/" onClick={() => setMenuOpen(false)} isActive={isActive('/')}>
            Home
          </MobileNavLink>
          <div className="pl-2">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted)' }}>
              Desafíos
            </p>
            {desafioLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                isActive={isActive(link.href)}
              >
                Desafío {link.label}
              </MobileNavLink>
            ))}
          </div>
          <MobileNavLink href="/tpi" onClick={() => setMenuOpen(false)} isActive={isActive('/tpi')}>
            TPI
          </MobileNavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  isActive,
  children,
  exact: _exact,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  exact?: boolean;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
      style={{
        color: isActive ? 'var(--color-cta)' : 'var(--color-secondary)',
        backgroundColor: isActive ? '#EEF2FF' : 'transparent',
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
      style={{
        color: isActive ? 'var(--color-cta)' : 'var(--color-secondary)',
        backgroundColor: isActive ? '#EEF2FF' : 'transparent',
      }}
    >
      {children}
    </Link>
  );
}
