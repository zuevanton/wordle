import Letter from "../letter/letter"
import styles from "./row.module.scss"

const CurrentRow = ({currentWord}) => {
  return (
    <div className={styles.row}>
      {Array(5).fill(0).map((_, i) => {
        return <Letter key={i} letter={currentWord[i]} />
      })}
    </div>
  )
}

export default CurrentRow