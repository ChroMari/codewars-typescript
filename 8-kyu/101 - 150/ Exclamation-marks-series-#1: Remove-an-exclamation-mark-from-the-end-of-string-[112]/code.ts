export const remove = (s: string): string => s[s.length - 1] === '!' ? s.slice(0, -1) : s;

/*
export const remove = (s: string): string => s.replace(/!$/, '')
*/
