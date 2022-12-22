export const between = (a: number, b: number): number[] => {
  const resultArr: number[] = [];

  for (let i = a; i <= b; i++) {
    resultArr.push(i);
  }

  return resultArr;
};
