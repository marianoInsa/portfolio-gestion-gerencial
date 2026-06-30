'use client';

import type { CSSProperties } from 'react';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

export interface RPACardData {
  memberId: string;
  fullName: string;
  firstName: string;
  avatarPath: string;
  infographicPath: string;
}

interface RPAStackedCarouselProps {
  entries: RPACardData[];
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/** Compute stacking depth: 0 = active, 1 = first behind, 2 = second behind, etc. */
function stackDepth(index: number, activeIndex: number, total: number): number {
  return mod(index - activeIndex, total);
}

/** CSS transforms for each depth level */
function getCardStyle(depth: number, total: number): CSSProperties {
  const maxVisible = Math.min(3, total);

  if (depth === 0) {
    return {
      zIndex: 30,
      transform: 'translateX(0) translateY(0) scale(1)',
      opacity: 1,
      pointerEvents: 'auto',
    };
  }

  if (depth === 1) {
    return {
      zIndex: 20,
      transform: 'translateX(8px) translateY(10px) scale(0.95)',
      opacity: 0.7,
      pointerEvents: 'none',
    };
  }

  if (depth === 2) {
    return {
      zIndex: 10,
      transform: 'translateX(16px) translateY(20px) scale(0.90)',
      opacity: 0.4,
      pointerEvents: 'none',
    };
  }

  // Beyond visible range
  void maxVisible;
  return {
    zIndex: 0,
    transform: 'translateX(24px) translateY(30px) scale(0.85)',
    opacity: 0,
    pointerEvents: 'none',
  };
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function RPAStackedCarousel({ entries }: RPAStackedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);

  // Pointer tracking for swipe
  const pointerRef = useRef<{ x: number; y: number; moved: boolean } | null>(null);

  const total = entries.length;

  const navigateTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setActiveIndex(mod(index, total));
    },
    [isTransitioning, total],
  );

  const handlePrev = useCallback(() => navigateTo(activeIndex - 1), [activeIndex, navigateTo]);
  const handleNext = useCallback(() => navigateTo(activeIndex + 1), [activeIndex, navigateTo]);

  // Keyboard navigation for the carousel
  useEffect(() => {
    if (dialogOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [dialogOpen, handlePrev, handleNext]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerRef.current = { x: e.clientX, y: e.clientY, moved: false };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const ref = pointerRef.current;
    if (!ref) return;
    if (Math.abs(e.clientX - ref.x) > 8 || Math.abs(e.clientY - ref.y) > 8) {
      ref.moved = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const ref = pointerRef.current;
    pointerRef.current = null;
    if (!ref) return;

    const deltaX = e.clientX - ref.x;
    if (Math.abs(deltaX) >= 50) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    } else if (!ref.moved) {
      // Tap on active card → open modal
      openModal(activeIndex);
    }
  };

  const handlePointerCancel = () => {
    pointerRef.current = null;
  };

  const openModal = (index: number) => {
    setDialogIndex(index);
    setDialogOpen(true);
  };

  const modalPrev = () => setDialogIndex((i) => mod(i - 1, total));
  const modalNext = () => setDialogIndex((i) => mod(i + 1, total));

  // Keyboard nav inside modal
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') modalPrev();
    if (e.key === 'ArrowRight') modalNext();
  };

  if (total === 0) return null;

  const activeEntry = entries[activeIndex];
  const dialogEntry = entries[dialogIndex];

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Carousel region                                                      */}
      {/* ------------------------------------------------------------------ */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Rutas Personales de Aprendizaje"
        className="flex flex-col items-center"
      >
        {/* Live announcer */}
        <div aria-live="polite" className="sr-only">
          {activeEntry.fullName}
        </div>

        {/* Card stack + navigation */}
        <div className="relative flex w-full max-w-sm items-center justify-center sm:max-w-md">
          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Integrante anterior"
            className={cn(
              'absolute -left-4 z-40 hidden h-10 w-10 items-center justify-center rounded-full',
              'border border-nebula bg-dark-matter/80 text-star-light backdrop-blur-sm',
              'transition-all duration-200 hover:border-cyber-cyan/60 hover:text-cyber-cyan',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/70',
              'md:flex',
            )}
          >
            <ChevronLeftIcon size={18} />
          </button>

          {/* Stacked cards */}
          <div
            className="relative h-[340px] w-full sm:h-[380px]"
            style={{ perspective: '800px' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {entries.map((entry, index) => {
              const depth = stackDepth(index, activeIndex, total);
              const style = getCardStyle(depth, total);
              const isActive = depth === 0;

              return (
                <div
                  key={entry.memberId}
                  style={style}
                  className={cn(
                    'absolute inset-0 flex flex-col items-center justify-center gap-5',
                    'rounded-2xl border border-nebula bg-dark-matter/60 p-6 backdrop-blur-sm',
                    'motion-reduce:transition-none',
                    '[transition:transform_var(--coverflow-duration)_var(--coverflow-ease),opacity_var(--coverflow-duration)_var(--coverflow-ease)]',
                    isActive && [
                      'cursor-pointer shadow-[0_0_24px_-4px_rgba(0,245,255,0.18)]',
                      'hover:border-cyber-cyan/40 hover:shadow-[0_0_32px_-4px_rgba(0,245,255,0.28)]',
                    ],
                  )}
                  aria-hidden={!isActive}
                >
                  {/* Cartoon avatar */}
                  <div className="relative">
                    <div
                      className={cn(
                        'h-28 w-28 overflow-hidden rounded-full border-2',
                        isActive
                          ? 'border-cyber-cyan/60 shadow-[0_0_16px_rgba(0,245,255,0.3)]'
                          : 'border-nebula',
                      )}
                    >
                      <img
                        src={entry.avatarPath}
                        alt={`Avatar de ${entry.firstName}`}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <h3 className="font-exo2 text-lg font-semibold text-white-photon sm:text-xl">
                      {entry.fullName}
                    </h3>
                    <p className="mt-1 text-sm text-star-light">Ruta Personal de Aprendizaje</p>
                  </div>

                  {/* CTA */}
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(activeIndex);
                      }}
                      className={cn(
                        'flex items-center gap-2 rounded-lg border border-cyber-cyan/50 px-5 py-2',
                        'font-exo2 text-sm font-semibold text-cyber-cyan',
                        'transition-all duration-200',
                        'hover:bg-cyber-cyan/10 hover:border-cyber-cyan hover:shadow-[0_0_12px_rgba(0,245,255,0.25)]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/70',
                      )}
                    >
                      <ExternalLinkIcon size={14} />
                      Ver RPA
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente integrante"
            className={cn(
              'absolute -right-4 z-40 hidden h-10 w-10 items-center justify-center rounded-full',
              'border border-nebula bg-dark-matter/80 text-star-light backdrop-blur-sm',
              'transition-all duration-200 hover:border-cyber-cyan/60 hover:text-cyber-cyan',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/70',
              'md:flex',
            )}
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <nav
          className="mt-6 flex items-center justify-center gap-2"
          aria-label="Navegación de integrantes"
        >
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={entry.memberId}
                type="button"
                onClick={() => navigateTo(index)}
                aria-label={`Ir a ${entry.firstName}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'h-3 rounded-full transition-all duration-300',
                  isActive ? 'w-8 bg-cyber-cyan' : 'w-3 bg-white/25 hover:bg-white/45',
                )}
              />
            );
          })}
        </nav>

        {/* Mobile hint */}
        <p className="mt-3 text-xs text-star-light/50 md:hidden">
          Deslizá para navegar · Tocá para ver
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Modal — infographic viewer                                           */}
      {/* ------------------------------------------------------------------ */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="flex max-h-[92vh] w-full max-w-[95vw] flex-col gap-0 overflow-hidden p-0 sm:max-w-4xl xl:max-w-6xl"
          onKeyDown={handleModalKeyDown}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-nebula px-5 py-3">
            <div className="flex items-center gap-3">
              <img
                src={dialogEntry.avatarPath}
                alt={dialogEntry.firstName}
                className="h-9 w-9 rounded-full border border-cyber-cyan/40 object-cover"
              />
              <DialogTitle className="font-exo2 text-base font-semibold text-white-photon">
                {dialogEntry.fullName}
                <span className="ml-2 text-xs font-normal text-star-light">
                  · Ruta Personal de Aprendizaje
                </span>
              </DialogTitle>
            </div>

            {/* Modal nav */}
            <div className="mr-8 flex items-center gap-1">
              <button
                type="button"
                onClick={modalPrev}
                aria-label="RPA anterior"
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg',
                  'border border-nebula text-star-light',
                  'transition-all duration-150 hover:border-cyber-cyan/50 hover:text-cyber-cyan',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/60',
                )}
              >
                <ChevronLeftIcon size={15} />
              </button>
              <span className="min-w-[3rem] text-center text-xs text-star-light">
                {dialogIndex + 1} / {total}
              </span>
              <button
                type="button"
                onClick={modalNext}
                aria-label="Siguiente RPA"
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg',
                  'border border-nebula text-star-light',
                  'transition-all duration-150 hover:border-cyber-cyan/50 hover:text-cyber-cyan',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/60',
                )}
              >
                <ChevronRightIcon size={15} />
              </button>
            </div>
          </div>

          {/* Infographic */}
          <div className="flex-1 overflow-auto bg-dark-matter/40 p-2 sm:p-4">
            <img
              src={dialogEntry.infographicPath}
              alt={`Ruta Personal de Aprendizaje de ${dialogEntry.fullName}`}
              className="mx-auto block h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
              draggable={false}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
