export const countPositivesSumNegatives = (input: any): number[] => {
  if (input && input.length !== 0) {
    const countPositive = input.filter((item: any) => item > 0).length;
    const sumNegative = input.reduce((acc: any, item: any): any => {
      if (item < 0) return acc += item;
      return acc;
    }, 0);

    return [countPositive, sumNegative];
  }
  return [];
};
