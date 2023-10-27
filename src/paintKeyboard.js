import { paintWord } from "./paintword";

export const paintKeyboard = (secret, guesses) => {
  const letters = {};
  for(const word of guesses) {
    const statuses = paintWord(secret, word)
    for(let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      if(statuses[i] === 'wrong place' && letters[letter] !== undefined) {
        continue
      }
      letters[letter] = statuses[i]
    }
  }
  return letters
}
