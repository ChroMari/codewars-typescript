const alp = 'abcdefghijklmnopqrstuvwxyz';

export const position = (alphabet: string): string => 'Position of alphabet: ' + (alp.indexOf(alphabet) + 1);

/*
export const position = (alphabet: any): string => `Position of alphabet: ${alphabet.charCodeAt() - 96}`;
*/
