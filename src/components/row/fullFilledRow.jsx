import Letter from "../letter/letter"
import styles from "./row.module.scss"

const FullFilledRow = ({guess, statuses}) => {
  return (
    <div className={styles.row}>
      {Array(5).fill(0).map((_, i) => {
        return <Letter key={i} letter={guess[i]} status={statuses[i]}  />
      })}
    </div>
  )
}

export default FullFilledRow