import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeColor = 'cyan' | 'magenta' | 'purple' | 'green' | 'pink';

const colorMap: Record<BadgeColor, string> = {
  cyan: 'border-cyber-cyan/60 text-cyber-cyan',
  magenta: 'border-neon-magenta/60 text-neon-magenta',
  purple: 'border-electric-purple/60 text-electric-purple',
  green: 'border-neon-green/60 text-neon-green',
  pink: 'border-hot-pink/60 text-hot-pink',
};

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

export default function Badge({ children, color = 'cyan', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
