export function findMultiples(integer: number, limit: number): number[] {
  const resultArr: number[] = [];

  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) resultArr.push(i);
  }

  return resultArr;
};
