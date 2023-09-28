import React, { type ComponentType, createElement, memo } from 'react';
import { type PropsOf } from './types/PropsOf';

export default function withDoppelganger<T extends ComponentType>(component: T): ComponentType<PropsOf<T>> {
  type Props = PropsOf<T>;

  const Doppelganger = memo<Props>((props: Props) => <div>{createElement(component, props)}</div>);

  Doppelganger.displayName = `withDoppelganger<${component.displayName}>`;

  return Doppelganger;
}
