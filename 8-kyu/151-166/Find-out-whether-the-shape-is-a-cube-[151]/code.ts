export const cubeChecker = (volume: number, side: number): boolean => {
  if (side <= 0) return false;
  
  return volume === side * side * side;
}
