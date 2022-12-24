export const nthEven = (n: number): number => {
  let i = 0;
  let count = 1;

  while (count !== n) {
    i += 2;
    count++;
  }
  
  return i;
};

/*
export const nthEven = (n: number): number => n * 2 - 2;
*/