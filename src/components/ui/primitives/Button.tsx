import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonStyles = cva(
  'focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)]',
        secondary:
          'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-secondary)] hover:border-blue-200 hover:text-[var(--color-text)]',
        ghost: 'bg-transparent text-[var(--color-cta)] hover:bg-blue-50',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-lg',
        md: 'h-10 px-4 text-sm rounded-xl',
        lg: 'h-12 px-6 text-sm rounded-xl',
      },
      radius: {
        control: '',
        pill: 'rounded-full',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      {
        radius: 'control',
        size: 'sm',
        className: 'rounded-lg',
      },
      {
        radius: 'control',
        size: 'md',
        className: 'rounded-xl',
      },
      {
        radius: 'control',
        size: 'lg',
        className: 'rounded-xl',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'control',
      block: false,
    },
  }
);

type ButtonStyleProps = VariantProps<typeof buttonStyles>;

type SharedProps = ButtonStyleProps & {
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = SharedProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { className, variant, size, radius, block, children } = props;
  const classes = cn(buttonStyles({ variant, size, radius, block }), className);

  if ('href' in props && typeof props.href === 'string') {
    if (props.external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const nativeButtonProps = props as NativeButtonProps;
  const { type = 'button', ...buttonProps } = nativeButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
