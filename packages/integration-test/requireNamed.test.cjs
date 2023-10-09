/** @jest-environment jsdom */

const { create } = require('react-test-renderer');
const { default: withDoppelganger } = require('with-doppelganger/withDoppelganger');
const { memo } = require('react');

const TextInput = memo(({ value = '' }) => <input type="text" value={value} />);

TextInput.displayName = 'TextInput';

test('simple scenario', () => {
  const TextInputWithDoppelganger = withDoppelganger(TextInput);

  // WHEN: Render doppelganger with value of "Hello, World!".
  const renderer = create(<TextInputWithDoppelganger value="Hello, World!" />);

  // THEN: It should render "Hello, World!".
  expect(renderer.toJSON()).toMatchInlineSnapshot(`
<div>
  <div>
    Hello, World!
  </div>
  <input
    type="text"
    value="Hello, World!"
  />
</div>
`);
});
