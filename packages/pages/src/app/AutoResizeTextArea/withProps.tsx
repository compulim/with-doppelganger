import { type ComponentType, createElement, forwardRef, type PropsWithoutRef, type RefAttributes } from 'react';

type PropsOf<T> = T extends ComponentType<infer P> ? P : never;

function withProps<T extends ComponentType, I extends Partial<PropsOf<T>>, H = unknown>(
  component: T,
  initialProps: I
): ComponentType<PropsWithoutRef<Omit<PropsOf<T>, keyof I>> & RefAttributes<H>> {
  const WithPropsWrapper = forwardRef<H, Omit<PropsOf<T>, keyof I>>((props, ref) =>
    createElement(component, { ...initialProps, ...props, ref })
  );

  WithPropsWrapper.displayName = 'WithPropsWrapper';

  return WithPropsWrapper;
}

export default withProps;
