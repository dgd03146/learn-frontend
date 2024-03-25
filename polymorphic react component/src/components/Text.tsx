import React from 'react';

// ROYGBIV
type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type TextProps = {
  color?: Rainbow | 'black';
};

type PropswithAs<C extends React.ElementType, Props> = Props & AsProp<C>;

type PropsToOmit<C extends React.ElementType, P> = keyof PropswithAs<C, P>;
// omit할 타입들을 Props에 넣는다.

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = Record<string, never>,
> = React.PropsWithChildren<PropswithAs<C, Props>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const Text = <C extends React.ElementType = 'span'>({
  as,
  style,
  color,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || 'span';

  const internalStyles = color ? { style: { color, ...style } } : {};

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
