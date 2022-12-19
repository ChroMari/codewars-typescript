export function findAverage(array: number[]): number {
  if (array.length === 0) return 0;
  const len = array.length;
  return array.reduce((acc, item) => acc + item, 0) / len;
};
