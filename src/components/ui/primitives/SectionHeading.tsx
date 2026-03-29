import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  titleId?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  titleId,
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={cn('max-w-2xl', alignClass, className)}>
      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-cta)' }}>
        {label}
      </span>
      <h2
        id={titleId}
        className="mt-2 text-2xl md:text-3xl font-bold"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
