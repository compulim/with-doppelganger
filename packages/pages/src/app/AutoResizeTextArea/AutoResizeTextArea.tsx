import './AutoResizeTextArea.css';

import { withDoppelganger } from 'with-doppelganger';

import TextArea from './TextArea';
import withProps from './withProps';

const TextAreaWithDoppelganger = withProps(withDoppelganger(TextArea), {
  containerClassName: 'auto-resize-text-area',
  doppelgangerClassName: 'auto-resize-text-area__doppelganger',
  suffix: '\u200b'
});

// export default AutoResizeTextArea;
export default TextAreaWithDoppelganger;
