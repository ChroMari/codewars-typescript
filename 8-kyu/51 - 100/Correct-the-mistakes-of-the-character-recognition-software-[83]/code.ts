export const correct = (s: string): string => s.split('')
  .map(item => {
    if (item === '5') return 'S';
    if (item === '0') return 'O';
    if (item === '1') return 'I';
    return item;
  })
  .join('');

/*
export function correct(s: string): string{
  return s.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O')
}
*/