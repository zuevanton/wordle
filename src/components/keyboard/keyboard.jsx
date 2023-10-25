// import styles from "./keyboard.module.scss"
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

  return (
    <div>
      QWERTYUIOP<br/>
      ASDFGHJKL<br/>
      ZXCVBNM<br/>
    </div>
  )
}

export default Keyboard