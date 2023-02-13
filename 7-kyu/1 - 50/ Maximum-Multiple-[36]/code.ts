export const maxMultiple = (divisor: number, bound: number): number => {
  while (bound % divisor !== 0) {
    bound--;
  }
  
  return bound;
}
