export const quarterOf = (month: number): number => {
  if (month < 4) return 1;
  if (month < 7) return 2;
  if (month < 10) return 3;
  return 4;
};

/*
export const quarterOf = (month: number): number => Math.ceil(month / 3);
*/
