export const warnTheSheep = (queue: string[]): string => {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }

  const position = queue.length - queue.indexOf('wolf') - 1;

  return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
};
