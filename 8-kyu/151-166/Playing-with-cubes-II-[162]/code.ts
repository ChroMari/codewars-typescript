export class Cube {
  private _side: number;
  
  constructor(num = 0) {
    this._side = (num < 0) ? Math.abs(num) : num;
  }
  
  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
}
