import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type NeonButtonVariant = 'primary' | 'secondary' | 'ghost';
type NeonButtonSize = 'sm' | 'md' | 'lg';

const variantMap: Record<NeonButtonVariant, string> = {
  primary:
    'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-[0_0_16px_rgba(0,245,255,0.35)]',
  secondary:
    'border-electric-purple bg-electric-purple/10 text-white-photon hover:bg-electric-purple/20 hover:shadow-[0_0_16px_rgba(155,48,255,0.35)]',
  ghost: 'border-nebula bg-transparent text-star-light hover:border-cyber-cyan hover:text-cyber-cyan',
};

const sizeMap: Record<NeonButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
};

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: NeonButtonVariant;
  size?: NeonButtonSize;
  className?: string;
}

export default function NeonButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: NeonButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-lg border font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan/70',
        sizeMap[size],
        variantMap[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
