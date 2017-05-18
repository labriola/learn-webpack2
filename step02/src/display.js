import {
  toText
} from './format';

export const toDisplay = words => {
  return `<h1>Romeo and Juliet..ish</h1>
          <p>${toText(words)}</p>`;  
};
