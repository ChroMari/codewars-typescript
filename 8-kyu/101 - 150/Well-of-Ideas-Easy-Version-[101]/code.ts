export const well = (x: string[]): string => {
  const len = x.filter(item => item === 'good').length;

  return len === 0 ? 'Fail!' : len > 2 ? 'I smell a series!' : 'Publish!';
};
