import Letter from "../letter/letter"
import styles from "./row.module.scss"

const FullFilledRow = ({guess, secretWord}) => {
  return (
    <div className={styles.row}>
      {Array(5).fill(0).map((_, i) => {
        let color = 'gray'
        if(secretWord.includes(guess[i])){
          if(secretWord[i] === guess[i]) {
            color = 'green'
          } else {
            color = 'yellow'
          }
        } 
        return <Letter key={i} letter={guess[i]} color={color}  />
      })}
    </div>
  )
}

export default FullFilledRow