export class G964 {
  public static nbDig(n: number, d: number): number {
    let sum = 0;
    const regexp = new RegExp(d.toString(), 'g');
  
    for (let i = 0; i <= n; i++) {
      const newNumberToStr = (i * i).toString();
      sum += (newNumberToStr.length - newNumberToStr.replace(regexp, '').length);
    }
  
    return sum;
  }
}
