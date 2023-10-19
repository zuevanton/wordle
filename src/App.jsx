import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Board from './components/board/board'

const keyupListener = e => {
  console.log(e.key)
}

function App() {
  
  useEffect(() => {
    window.addEventListener('keypress', keyupListener)

    return () => window.removeEventListener('keypress', keyupListener)
  }, [])

  return (
    <div className={styles.App} >
      <h1>Wordle</h1>
      <Board />
    </div>
  )
}

export default App
