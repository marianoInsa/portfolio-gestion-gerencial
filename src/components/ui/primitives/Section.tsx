import { cn } from '@/lib/utils';

type SectionTone = 'tight' | 'base' | 'loose';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  tone?: SectionTone;
  id?: string;
  ariaLabelledBy?: string;
}

type SectionWithAttributes = SectionProps & React.HTMLAttributes<HTMLElement>;

const sectionToneMap: Record<SectionTone, string> = {
  tight: 'section-y-tight',
  base: 'section-y',
  loose: 'section-y-loose',
};

export function Section({
  children,
  className,
  as = 'section',
  tone = 'base',
  id,
  ariaLabelledBy,
  ...props
}: SectionWithAttributes) {
  const Component = as;

  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('section-container', sectionToneMap[tone], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
