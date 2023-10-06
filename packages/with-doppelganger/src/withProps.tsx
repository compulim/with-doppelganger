import React, { type ComponentType, forwardRef, type PropsWithoutRef, type RefAttributes } from 'react';

function withProps<T extends ComponentType<P>, P extends object, H>(
  component: T,
  initialProps: Partial<P>
): ComponentType<PropsWithoutRef<P> & RefAttributes<H>> {
  const WithPropsWrapper = forwardRef<H, P>((props, ref) => {
    return React.createElement(component, {
      ...initialProps,
      ...props,
      ref
    });
  });

  WithPropsWrapper.displayName = 'WithPropsWrapper';

  return WithPropsWrapper;
}

export default withProps;
