import nouns from './json/nouns';
import places from './json/places';
import adjectives from './json/adjectives';
import verbs from './json/verbs';
import numbers from './json/numbers';
import bodyParts from './json/bodyParts';

const {
  singular,
  plural
} = nouns;

import {
  toDisplay
} from './display';

const oneOf = (ar) => {
  const len = Math.floor(Math.random() * ar.length);  
  return ar[len];
};

const words = {
 PNOUN1: oneOf(plural), 
 PLACE: oneOf(places), 
 NOUN1: oneOf(singular), 
 PNOUN2: oneOf(plural),
 NOUN2: oneOf(singular),
 ADJ1: oneOf(adjectives), 
 VERB1: oneOf(verbs), 
 NUMBER: oneOf(numbers), 
 ADJ2: oneOf(adjectives), 
 BODYPART: oneOf(bodyParts), 
 VERB2: oneOf(verbs) 
};

document.querySelector('#app').innerHTML = toDisplay(words);

var p = document.createElement("p");
p.innerHTML = `${PLATFORM}`;
document.body.appendChild(p);


