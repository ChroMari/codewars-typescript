export const rowSumOddNumbers = (n: number): number => {
  if (n == 1) return 1;
  
  let start = 1;
  let j = 2;
  let sum  = 0;
  
  for (let i = 1; i < n; i++) {
    start += j;
    j += 2;
  }

  for (let i = 0; i < n; i++) {
    sum += start;
    start += 2;
  }

  return sum;
}
