export const arr2bin = (arr: any[]): string => {
  const sum = arr.reduce((acc, item) => {
    if (typeof item === 'number') {
      acc += item;
    }
    return acc;
  }, 0);

  return sum.toString(2);
}
