export class Kata {
  static highAndLow(numbers: string): string {
    const arrNumbers = numbers.split(' ').sort((a, b) => +b - +a);

    return `${arrNumbers[0]} ${arrNumbers[arrNumbers.length - 1]}`;
  }
}
