export const toText = ({
      PNOUN1, 
      PLACE, 
      NOUN1, 
      PNOUN2, 
      NOUN2, 
      ADJ1, 
      VERB1, 
      NUMBER, 
      ADJ2, 
      BODYPART, 
      VERB2
  }) => {
  return `Two ${PNOUN1}, both alike in dignity,
      In fair ${PLACE}, where we lay our scene,
      From ancient ${NOUN1} break to new mutiny,
      Where civil blood makes civil hands unclean.
      From forth the fatal loins of these two foes
      A pair of star-cross'd ${PNOUN2} take their life;
      Whole misadventured piteous overthrows
      Do with their ${NOUN2} bury their parents' strife.
      The fearful passage of their ${ADJ1} love,
      And the continuance of their parents' rage,
      Which, but their children's end, nought could ${VERB1},
      Is now the ${NUMBER} hours' traffic of our stage;
      The which if you with ${ADJ2} ${BODYPART} attend,
      What here shall ${VERB2}, our toil shall strive to mend.`;   
};
