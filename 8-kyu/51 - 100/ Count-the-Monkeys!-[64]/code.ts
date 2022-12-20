export const monkeyCount = (n: number): number[] => {
  const arrayNumbers: number[] = [];

  for (let i = 1; i <= n; i++) {
    arrayNumbers.push(i);
  }

  return arrayNumbers;
};
