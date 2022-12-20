export const doubleChar = (str: string): string => {
  let newStr = '';

  str.split('').forEach(item => newStr += (item + item));

  return newStr;
};

/*
export const doubleChar = ($: string) => [...$].reduce((ac, e) => ac + e + e, '')
*/
