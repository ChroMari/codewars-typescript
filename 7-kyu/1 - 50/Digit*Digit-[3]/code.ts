export class Kata {
  static squareDigits(num: number): number {
    const strNums = num.toString().split('');
    let squareStr = strNums.map(strNum => (+strNum) ** 2).join('');

    return +squareStr;
  }
}
