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
} from '@/components/ui';

export default function MembersSection() {
  return (
    <SectionWrapper id="integrantes">
      <div className="mb-8">
        <GlitchTitle text="Integrantes" className="text-4xl md:text-5xl" />
        <p className="mt-3 max-w-2xl text-star-light">
          Perfiles complementarios que integran análisis, diseño, desarrollo y validación para cada entrega.
        </p>
      </div>

      <Carousel className="relative w-full" opts={{ align: 'center', loop: true }}>
        <CarouselContent className="-ml-4">
          {members.map((member) => (
            <CarouselItem key={member.id} className="pl-4 md:basis-[88%] lg:basis-[72%]">
              <AvatarCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
