export function number(busStops: [number, number][]): number {
  let sum = 0;

  busStops.map(item => {
    sum += item[0];
    sum = sum - item[1];
  });

  return sum;
}
