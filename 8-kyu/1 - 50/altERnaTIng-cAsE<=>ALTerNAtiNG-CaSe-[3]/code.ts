export const toAlternatingCase = (s: string): string => {
  const len = s.length;
  let newStr = '';

  for (let i = 0; i < len; i++) {
    newStr += s[i].toLowerCase() === s[i] ? s[i].toUpperCase() : s[i].toLowerCase();
  }

  return newStr;
};

/* Лучшее решение.
export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
    .join('');
}
*/