export const enough = (cap: number, on: number, wait: number): number => (cap - on) - wait >= 0 ? 0 : Math.abs((cap - on) - wait);
