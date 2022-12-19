export const fakeBin = (x:string):string => [...x].map(item => Number(item) < 5 ? '0' : '1').join('');

/*
  export const fakeBin = (x:string):string => x.replace(/\d/g, n => Number(n) < 5 ? '0' : '1');
*/