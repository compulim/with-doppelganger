import { type ReactNode, type TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className, ...props }: Props): ReactNode => (
  <textarea className={classNames(className, 'auto-resize-text-area__text-area')} {...props} />
);

TextArea.displayName = 'TextArea';

export default TextArea;
