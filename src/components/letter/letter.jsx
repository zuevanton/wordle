import styles from './letter.module.scss'
const Letter = ({letter, color}) => {
  return (
    <div className={styles.letter} style={{backgroundColor: [color]}}>
      {letter}
    </div>
  )
}

export default Letter