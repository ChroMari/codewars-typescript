const num = '1234567890';

export class Kata {
  static validatePin(pin: string): boolean {
    let flag = true;
    let i = 0;

    while (pin.length > i) {
      if (num.indexOf(pin[i]) === -1) flag = false;
      i += 1;
    }

    if (pin.length === 4 || pin.length === 6) {
      return flag;
    }

    return false;
  }
}
