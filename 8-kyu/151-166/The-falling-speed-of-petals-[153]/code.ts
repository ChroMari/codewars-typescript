export const sakuraFall = (v: number): number => {
  const height = 5 * 80;
  
  return v <= 0 ? 0 : height / v;
}
