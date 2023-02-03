const dnaObj: { [key: string]: string; }  = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

export class Kata {
  static dnaStrand(dna: string) {
    return dna.split('').map(item => dnaObj[item]).join('');
  }
}
