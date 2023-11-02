import { paintWord } from "../../utils/paintword/paintword"
import {CurrentRow} from "../row/currentRow"
import {EmptyRow} from "../row/emptyRow"
import {FullFilledRow} from "../row/fullFilledRow"

export const Board = ({secretWord, currentWord, guesses}) => {
  const isWin = guesses.at(-1) === secretWord;
  return (
    <div>
      {guesses.map((guess, i) => {
        return <FullFilledRow key={i}
          guess={guess} 
          statuses={paintWord(secretWord, guess)} 
        />
      })}
      {guesses.length !== 6 && (
        <>
          {isWin ? 
          <EmptyRow />
          :
          <CurrentRow currentWord={currentWord} secretWord={secretWord} />}
          
          {Array(6 - guesses.length - 1).fill(0).map((_, i) => {
            return <EmptyRow key={i} />
          })}
        </>
      )}
    </div>
  )
}
