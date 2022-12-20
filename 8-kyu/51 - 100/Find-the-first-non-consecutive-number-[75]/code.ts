export const firstNonConsecutive = (arr: number[]) : null | number => {
  let startIndex = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (startIndex !== arr[i]) {
      return arr[i];
    }
    startIndex++;
  }

  return null;
};

/*
export function firstNonConsecutive (arr: number[]) : null | number {
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] + 1 != arr[i + 1])
      return arr[i + 1]
  }
  return null
}
*/
