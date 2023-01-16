export const flip = (dir: string, arr: number[]): number[] => {
  if (dir === 'R') {
    return arr.sort((a, b) => a - b);
  } 

  return arr.sort((a, b) => b - a);
};
