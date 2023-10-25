export const paintWord = (secret, guess) => {
  const statuses = [];
  for(let i = 0; i < guess.length; i++) {
    if(guess[i] === secret[i]) {
      statuses.push('right')
      continue
    }
    if(secret.includes(guess[i])){
      statuses.push('wrong place')
      continue
    }
    statuses.push('wrong')
  }
  return statuses
}
