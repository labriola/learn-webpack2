define('words', [], function () {
  const nouns = [
    ['ninja', 'ninjas'],
    ['cat', 'cats'],
    ['spaceship', 'spaceships'],
    ['blueberry', 'blueberries'],
    ['developer', 'developer'],
    ['moon', 'spacestations']
  ]; 

  const places = [
    'Bangkok',
    'Nairobi',
    'Beijing',
    'Yokohama',
    'Tehran',
    'Casablanca'
  ];

  const adjectives = [
    'mammoth',
    'giant',
    'spotty',
    'boundless',
    'thoughtful',
    'barbarous',
    'languid',
    'chunky',
    'dizzy',
    'unsightly',
    'sore',
    'fallacious'
  ];

  const verbs = [
    'invent',
    'whisper',
    'scare',
    'trouble',
    'bang',
    'turn',
    'boast',
    'sin',
    'deceive',
    'force',
    'launch',
    'preserve'
  ];

  const numbers = [
    53,
    9,
    8,
    0,
    37,
    4,
    17
  ];

  const bodyParts = [
    'cheek',
    'waist',
    'forehead',
    'chest',
    'tongue',
    'wrist',
    'upper arm'
  ];

  return {
    nouns,
    places,
    adjectives,
    verbs,
    numbers,
    bodyParts
  }
})
