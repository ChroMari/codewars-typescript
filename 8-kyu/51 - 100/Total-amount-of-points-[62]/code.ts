export const points = (games : string[]): number => {
  let sum = 0;

  games.forEach(game => {
    const [x, y] = game.split(':');
    if (Number(x) > Number(y)) sum += 3;
    else if (Number(x) === Number(y)) sum += 1;
  });

  return sum;
};
