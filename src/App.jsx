import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Board from './components/board/board'

function App() {

  const [secretWord, setSecretWord] = useState('hello')
  const [guesses, setGuesses] = useState(['asdfg', 'sdfgg'])
  const [currentWord, setCurrentWord] = useState('')

  const makeGuess = () => {
    if(currentWord.length === 5){
      setGuesses(prev => [...prev, currentWord])
      setCurrentWord('')
    }
  }

  const keyupListener = e => {
    const letter = e.key.toLowerCase();
    if(letter === 'enter') {
      return makeGuess()
    }
    if(letter === 'backspace') {
      return setCurrentWord(prev => prev.slice(0, prev.length - 1))
    }
    if(letter.match(/^[a-z]$/) && currentWord.length < 5){
      setCurrentWord(prev => prev + letter)
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', keyupListener)

    return () => window.removeEventListener('keydown', keyupListener)
  }, [currentWord])

  return (
    <div className={styles.App} >
      <h1>Wordle</h1>
      <Board 
        secretWord={secretWord}
        guesses={guesses}
        currentWord={currentWord}
        setGuesses={setGuesses}
        setCurrentWord={setCurrentWord}
       />
    </div>
  )
}

export default App
