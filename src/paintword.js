export const paintWord = (secret, guess) => {
  const statuses = [];
  const rights = new Set();
  for(let i = 0; i < guess.length; i++) {
    if(guess[i] === secret[i]) {
      statuses[i] = 'right'
      rights.add(guess[i])
    }
  }
  for(let i = 0; i < guess.length; i++) {
    if(secret.includes(guess[i]) && rights.has(guess[i])){
      statuses[i] = 'wrong place'
      continue
    }
    statuses[i] = 'wrong'
  }
  return statuses
}
console.log(paintWord("PEACE", "AWARD"))