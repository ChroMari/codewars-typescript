const abc = 'nopqrstuvwxyz';

export function printerError(s: string): string {
  const len = s.length;
  let err = 0;
  const sArrs = s.split('');

  sArrs.forEach(item => {
    if (abc.indexOf(item) !== -1) err++;
  })

  return `${err}/${len}`;
}
