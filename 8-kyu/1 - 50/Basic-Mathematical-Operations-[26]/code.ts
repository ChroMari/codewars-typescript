export const basicOp = (operation: string, value1: number, value2: number): number => {
  switch(operation) {
    case '+': 
      return value1 + value2; 
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
};

/*
const ops = {
  "+": (l, r) => l + r,
  "-": (l, r) => l - r,
  "*": (l, r) => l * r,
  "/": (l, r) => l / r,
}
export const basicOp = (operation: keyof typeof ops, value1: number, value2: number): number => (
  ops[operation](value1, value2)
)
*/