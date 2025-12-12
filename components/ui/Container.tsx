import { type CSSProperties, type ElementType, type ReactNode } from 'react';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>;

export function Container<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  style,
  ...rest
}: ContainerProps<T>) {
  const Component = (as || 'div') as ElementType;
  return (
    <Component
      className={`ui-container ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
