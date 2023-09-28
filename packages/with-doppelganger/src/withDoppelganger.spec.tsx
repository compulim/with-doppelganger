import React from 'react';

import withDoppelganger from './withDoppelganger';

type Props = { value: string };

test('should have display name', () => {
  const Input = ({ value }: Props) => <input type="text" value={value} />;

  Input.displayName = 'Input';

  const InputWithDoppelganger = withDoppelganger(Input);

  expect(InputWithDoppelganger).toHaveProperty('displayName', 'WithDoppelganger<Input>');
});
