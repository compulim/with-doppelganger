import { ComponentType, createElement, type PropsWithChildren } from 'react';
import { Extract, type HowOf, Spy, wrapWith } from 'react-wrap-with';

type DoppelgangerProps = PropsWithChildren<{
  as?: ComponentType<PropsWithChildren<{ className?: string }>> | string;
  containerClassName?: string | undefined;
  doppelgangerClassName?: string | undefined;
  prefix?: string | undefined;
  suffix?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}>;

const DoppelgangerWrapper = ({
  as = 'div',
  children,
  containerClassName,
  doppelgangerClassName,
  prefix,
  suffix,
  value
}: DoppelgangerProps) => (
  <div className={containerClassName}>
    {createElement(as, doppelgangerClassName ? { className: doppelgangerClassName } : {}, prefix, value, suffix)}
    {children}
  </div>
);

DoppelgangerWrapper.displayName = 'DoppelgangerWrapper';

const withDoppelganger = wrapWith<
  typeof DoppelgangerWrapper,
  'as' | 'containerClassName' | 'doppelgangerClassName' | 'prefix' | 'suffix',
  'value'
>(DoppelgangerWrapper, {
  as: Extract,
  containerClassName: Extract,
  doppelgangerClassName: Extract,
  prefix: Extract,
  suffix: Extract,
  value: Spy
} satisfies HowOf<typeof DoppelgangerWrapper>);

export default withDoppelganger;
