export const twoOldestAges = (ages: number[]): number[] => {
  ages.sort((a, b) => b - a);

  return [ages[1], ages[0]];
}
