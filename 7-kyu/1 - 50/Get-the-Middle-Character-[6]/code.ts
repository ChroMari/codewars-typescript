export const getMiddle = (s: string): string => {
  if (s.length % 2 !== 0) {
    const len = (s.length - 1) / 2;
    return s[len];
  }

  return `${s[s.length / 2]} ${s[s.length / 2 + 1]}`;
}
