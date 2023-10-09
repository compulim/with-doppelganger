/** @jest-environment jsdom */

const { create } = require('react-test-renderer');
const { memo } = require('react');
const { withDoppelganger } = require('with-doppelganger');

const TextInput = memo(({ value = '' }) => <input type="text" value={value} />);

TextInput.displayName = 'TextInput';

test('simple scenario', () => {
  const TextInputWithDoppelganger = withDoppelganger(TextInput);

  // WHEN: Render doppelganger with value of "Hello, World!".
  const renderer = create(
    <TextInputWithDoppelganger
      containerClassName="container"
      doppelgangerClassName="doppelganger"
      value="Hello, World!"
    />
  );

  // THEN: It should render "Hello, World!".
  expect(renderer.toJSON()).toMatchInlineSnapshot(`
<div
  className="container"
>
  <div
    className="doppelganger"
  >
    Hello, World!
  </div>
  <input
    type="text"
    value="Hello, World!"
  />
</div>
`);
});
