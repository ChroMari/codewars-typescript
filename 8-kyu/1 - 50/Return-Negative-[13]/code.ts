export const makeNegative = (num: number): number => num < 0 ? num : -num;

/* Лучшее решение
export const makeNegative = (num: number): number => -Math.abs(num);
*/