export const abbrevName = (name: string): string => {
  const [first, second] = name.split(' ');
  return `${first[0].toUpperCase()}.${second[0].toUpperCase()}`;
};
