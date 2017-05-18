import {
  toText
} from './format';

import romeoJuliet from './images/romeo_juliet.svg'
import styles from './css/some.css';

export const toDisplay = words => {
  return `<img src="${romeoJuliet}">
          <p>${toText(words)}</p>`;
};
