'use client';

import { useEffect, useRef, useState } from 'react';
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

const navItemClass =
  'focus-ring inline-flex min-h-10 items-center px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desafiosOpen, setDesafiosOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDesafiosOpen(false);
      }
    };

    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  useEffect(() => {
    if (desafiosOpen) {
      firstMenuItemRef.current?.focus();
    }
  }, [desafiosOpen]);

  const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      setDesafiosOpen(true);
    }

    if (event.key === 'Escape') {
      setDesafiosOpen(false);
      (event.currentTarget as HTMLButtonElement).focus();
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(250,250,250,0.9)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--color-border)',
      }}
      role="banner"
    >
      <div className="section-container flex min-h-16 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-xl" aria-label="Stakeholders - Inicio">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg flex-shrink-0" style={{ background: 'var(--color-primary)' }}>
            <Image
              src="/assets/logo.webp"
              alt="Stakeholders logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span
            className="hidden text-lg font-semibold tracking-tight sm:block"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Stakeholders
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          <NavLink href="/" isActive={isActive('/')}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setDesafiosOpen(true)}
            onMouseLeave={() => setDesafiosOpen(false)}
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() => setDesafiosOpen((value) => !value)}
              onKeyDown={handleDropdownKeyDown}
              className={navItemClass}
              style={{
                color: pathname.startsWith('/desafios') ? 'var(--color-cta)' : 'var(--color-secondary)',
                backgroundColor: pathname.startsWith('/desafios') ? '#EEF2FF' : 'transparent',
              }}
              aria-haspopup="menu"
              aria-expanded={desafiosOpen}
              aria-controls="desafios-menu"
            >
              Desafios
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {desafiosOpen ? (
              <div
                id="desafios-menu"
                className="absolute left-0 top-full mt-1 w-36 overflow-hidden rounded-xl border shadow-lg"
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                role="menu"
              >
                {desafioLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="focus-ring block px-4 py-2 text-sm font-medium transition-colors duration-150"
                    style={{
                      color: isActive(link.href) ? 'var(--color-cta)' : 'var(--color-secondary)',
                      backgroundColor: isActive(link.href) ? '#EEF2FF' : 'transparent',
                    }}
                    role="menuitem"
                    ref={index === 0 ? firstMenuItemRef : undefined}
                    onClick={() => setDesafiosOpen(false)}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setDesafiosOpen(false);
                      }
                    }}
                  >
                    Desafio {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <NavLink href="/tpi" isActive={isActive('/tpi')}>
            TPI
          </NavLink>
        </nav>

        <button
          type="button"
          className="focus-ring md:hidden p-2 rounded-xl transition-colors duration-200 min-h-10 min-w-10"
          style={{ color: 'var(--color-secondary)' }}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-4 pb-4 pt-2 space-y-1"
          style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          role="navigation"
          aria-label="Menu movil"
        >
          <MobileNavLink href="/" onClick={() => setMenuOpen(false)} isActive={isActive('/')}>
            Home
          </MobileNavLink>

          <div className="pl-2">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
              Desafios
            </p>
            {desafioLinks.map((link) => (
              <MobileNavLink key={link.href} href={link.href} onClick={() => setMenuOpen(false)} isActive={isActive(link.href)}>
                Desafio {link.label}
              </MobileNavLink>
            ))}
          </div>

          <MobileNavLink href="/tpi" onClick={() => setMenuOpen(false)} isActive={isActive('/tpi')}>
            TPI
          </MobileNavLink>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={navItemClass}
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
      className="focus-ring block min-h-10 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
      style={{
        color: isActive ? 'var(--color-cta)' : 'var(--color-secondary)',
        backgroundColor: isActive ? '#EEF2FF' : 'transparent',
      }}
    >
      {children}
    </Link>
  );
}
