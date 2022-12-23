export function shortLongShort(a:string, b:string) {
  if (a.length < b.length) return a + b + a;
  return b + a + b;
};
