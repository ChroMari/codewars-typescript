export const descendingOrder = (n: number): number => {
  const strArr = n.toString().split('');
  const newNumber = strArr.sort((a, b) => +b - +a).join('');

  return +newNumber;
}
