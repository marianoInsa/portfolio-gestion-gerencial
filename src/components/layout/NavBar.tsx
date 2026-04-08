'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { TEAM_NAME } from '@/data/team';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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
        <Link href="/" className="inline-flex min-h-11 items-center font-orbitron text-lg font-black tracking-wider text-cyber-cyan">
          {TEAM_NAME}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative inline-flex min-h-11 min-w-11 items-center justify-center px-2 py-2 text-sm font-semibold uppercase tracking-wide text-star-light transition-colors hover:text-cyber-cyan',
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-lg border border-nebula bg-dark-matter/40 text-white-photon hover:border-cyber-cyan hover:text-cyber-cyan md:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </SheetTrigger>
          <SheetContent side="right" className="border-nebula bg-deep-space text-white-photon">
            <SheetHeader>
              <SheetTitle className="font-orbitron tracking-wide text-cyber-cyan">{TEAM_NAME}</SheetTitle>
              <SheetDescription className="text-star-light">Navegacion principal del micrositio.</SheetDescription>
            </SheetHeader>

            <ul className="mt-6 space-y-2 px-4">
              {navItems.map((item) => {
                const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex min-h-11 items-center rounded-md border border-transparent px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-star-light transition-colors hover:border-nebula hover:bg-dark-matter/50 hover:text-cyber-cyan',
                        isActive && 'border-nebula bg-dark-matter/60 text-cyber-cyan'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
