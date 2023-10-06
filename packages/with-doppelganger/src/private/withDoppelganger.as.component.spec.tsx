/** @jest-environment jsdom */

import { createRef, forwardRef, type InputHTMLAttributes, type PropsWithChildren } from 'react';
import { render, type RenderResult } from '@testing-library/react';

import withDoppelganger from './withDoppelganger';

const Doppelganger = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <span className={className}>{children}</span>
);

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} {...props} />
));

const ComponentWithDoppelganger = withDoppelganger(Input);
const ref = createRef<HTMLInputElement>();
let result: RenderResult;

beforeEach(() => {
  result = render(
    <ComponentWithDoppelganger
      as={Doppelganger}
      containerClassName="container"
      doppelgangerClassName="doppelganger"
      onChange={() => {}}
      prefix="("
      ref={ref}
      suffix=")"
      type="text"
      value="Hello, World!"
    />
  );
});

test('should render', () => {
  expect(result.container.innerHTML).toMatchInlineSnapshot(
    `"<div class="container"><span class="doppelganger">(Hello, World!)</span><input type="text" value="Hello, World!"></div>"`
  );
});

test('should referencing the HTML component', () => {
  expect(ref).toHaveProperty('current.tagName', 'INPUT');
});
