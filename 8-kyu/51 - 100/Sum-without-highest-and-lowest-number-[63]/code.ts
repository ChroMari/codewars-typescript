export const sumArray = (array:number[] | null) : number => {
  if (!array || array.length === 2) return 0;

  const sortArray = array.sort((a, b) => a - b).slice(1, -1);

  return sortArray.reduce((acc, item) => acc + item, 0);
};
