import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { members, TEAM_LOGO, TEAM_NAME } from '@/data/team';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { GlitchTitle, GridBackground, NeonButton, SectionWrapper } from '@/components/ui';

export default function HeroSection() {
  return (
    <SectionWrapper className="relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] items-center overflow-hidden md:min-h-[calc(100dvh-4rem)]">
      <GridBackground opacity={0.3} gridSize={52} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.16),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(155,48,255,0.18),transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="mx-auto mb-8 w-fit rounded-2xl border border-cyber-cyan/40 bg-white/5 p-4 backdrop-blur-sm">
          <Image
            src={TEAM_LOGO}
            alt="Logo del equipo Stakeholders"
            width={180}
            height={180}
            className="h-auto w-[140px] md:w-[180px]"
            priority
          />
        </div>

        <GlitchTitle text={TEAM_NAME} as="h1" className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient-cyber" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-star-light md:text-lg">
          Equipo academico orientado a gestion, tecnologia y pensamiento sistemico para resolver desafios
          reales de ingenieria en sistemas.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {members.map((member) => (
            <HoverCard key={member.id}>
              <HoverCardTrigger className="rounded-md border border-nebula/70 bg-dark-matter/40 px-2.5 py-1 text-sm text-star-light transition-colors hover:border-cyber-cyan hover:text-cyber-cyan">
                {member.fullName}
              </HoverCardTrigger>
              <HoverCardContent className="border border-nebula bg-deep-space text-white-photon">
                <p className="font-semibold text-cyber-cyan">{member.firstName}</p>
                <p className="mt-1 text-sm text-star-light">{member.bio}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <NeonButton href="#integrantes" size="lg">
            Explorar Portfolio
          </NeonButton>
        </div>

        <div className="mt-10 flex justify-center text-cyber-cyan">
          <ChevronDown className="animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </SectionWrapper>
  );
}
