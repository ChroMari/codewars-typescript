export function checkExam(array1: string[], array2: string[]): number {
  let sum = 0;

  array1.forEach((item, index) => {
    if (array2[index] === item) {
      sum += 4;
    } else if (array2[index] !== '') {
      sum -= 1;
    }
  });

  return sum < 0 ? 0 : sum;
 }
