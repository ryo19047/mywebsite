import { type ElementType, type ReactNode } from 'react';

type CardProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Card<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...rest
}: CardProps<T>) {
  const Component = (as || 'div') as ElementType;
  return (
    <Component className={`ui-card ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
