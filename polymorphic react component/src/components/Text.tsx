export const Text = ({
  as,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  children: React.ReactNode;
}) => {
  const Component = as || 'span';

  return <Component>{children}</Component>;
};
