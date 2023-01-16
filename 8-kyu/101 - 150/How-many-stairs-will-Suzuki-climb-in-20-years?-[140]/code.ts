export const stairsIn20 = (stairs: number[][]): number => {
  const sum: number = stairs.reduce((res: number, stair: number[]) => {
    return res + stair.reduce((acc, item) => acc + item);
  }, 0);

  return sum * 20;
}
