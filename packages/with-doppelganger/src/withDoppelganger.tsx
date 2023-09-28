import React, { type ComponentType, createElement } from 'react';

import { type PropsOf } from './types/PropsOf';

export default function withDoppelganger<T extends ComponentType<P>, P extends object = PropsOf<T>>(
  component: T
): ComponentType<P> {
  // TODO: Add forwardRef.
  const Doppelganger = (props: P) => <div>{createElement<P>(component, props)}</div>;

  Doppelganger.displayName = `WithDoppelganger<${component.displayName}>`;

  return Doppelganger;
}
