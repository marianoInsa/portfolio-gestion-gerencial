import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('relative mx-auto w-full max-w-7xl px-4 py-14 sm:py-16 md:px-8 md:py-20', className)}>
      {children}
    </section>
  );
}
