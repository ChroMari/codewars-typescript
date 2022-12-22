export const expressionsMatter = (a: number, b: number, c: number): number => Math.max(...[(a + b) * c, a * (b + c), a * b * c, a + b * c, a + b + c]);
