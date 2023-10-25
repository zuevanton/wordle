import styles from "./keyboard.module.scss"
import { useEffect } from "react";
const Keyboard = ({onLetterPress, onEnterPress, onBackspacePress}) => {

  const keyupListener = e => {
    const letter = e.key.toLowerCase();
    if(letter === 'enter') {
      onEnterPress()
    }
    if(letter === 'backspace') {
      onBackspacePress()
    }
    if(letter.match(/^[a-z]$/)){
      onLetterPress(letter)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyupListener)

    return () => window.removeEventListener('keydown', keyupListener)
  }, [])

  const keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
  ]

  return (
    <div className={styles.keyboard}>
      {
        keys.map((x, i) => {
          return <div key={i} className={styles.row}>
            {x.map(key => <div key={key} className={styles.key}>{key}</div>)}
          </div>
        })
      }
    </div>
  )
}

export default Keyboard