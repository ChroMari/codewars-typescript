export const get_age = (age: string): number => Number(age.slice(0,1));

/* Лучшее решение.
export function get_age(age: string): number {
  return parseInt(age);
}
*/