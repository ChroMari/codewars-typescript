export const oddOrEven = (array: number[]): string => {
  const sum = array.reduce((acc, item) => item + acc, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}
