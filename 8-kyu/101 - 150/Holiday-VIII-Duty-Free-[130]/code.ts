export const dutyFree = (normPrice: number, discount: number, hol: number): number => Math.floor(hol / ((normPrice / 100) * discount));
