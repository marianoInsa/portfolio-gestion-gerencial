import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { members, TEAM_LOGO, TEAM_NAME } from '@/data/team';
import { GlitchTitle, GridBackground, NeonButton, SectionWrapper } from '@/components/ui';

export default function HeroSection() {
  return (
    <SectionWrapper className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
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

        <GlitchTitle text={TEAM_NAME} as="h1" className="text-5xl md:text-7xl lg:text-8xl text-gradient-cyber" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-star-light md:text-lg">
          Equipo academico orientado a gestion, tecnologia y pensamiento sistemico para resolver desafios
          reales de ingenieria en sistemas.
        </p>

        <p className="mt-8 text-sm text-star-light">{members.map((member) => member.fullName).join(' | ')}</p>

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
