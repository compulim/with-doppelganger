import { withDoppelganger } from 'with-doppelganger';
import React, { useMemo, useState } from 'react';

import Input from './Input';

const InputWithDoppelganger = withDoppelganger(Input);

const App = () => {
  const [value, setValue] = useState('');

  useMemo(() => console.log({ value }), [value]);

  return <InputWithDoppelganger onInput={setValue} value={value} />;
};

export default App;
