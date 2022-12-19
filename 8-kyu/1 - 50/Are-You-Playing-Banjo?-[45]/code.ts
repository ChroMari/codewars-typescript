export const areYouPlayingBanjo = (name: string): string => name + (name[0].toLowerCase() === 'r' ? " plays banjo" : " does not play banjo");
