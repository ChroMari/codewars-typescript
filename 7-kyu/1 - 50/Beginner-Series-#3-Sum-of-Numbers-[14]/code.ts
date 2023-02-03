export function getSum(a: number, b: number): number {
  const start = Math.min(a, b);
  const finish = Math.max(a, b);
  let sum = 0;

  for (let i = start; i <= finish; i++) {
    sum += i;
  }

  return sum;
}
