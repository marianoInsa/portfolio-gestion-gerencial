import { GlitchTitle } from '@/components/ui';

interface TPIHeroProps {
  title: string;
  description: string;
  period: string;
}

export default function TPIHero({ title, description, period }: TPIHeroProps) {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 border-b border-nebula/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,245,255,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <span className="inline-block rounded-full border border-cyber-cyan/35 bg-cyber-cyan/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyber-cyan uppercase mb-4 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
          {period}
        </span>
        
        <GlitchTitle
          text={title}
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl text-gradient-cyber"
        />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-star-light md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
