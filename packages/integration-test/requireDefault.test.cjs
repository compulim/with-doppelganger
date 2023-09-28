/** @jest-environment jsdom */

const { create } = require('react-test-renderer');
const { withDoppelganger } = require('with-doppelganger');
const React = require('react');

const { memo } = React;

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
