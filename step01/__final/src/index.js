import {
  nouns,
  places,
  adjectives,
  verbs,
  numbers,
  bodyParts
} from './words';

const {
  singular,
  plural
} = nouns;

import {
  toDisplay
} from './display';

//var allWords = require('./words-amd.js');

const oneOf = (ar) => {
  const len = Math.floor(Math.random() * ar.length);  
  return ar[len];
}

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
