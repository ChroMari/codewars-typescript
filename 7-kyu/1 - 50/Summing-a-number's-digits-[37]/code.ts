export const sumDigits = (n: number): number => {
  return Math.abs(n).toString().split('').reduce((acc, item) => acc + Number(item), 0);
}
