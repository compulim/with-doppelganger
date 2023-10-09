import './AutoResizeTextArea.css';

import { withDoppelganger } from 'with-doppelganger';
import { withProps } from 'react-wrap-with';

import TextArea from './TextArea';

const TextAreaWithDoppelganger = withProps(withDoppelganger(TextArea), {
  containerClassName: 'auto-resize-text-area',
  doppelgangerClassName: 'auto-resize-text-area__doppelganger',
  prefix: 'abc',
  suffix: '\u200b'
});

export default TextAreaWithDoppelganger;
