export const solution = (str: string, ending: string): boolean => str.slice(str.length - ending.length) === ending;
