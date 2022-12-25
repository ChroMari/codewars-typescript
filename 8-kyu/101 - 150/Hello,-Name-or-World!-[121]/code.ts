export const hello = (name = ''): string => {
  if (name.length === 0) {
    return 'Hello, World!';
  }

  return `Hello, ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`
};
