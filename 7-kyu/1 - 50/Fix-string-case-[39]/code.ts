export const solve = (s: string): string => {
  let countL = 0;
  let countU = 0;
  
  for(let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      countL++;
    } else {
      countU++;
    }
  }

  if (countL < countU) {
    return s.toUpperCase();
  }

  return s.toLowerCase();
}
