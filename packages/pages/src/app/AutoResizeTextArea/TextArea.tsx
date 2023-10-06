import { type ReactNode, type TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className, ...props }: Props): ReactNode => {
  // const onInputRef = useRefFrom(onInput);
  // const handleInput = useCallback<FormEventHandler<HTMLTextAreaElement>>(
  //   ({ currentTarget: { value } }) => onInputRef.current?.(value),
  //   [onInputRef]
  // );

  return <textarea className={classNames(className, 'auto-resize-text-area__text-area')} {...props} />;
};

TextArea.displayName = 'TextArea';

export default TextArea;
