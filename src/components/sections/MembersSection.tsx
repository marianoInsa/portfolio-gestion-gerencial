'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { members } from '@/data/team';
import { getCoverflowVisualState, getSignedLoopDistance } from './members-carousel-motion';
import {
  AvatarCard,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  GlitchTitle,
  SectionWrapper,
  type CarouselApi,
} from '@/components/ui';

type CarouselApiWithClickAllowed = CarouselApi & {
  clickAllowed?: () => boolean;
};

function getCoverflowVars(distance: number): CSSProperties {
  const visual = getCoverflowVisualState(distance);
  const depth = Math.min(Math.abs(distance), 2) * -55;

  return {
    zIndex: visual.zIndex,
    transform: `translateX(${visual.translateXPercent}%) translateZ(${depth}px) rotateY(${visual.rotateYDeg}deg) scale(${visual.scale})`,
    opacity: visual.opacity,
    filter: `blur(${visual.blurPx}px)`,
    transformOrigin: 'center center',
  } as CSSProperties;
}

export default function MembersSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pointerTrackingRef = useRef<{ x: number; y: number; moved: boolean } | null>(null);

  const handleNeighborNavigation = (distance: number) => {
    if (!api || distance === 0) return;

    const emblaApi = api as CarouselApiWithClickAllowed;
    if (typeof emblaApi.clickAllowed === 'function' && !emblaApi.clickAllowed()) return;

    if (distance < 0) {
      api.scrollPrev();
      return;
    }

    api.scrollNext();
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    pointerTrackingRef.current = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const tracking = pointerTrackingRef.current;
    if (!tracking) return;

    const deltaX = Math.abs(event.clientX - tracking.x);
    const deltaY = Math.abs(event.clientY - tracking.y);
    if (deltaX > 8 || deltaY > 8) {
      tracking.moved = true;
    }
  };

  const handlePointerCancel = () => {
    pointerTrackingRef.current = null;
  };

  const handlePointerUp = (distance: number) => {
    const tracking = pointerTrackingRef.current;
    pointerTrackingRef.current = null;
    if (!tracking || tracking.moved) return;

    handleNeighborNavigation(distance);
  };

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelection();
    api.on('select', updateSelection);
    api.on('reInit', updateSelection);

    return () => {
      api.off('select', updateSelection);
      api.off('reInit', updateSelection);
    };
  }, [api]);

  return (
    <SectionWrapper id="integrantes">
      <div className="mb-8">
        <GlitchTitle text="Integrantes" className="text-4xl md:text-5xl" />
        <p className="mt-3 max-w-2xl text-star-light">
          Perfiles complementarios que integran análisis, diseño, desarrollo y validación para cada entrega.
        </p>
      </div>

      <div className="relative">
        <Carousel
          className="relative w-full"
          opts={{ align: 'center', loop: true }}
          setApi={setApi}
          aria-label="Carrusel de integrantes"
        >
          <CarouselContent className="py-2 [perspective:1050px]">
            {members.map((member, index) => {
              const distance = getSignedLoopDistance(index, selectedIndex, members.length);
              const styleVars = getCoverflowVars(distance);
              const isNeighbor = Math.abs(distance) === 1;

              return (
                <CarouselItem
                  key={member.id}
                  className="relative pl-4 basis-[92%] md:basis-[72%] lg:basis-[58%] xl:basis-[52%]"
                >
                  <div
                    style={styleVars}
                    className={cn(
                      'h-full [transform-style:preserve-3d] [backface-visibility:hidden]',
                      '[transition-duration:520ms] [transition-property:transform,opacity,filter] [transition-timing-function:var(--coverflow-ease)]',
                      'will-change-transform motion-reduce:[transform:none] motion-reduce:[filter:none] motion-reduce:opacity-100',
                      isNeighbor && 'md:hover:brightness-110'
                    )}
                    aria-label={
                      distance === -1
                        ? `Ir al integrante anterior: ${member.fullName}`
                        : distance === 1
                          ? `Ir al integrante siguiente: ${member.fullName}`
                          : `${member.fullName}${distance === 0 ? ' (integrante activo)' : ''}`
                    }
                  >
                    <AvatarCard member={member} />
                  </div>

                  {isNeighbor && (
                    <button
                      type="button"
                      className="absolute inset-0 z-20 cursor-pointer rounded-lg bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-void-black"
                      aria-label={
                        distance === -1
                          ? `Ir al integrante anterior: ${member.fullName}`
                          : `Ir al integrante siguiente: ${member.fullName}`
                      }
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={() => handlePointerUp(distance)}
                      onPointerCancel={handlePointerCancel}
                      onKeyDown={(event) => {
                        if (event.key !== 'Enter' && event.key !== ' ') return;
                        event.preventDefault();
                        handleNeighborNavigation(distance);
                      }}
                    >
                      <span className="sr-only">
                        {distance === -1 ? 'Navegar al integrante anterior' : 'Navegar al integrante siguiente'}
                      </span>
                    </button>
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* Pagination indicators */}
      <nav className="mt-4 flex items-center justify-center gap-2" aria-label="Navegación de integrantes">
        {members.map((member, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={member.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir al integrante ${index + 1}`}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'h-3.5 rounded-full transition-all duration-300',
                isActive ? 'w-8 bg-cyber-cyan' : 'w-3.5 bg-white/30 hover:bg-white/50'
              )}
            />
          );
        })}
      </nav>
    </SectionWrapper>
  );
}
