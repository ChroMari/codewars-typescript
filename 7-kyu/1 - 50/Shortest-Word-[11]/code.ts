export const findShort = (s: string): number => {
  const sArrs = s.split(' ');
  let minLength = sArrs[0].length;

  sArrs.forEach(item => {
    if (item.length < minLength) {
      minLength = item.length;
    }
  });

  return minLength;
}
