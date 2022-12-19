const resultBeast = (role: string, bestRole: string): string => (role === bestRole) ? 'Player 1 won!' : 'Player 2 won!';

export const rps = (p1: string, p2: string): string => {
  if (p1 === p2) {
    return 'Draw!';
  }

  if (p1 === 'scissors') {
    return resultBeast(p2, 'paper');
  }

  if (p1 === 'paper') {
    return resultBeast(p2, 'rock');
  }

  if (p1 === 'rock') {
    return resultBeast(p2, 'scissors')
  }

  return '';
};

/*
  const beats: {[index: string]: string} = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
  }

  export function rps(p1: string, p2: string): string{
    if (p1 === p2) return 'Draw!'
    
    if (beats[p1] == p2) return 'Player 1 won!'
    return 'Player 2 won!'
  }
*/