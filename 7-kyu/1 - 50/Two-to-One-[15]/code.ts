export const longest = (s1:string, s2:string): string => {
  let newStr: string = s1 + s2;
  let strArrs = newStr.split('');
  
  return [...new Set(strArrs)].sort().join('');
}
