export const arr = (n: number = 0): number[] => {
  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
};

/*
export const arr = (n: number = 0): number[] => [...Array(n).keys()];
*/
