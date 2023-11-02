import Letter from "../letter/letter"
import styles from "./row.module.scss"

export const EmptyRow = () => {
  return (
    <div className={styles.row}>
      {Array(5).fill(0).map((_, i) => {
        return <Letter key={i} />
      })}
    </div>
  )
}

