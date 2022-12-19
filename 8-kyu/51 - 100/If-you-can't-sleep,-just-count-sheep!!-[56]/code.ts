export function countSheep(num: number): string {
  let i = 1;
  let result = '';

  while(i <= num) {
    result += `${i} sheep...`;
    i++;
  }

  return result;
};
