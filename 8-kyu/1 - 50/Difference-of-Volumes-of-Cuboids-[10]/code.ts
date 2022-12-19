export const findDifference = (a: number[], b: number[]): number =>{
  const findA = a[0] * a[1] * a[2];
  const findB = b[0] * b[1] * b[2];

  return Math.max(findA, findB) - Math.min(findA, findB);
}

/*
export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}
*/