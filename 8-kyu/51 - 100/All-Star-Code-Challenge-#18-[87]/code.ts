export const strCount = (str: string, letter: string): number => {
  const regExp = new RegExp(letter, 'g');
  const lenStr = str.length;
  const lenRegExp = str.replace(regExp, '').length;

  return lenStr - lenRegExp;
};

/*
export const strCount = (str: string, letter: string) => [...str].filter(c => c === letter).length;
*/