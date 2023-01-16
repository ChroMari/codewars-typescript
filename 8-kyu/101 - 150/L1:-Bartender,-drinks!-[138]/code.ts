const drinkBD: { [key: string]: string; } = {
  'jabroni': 'Patron Tequila',
  'school counselor': 'Hipster Craft Beer',
  'bike gang member': 'Moonshine',
  'politician': 'Your tax dollars',
  'rapper': 'Cristal',
};

export const getDrinkByProfession = (profession: string): string => {
  const keyDB = profession.toLowerCase();

  return (drinkBD[keyDB]) ? drinkBD[keyDB] : 'Beer';
}

/*
export function getDrinkByProfession(profession:string){
  return drinks[profession.toLowerCase()] || "Beer";
}
*/