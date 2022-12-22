const arrayPhrase = ['I love you', 'a little',  'a lot', 'passionately', 'madly', 'not at all'];

export function howMuchILoveYou(petals: number): string{
  while (petals > 6) petals -= 6;

  return arrayPhrase[petals - 1];
};

/*
export function howMuchILoveYou(nbPetals:number):string {
  return ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals % 6]
}
*/