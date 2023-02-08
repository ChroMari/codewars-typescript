export function reverseWords(str: string): string {
  const newStrArrs = str.split(' ');

  return newStrArrs.map(item => item.split('').reverse().join('')).join(' ');
}
