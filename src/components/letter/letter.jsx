import styles from './letter.module.scss'
const Letter = ({letter, status}) => {
  console.log(status)
  const colors = {
    'right': 'green',
    'wrong place': 'yellow',
    'wrong': 'gray'
  }
  return (
    <div className={styles.letter} style={{backgroundColor: colors[status]}}>
      {letter}
    </div>
  )
}

export default Letter