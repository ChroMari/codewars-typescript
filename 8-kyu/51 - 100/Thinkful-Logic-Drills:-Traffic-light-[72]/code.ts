interface SwitchLight {
  [key: string]: string,
}

const switchLight: SwitchLight = {
  'green': 'yellow',
  'yellow': 'red',
  'red': 'green',
};

export const updateLight = (current: string): string => switchLight[current];
