export const digitize = (n: number): number[] => n
  .toString()
  .split('')
  .reverse()
  .map(item => Number(item));

/*
export const digitize = (n: number): number[] => {
  return [...n.toString()].map(Number).reverse();
};
*/