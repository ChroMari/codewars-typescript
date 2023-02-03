String.prototype.toJadenCase = function () {
  const strArrs = this.split(' ');
  const resArrs = strArrs.map(item => item[0].toUpperCase() + item.slice(1));

  return resArrs.join(' ');
}

interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}
