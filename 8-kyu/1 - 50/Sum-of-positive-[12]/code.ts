export const positiveSum = (arr:number[]):number => {
  return arr.reduce((acc, item): number => item > 0 ? acc += item : acc, 0);
}