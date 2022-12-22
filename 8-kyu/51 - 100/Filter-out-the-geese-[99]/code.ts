export const gooseFilter = (birds: string[]): string[] => {
  const geese: string[] = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  
  return birds.filter(bird => !geese.includes(bird));
};
