import { paintWord } from "../../paintword"
import CurrentRow from "../row/currentRow"
import EmptyRow from "../row/emptyRow"
import FullFilledRow from "../row/fullFilledRow"

const Board = ({secretWord, currentWord, guesses}) => {
  return (
    <div>
      {guesses.map((guess, i) => {
        return <FullFilledRow key={i}
          secretWord={secretWord} 
          guess={guess} 
          statuses={paintWord(secretWord, guess)} 
        />
      })}
      {guesses.length !== 6 && (
        <>
          <CurrentRow currentWord={currentWord} secretWord={secretWord} />
          {Array(6 - guesses.length - 1).fill(0).map((_, i) => {
            return <EmptyRow key={i} />
          })}
        </>
      )}
    </div>
  )
}

export default Board