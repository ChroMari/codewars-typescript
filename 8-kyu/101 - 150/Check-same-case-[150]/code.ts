const abc = 'qwertyuiopasdfghjklzxcvbnm';

export const sameCase = (a : string, b : string): number => {
  if (!abc.includes(a.toLowerCase()) || !abc.includes(b.toLowerCase())) {
    return -1;
  }

  if (a.toLowerCase() === a && b.toLowerCase() === b) {
    return 1;
  }

  if (a.toUpperCase() === a && b.toUpperCase() == b) {
    return 1;
  }

  return 0;
};
