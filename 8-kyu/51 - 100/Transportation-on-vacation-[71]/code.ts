export const rentalCarCost = (d: number): number => {
  const startCost = d * 40;
  const discount = (d >= 7) ? 50 : (d >= 3) ? 20 : 0;

  return startCost - discount;
};
