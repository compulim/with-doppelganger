/** @jest-environment jsdom */

import { create } from 'react-test-renderer';
import React, { memo } from 'react';
import withDoppelganger from 'with-doppelganger/withDoppelganger';

const TextInput = memo(({ value = '' }) => <input type="text" value={value} />);

TextInput.displayName = 'TextInput';

test('simple scenario', () => {
  const TextInputWithDoppelganger = withDoppelganger(TextInput);

  // WHEN: Render doppelganger with value of "Hello, World!".
  const renderer = create(<TextInputWithDoppelganger value="Hello, World!" />);

  // THEN: It should render "Hello, World!".
  expect(renderer.toJSON()).toMatchInlineSnapshot(`
<div>
  <input
    type="text"
    value="Hello, World!"
  />
</div>
`);
});
