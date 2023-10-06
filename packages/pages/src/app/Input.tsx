import { type FormEventHandler, memo, useCallback } from 'react';
import { useRefFrom } from 'use-ref-from';

type Props = {
  onInput?: (value: string) => void;
  type?: string;
  value?: string;
};

const Input = memo<Props>(({ onInput, type = 'text', value = '' }: Props) => {
  const onInputRef = useRefFrom(onInput);

  const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
    ({ currentTarget: { value } }) => {
      onInputRef.current?.(value);
    },
    [onInputRef]
  );

  return <input onInput={handleInput} type={type} value={value} />;
});

Input.displayName = 'Input';

export default Input;
