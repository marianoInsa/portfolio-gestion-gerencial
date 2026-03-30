import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  opacity?: number;
  gridSize?: number;
  className?: string;
}

export default function GridBackground({
  opacity = 0.2,
  gridSize = 42,
  className,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    />
  );
}
