export const minValue = (values: number[]): number => +[...new Set(values)].sort((a, b) => b - a).join('')
