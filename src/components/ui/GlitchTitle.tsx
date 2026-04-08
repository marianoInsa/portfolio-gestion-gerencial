import type { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTitleProps {
  text: string;
  as?: ElementType;
  className?: string;
}

export default function GlitchTitle({ text, as: Component = 'h2', className }: GlitchTitleProps) {
  return (
    <Component
      data-text={text}
      className={cn(
        'glitch relative inline-block w-full max-w-full break-words [overflow-wrap:anywhere] font-orbitron font-black uppercase leading-tight tracking-[0.06em] sm:tracking-[0.08em] md:tracking-[0.12em] text-white-photon',
        className
      )}
    >
      {text}
    </Component>
  );
}
