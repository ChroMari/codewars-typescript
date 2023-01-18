export const parseF = (s: string): number | null => {
  if (isNaN(Number(s))) return null;
  
  return parseFloat(s);
}
