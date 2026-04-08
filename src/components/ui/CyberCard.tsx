import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  glowColor?: 'cyan' | 'purple' | 'magenta';
  className?: string;
}

const glowMap = {
  cyan: 'hover:shadow-[0_0_22px_rgba(0,245,255,0.25)] hover:border-cyber-cyan/70',
  purple: 'hover:shadow-[0_0_22px_rgba(155,48,255,0.25)] hover:border-electric-purple/70',
  magenta: 'hover:shadow-[0_0_22px_rgba(255,0,255,0.25)] hover:border-neon-magenta/70',
};

export default function CyberCard({
  title,
  description,
  children,
  glowColor = 'cyan',
  className,
}: CyberCardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-nebula bg-deep-space/80 p-4 sm:p-6 backdrop-blur-sm transition-all duration-300',
        glowMap[glowColor],
        className
      )}
    >
      {title ? <h3 className="font-exo2 text-2xl font-bold text-white-photon">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm leading-relaxed text-star-light">{description}</p> : null}
      {children}
    </article>
  );
}
