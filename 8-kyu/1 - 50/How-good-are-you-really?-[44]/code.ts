export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  const countClassPoints = classPoints.length;

  return classPoints.reduce((acc, item) => acc + item, 0) / countClassPoints < yourPoints;
}