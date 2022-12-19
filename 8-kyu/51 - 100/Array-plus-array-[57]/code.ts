export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => arr1.reduce((acc, item) => acc + item) + arr2.reduce((acc, item) => acc + item);

/*
  export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    return [...arr1, ...arr2].reduce((a, b) => a + b)
}
*/