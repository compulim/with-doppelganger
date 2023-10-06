/** @jest-environment jsdom */

import { createRef, forwardRef, type InputHTMLAttributes } from 'react';
import { render, type RenderResult } from '@testing-library/react';

import withDoppelganger from './withDoppelganger';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} {...props} />
));

const ComponentWithDoppelganger = withDoppelganger(Input);
const ref = createRef<HTMLInputElement>();
let result: RenderResult;

beforeEach(() => {
  result = render(
    <ComponentWithDoppelganger
      containerClassName="container"
      doppelgangerClassName="doppelganger"
      onChange={() => {}}
      ref={ref}
      type="text"
      value="Hello, World!"
    />
  );
});

test('should render', () => {
  expect(result.container.innerHTML).toMatchInlineSnapshot(
    `"<div class="container"><div class="doppelganger">Hello, World!</div><input type="text" value="Hello, World!"></div>"`
  );
});

test('should referencing the HTML component', () => {
  expect(ref).toHaveProperty('current.tagName', 'INPUT');
});
