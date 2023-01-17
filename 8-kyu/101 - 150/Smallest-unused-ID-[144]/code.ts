export const nextId = (ids: number[]): number => {
  for (let i = 0; i < ids.length; i++) {
    if (!ids.includes(i)) {
      return i;
    }
  }

  return ids.length;
}

/*
export function nextId(ids: number[]): number {
  let i = 0;
  
  while(ids.includes(i)) {
    i++
  }
  
  return i;
}
*/