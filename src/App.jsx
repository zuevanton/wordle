import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Board from './components/board/board'
import Keyboard from './components/keyboard/keyboard';
import { words } from './words';


let win = false;
let lose = false;

function App() {
  const [state, setState] = useState({
    secretWord: '',
    guesses: [],
    currentWord: ''
  })
  const {secretWord, guesses, currentWord} = state;

  useEffect(() => {
    const newSecretWord = words[Math.floor(Math.random() * words.length)];
    setState(prev => ({ ...prev, secretWord: newSecretWord }))
  }, [])

  const makeGuess = () => {
    setState(prev => {
      if(prev.currentWord.length === 5){
        return {
          ...prev,
          guesses: [...prev.guesses, prev.currentWord],
          currentWord: ''
        }
      } else return prev
    })
  }

  const onLetterPress = (letter) => {
    setState(prev => {
      if(prev.currentWord.length < 5) {
        return {...prev, currentWord: prev.currentWord + letter}
      } else {
        return prev
      }
    })
  }

  const onBackspacePress = () => {
    setState(prev => ({...prev, currentWord: prev.currentWord.slice(0, prev.length - 1)}))
  }
  
  return (
    <div className={styles.App} >
      <h1>Wordle</h1>
      <Board 
        secretWord={secretWord}
        guesses={guesses}
        currentWord={currentWord}
       />
       <h2>
        {win && 'Победа!'}
        {lose && 'Вы проиграли!'}
       </h2>
      <Keyboard onLetterPress={onLetterPress} onEnterPress={makeGuess} onBackspacePress={onBackspacePress} />
    </div>
  )
}

export default App