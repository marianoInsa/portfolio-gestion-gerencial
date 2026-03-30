'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TEAM_NAME } from '@/data/team';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Desafios', href: '/desafios' },
  { label: 'TPI', href: '/tpi' },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Navegacion principal"
      className="sticky top-0 z-50 border-b border-nebula/70 bg-void-black/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-orbitron text-lg font-black tracking-wider text-cyber-cyan">
          {TEAM_NAME}
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-nebula text-white-photon md:hidden"
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative py-2 text-sm font-semibold uppercase tracking-wide text-star-light transition-colors hover:text-cyber-cyan',
                    isActive && 'text-cyber-cyan'
                  )}
                >
                  {item.label}
                  {isActive ? <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyber-cyan" /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {open ? (
        <div className="border-t border-nebula bg-dark-matter/95 px-4 py-3 md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-star-light transition-colors hover:bg-nebula/40 hover:text-cyber-cyan',
                      isActive && 'bg-nebula/40 text-cyber-cyan'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
