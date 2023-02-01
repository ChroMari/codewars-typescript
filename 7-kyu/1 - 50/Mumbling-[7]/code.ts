export const accum = (s: string): string => {
  s = s.toLowerCase();

  return s
    .split('')
    .map((item, index) => {
      const newStr: string = item.repeat(index + 1);
      return newStr[0].toUpperCase() + newStr.slice(1);
    })
    .join('-')
}
