import './AutoResizeTextArea.css';

import { type TextareaHTMLAttributes } from 'react';
import { withDoppelganger } from 'with-doppelganger';

import TextArea from './TextArea';

const TextAreaWithDoppelganger = withDoppelganger(TextArea);

const AutoResizeTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <TextAreaWithDoppelganger
      containerClassName="auto-resize-text-area"
      doppelgangerClassName="auto-resize-text-area__doppelganger"
      suffix={'\u200b'}
      {...props}
    />
  );
};

export default AutoResizeTextArea;
