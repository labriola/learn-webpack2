import {
  sample
} from 'lodash';

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

const words = {
 PNOUN1: sample(plural), 
 PLACE: sample(places), 
 NOUN1: sample(singular), 
 PNOUN2: sample(plural),
 NOUN2: sample(singular),
 ADJ1: sample(adjectives), 
 VERB1: sample(verbs), 
 NUMBER: sample(numbers), 
 ADJ2: sample(adjectives), 
 BODYPART: sample(bodyParts), 
 VERB2: sample(verbs) 
};


const div = document.createElement("div");
div.setAttribute("id", "app");
document.body.appendChild(div);
div.innerHTML = toDisplay(words);

const p = document.createElement("p");
p.innerHTML = `${PLATFORM}`;
document.body.appendChild(p);


