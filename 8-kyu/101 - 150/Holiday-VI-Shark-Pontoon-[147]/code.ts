export const shark = (pontoonDistance: number, sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string => {
  sharkSpeed = (dolphin) ? sharkSpeed / 2 : sharkSpeed;

  const sharkTime = sharkDistance / sharkSpeed;
  const youTime = pontoonDistance / youSpeed;

  return (sharkTime - youTime > 0) ? 'Alive!' : 'Shark Bait!';
}
