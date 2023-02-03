export function isTriangle(a: number, b: number, c: number): boolean {
  if (a === b || b === c || c === a) return false;

  if (a > b && a > c) {
    return (a < b + c);
  }

  if (b > a && b > c) {
    return (b < a + c);
  }

  return (c < a + b);
}

/*
export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && a + c > b && b + c > a
*/
