export const getAverage = (marks:number[]):number => {
  const len = marks.length;

  return Math.floor(marks.reduce((acc, item) => acc + item) / len);
};
