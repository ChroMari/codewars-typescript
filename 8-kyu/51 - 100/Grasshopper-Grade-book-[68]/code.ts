export const getGrade = (a: number, b: number, c: number): string => {
  const score = (a + b + c) / 3;

  if (90 <= score && score <= 100) return 'A';
  if (80 <= score && score < 90) return 'B';
  if (70 <= score && score < 80) return 'C';
  if (60 <= score && score < 70) return 'D';
  return 'F';
};
