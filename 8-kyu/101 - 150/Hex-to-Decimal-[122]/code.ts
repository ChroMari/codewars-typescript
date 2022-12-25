export const hexToDec = (hexString:string):number => {
  const pars = parseInt(hexString, 16);

  return isNaN(pars) ? 0 : pars;
};
