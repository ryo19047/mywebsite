import { type ElementType, type ReactNode } from 'react';

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Button<T extends ElementType = 'button'>({
  as,
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps<T>) {
  const Component = (as || 'button') as ElementType;
  return (
    <Component
      className={`ui-button ${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
