import './App.css';

import { type FormEventHandler, useCallback, useState } from 'react';

import AutoResizeTextArea from './AutoResizeTextArea/AutoResizeTextArea';

const App = () => {
  const [value, setValue] = useState<string | ReadonlyArray<string> | number | undefined>(
    'Excepteur fugiat veniam qui eiusmod officia aliquip aliqua dolore cillum exercitation consectetur. Qui sunt ex pariatur magna irure in dolore dolore. Et aliquip ut adipisicing sunt.'
  );

  const handleInput = useCallback<FormEventHandler<{ value?: string | ReadonlyArray<string> | number | undefined }>>(
    ({ currentTarget: { value } }) => setValue(value),
    [setValue]
  );

  return (
    <main className="app">
      <h1>withDoppelganger</h1>
      <h2>Auto-resize text area using doppelganger</h2>
      <AutoResizeTextArea autoFocus={true} onInput={handleInput} spellCheck={false} value={value} />
    </main>
  );
};

export default App;
