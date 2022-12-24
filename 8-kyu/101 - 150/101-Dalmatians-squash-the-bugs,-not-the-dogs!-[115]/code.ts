export const howManyDalmatians = (numer : number): string => {
  const dogs =  ['Hardly any', 'More than a handful!', 'Woah that\'s a lot of dogs!', '101 DALMATIANS!!!'];

  if (numer <= 10) {
    return dogs[0];
  }
  if (numer <= 50) {
    return dogs[1];
  }
  if (numer === 101) {
    return dogs[3];
  }

  return dogs[2];
};
