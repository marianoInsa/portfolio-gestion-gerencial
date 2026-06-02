import { challenges } from '@/data/challenges';
import { 
  ChallengePreviewCard, 
  EmptyState, 
  GlitchTitle, 
  NeonButton, 
  SectionWrapper,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui';

export default function ChallengesSection() {
  return (
    <SectionWrapper id="desafios">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <GlitchTitle text="Desafios" className="text-4xl md:text-5xl" />
          <p className="mt-3 text-star-light">Total publicados: {challenges.length}</p>
        </div>
        <NeonButton href="/desafios" variant="secondary">
          Ver todos
        </NeonButton>
      </div>

      {challenges.length === 0 ? (
        <EmptyState
          title="Desafios en progreso"
          message="Los desafios se iran publicando a medida que avance la cursada."
        />
      ) : (
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {challenges.map((challenge) => (
                <CarouselItem key={challenge.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <ChallengePreviewCard challenge={challenge} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      )}
    </SectionWrapper>
  );
}
