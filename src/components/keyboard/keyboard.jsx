import styles from "./keyboard.module.scss"
import { useEffect } from "react";
const Keyboard = ({onLetterPress, onEnterPress, onBackspacePress, statuses}) => {
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
            {x.map(key => {
              let color = 'transparent';
              if(statuses[key] === 'wrong') {
                color = 'gray'
              } else if (statuses[key] === 'wrong place') {
                color = 'yellow'
              } else if (statuses[key] === 'right') {
                color = 'green'
              }
              return <button
                name={key} 
                key={key} 
                className={styles.key}
                onClick={() => onLetterPress(key)}
                style={{backgroundColor: color}} >
                  {key}
              </button>
            })}
          </div>
        })
      }
    </div>
  )
}

export default Keyboard