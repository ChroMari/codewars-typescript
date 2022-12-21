export function powersOfTwo(n:number):number[]{
  const resultArr: number[] = [];

  for (let i = 0; i <= n; i++) {
    resultArr.push(2 ** i);
  }

  return resultArr;
};
