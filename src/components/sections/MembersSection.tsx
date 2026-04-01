'use client';

import { useEffect, useState } from 'react';
import { members } from '@/data/team';
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

export default function MembersSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

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

      <Carousel
        className="relative w-full"
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
        aria-label="Carrusel de integrantes"
      >
        <CarouselContent className="-ml-4">
          {members.map((member, index) => {
            const isActive = index === selectedIndex;
            return (
              <CarouselItem
                key={member.id}
                className={[
                  'pl-4 md:basis-[88%] lg:basis-[72%] transition-all duration-500 ease-out',
                  prefersReducedMotion
                    ? 'opacity-100 scale-100'
                    : isActive
                      ? 'scale-100 opacity-100'
                      : 'scale-[0.92] opacity-70 md:blur-[0.5px]',
                ].join(' ')}
              >
                <AvatarCard member={member} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
