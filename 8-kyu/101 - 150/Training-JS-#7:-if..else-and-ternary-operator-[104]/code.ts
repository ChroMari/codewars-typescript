export const saleHotdogs = (n: number): number => {
  const price = (n >= 10) ? 90 : (n >= 5 && n < 10) ? 95 : 100;

  return price * n;
};
