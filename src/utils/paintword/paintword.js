export const paintWord = (secret, guess) => {
  const statuses = [];
  const rights = {};
  for(let i = 0; i < guess.length; i++) {
    if(guess[i] === secret[i]) {
      statuses[i] = 'right'
      rights[guess[i]] ??= []
      rights[guess[i]].push(i)
    }
  }
  for(let i = 0; i < guess.length; i++) {
    if(rights[guess[i]]?.includes(i)) continue
    if(secret.includes(guess[i]) && secret[i] !== guess[i] && rights[guess[i]]?.includes(i) !== false){
      statuses[i] = 'wrong place'
      continue
    }

    statuses[i] = 'wrong'
    
  }
  return statuses
}