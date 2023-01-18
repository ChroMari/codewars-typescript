export const nearestSq = (n : number) : number => {
  const sqrtInt = Math.round(Math.sqrt(n));

  return sqrtInt ** 2;
};
