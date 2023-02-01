export class Kata {
  static getCount(str: string): number {
    let strNotVowels = str.replace(/[aeiou]/ig, '');

    return str.length - strNotVowels.length;
  }
}
