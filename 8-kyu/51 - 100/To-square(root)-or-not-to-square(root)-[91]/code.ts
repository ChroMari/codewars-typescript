export const squareOrSquareRoot = (array:number[]) : number[] => array.map((item) => {
  if (Math.sqrt(item) % 1 !== 0) {
    return item ** 2;
  }
  return Math.sqrt(item);
});
