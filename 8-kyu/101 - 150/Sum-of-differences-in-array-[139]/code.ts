export const sumOfDifferences = (arr: number[]): number => {
  let sum = 0;

  arr = arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }

  return sum;
}

/*
export function sumOfDifferences(xs: number[]): number {
  return Math.max(...xs) - Math.min(...xs) | 0;
}
*/