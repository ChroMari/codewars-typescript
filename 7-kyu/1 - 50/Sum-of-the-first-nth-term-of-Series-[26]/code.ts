export const SeriesSum = (n: number): string => {
  let sum = 0;
  let step = 1;
  
  for (let i = 0; i < n; i++) {
    sum += 1/step;
    step += 3;
  }

  return sum.toFixed(2);
}
