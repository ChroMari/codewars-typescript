export const binaryArrayToNumber = (arr: number[]): number => {
  let j = arr.length - 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      sum += 2**j;
    }
    j--;
  }

  return sum;
}
