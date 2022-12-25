export const multiTable = (number:number):string => {
  const result: string[] = [];
  
  for (let i = 1; i <= 10; i++) {
    result.push(`${i} * ${number} = ${i * number}`);
  }

  return result.join('\n');
};
