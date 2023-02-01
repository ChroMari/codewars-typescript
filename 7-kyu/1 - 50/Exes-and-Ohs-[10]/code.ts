export function xo(str: string) : boolean {
  const oNotStr = str.replace(/o/gi, '');
  const xNotStr = str.replace(/x/gi, '');

  return oNotStr.length === xNotStr.length;
}
