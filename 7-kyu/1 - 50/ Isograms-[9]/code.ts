export const isIsogram = (str: string): boolean => {
  str = str.toLowerCase();
  const newStr = [...new Set(str.split(''))];

  return str.length === newStr.length;
}
