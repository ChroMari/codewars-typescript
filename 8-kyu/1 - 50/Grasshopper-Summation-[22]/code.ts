export const summation = (num:number)=> { 
  let sum = 0;

  for (let i = 1; i <= num; i++) sum += i;

  return sum;
}

/*
export const summation = (num:number) => num * (num + 1) / 2;
*/