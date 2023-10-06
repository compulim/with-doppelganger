/** @jest-environment jsdom */

import { render, type RenderResult } from '@testing-library/react';
import { createRef, forwardRef, type TextareaHTMLAttributes } from 'react';

import withDoppelganger from './withDoppelganger';

const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => (
  <textarea ref={ref} {...props} />
));

const ComponentWithDoppelganger = withDoppelganger(TextArea);
const ref = createRef<HTMLTextAreaElement>();
let result: RenderResult;

beforeEach(() => {
  result = render(
    <ComponentWithDoppelganger
      containerClassName="container"
      doppelgangerClassName="doppelganger"
      onChange={() => {}}
      ref={ref}
      value="Hello, World!"
    />
  );
});

test('should render', () => {
  expect(result.container.innerHTML).toMatchInlineSnapshot(
    `"<div class="container"><div class="doppelganger">Hello, World!</div><textarea>Hello, World!</textarea></div>"`
  );
});

test('should referencing the HTML component', () => {
  expect(ref).toHaveProperty('current.tagName', 'TEXTAREA');
});
