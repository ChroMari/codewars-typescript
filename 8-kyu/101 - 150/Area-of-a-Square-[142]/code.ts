export const squareArea = (num : number) : number =>  {
  const x = (num * 4) / (Math.PI * 2);

  return +(x * x).toFixed(2);
}

/*
export const squareArea = (num : number) : number =>  {
   return +((2 * num / Math.PI) ** 2).toFixed(2)
}
*/
