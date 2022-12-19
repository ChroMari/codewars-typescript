export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) => arrayOfSheep.reduce((acc, item) => {
  if (item) acc++;
  return acc;
}, 0);

/*
export function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
*/