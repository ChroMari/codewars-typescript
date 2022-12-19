export const toCsvText = (array:number[][]):string => {
  const len = array.length - 1;

  return array.reduce((acc, item, index) => {
    let str = `${acc}${item.join(',')}`
    if (index !== len) str += `\n`;

    return str;
  }, '');
}

/* Лучшее решение.
export function toCsvText(array: number[][]): string {
  return array.join('\n');
}
*/