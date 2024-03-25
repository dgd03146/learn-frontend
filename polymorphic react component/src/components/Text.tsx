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

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | 'black';
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;
// 겹쳐서 빼야할 타입을 TextProps에 넣고 keyof로 Omit

export const Text = <C extends React.ElementType = 'span'>({
  as,
  style,
  color,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || 'span';

  const internalStyles = color ? { style: { color, ...style } } : {};

  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};
