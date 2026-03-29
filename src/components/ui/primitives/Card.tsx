import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardStyles = cva('rounded-2xl', {
  variants: {
    variant: {
      elevated: 'surface-elevated',
      outline: 'surface-outline',
      dashed:
        'rounded-2xl border-2 border-dashed bg-[var(--color-surface)] border-[var(--color-border)]',
    },
    padding: {
      sm: 'p-4',
      md: 'p-6',
    },
  },
  defaultVariants: {
    variant: 'outline',
    padding: 'md',
  },
});

type CardProps = React.PropsWithChildren<
  VariantProps<typeof cardStyles> & {
    className?: string;
    as?: React.ElementType;
  } & React.HTMLAttributes<HTMLElement>
>;

export function Card({ children, className, variant, padding, as = 'div', ...props }: CardProps) {
  const Component = as;
  return (
    <Component className={cn(cardStyles({ variant, padding }), className)} {...props}>
      {children}
    </Component>
  );
}
