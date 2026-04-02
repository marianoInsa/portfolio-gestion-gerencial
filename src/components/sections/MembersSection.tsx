'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
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
          <CarouselContent className="py-2">
            {members.map((member) => {
              return (
                <CarouselItem
                  key={member.id}
                  className="pl-4 basis-[90%] md:basis-[74%] lg:basis-[58%] xl:basis-[50%]"
                >
                  <AvatarCard member={member} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 left-0 z-10 hidden w-12 bg-gradient-to-r from-void-black via-void-black/85 to-transparent md:block lg:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 right-0 z-10 hidden w-12 bg-gradient-to-l from-void-black via-void-black/85 to-transparent md:block lg:w-16"
        />
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
