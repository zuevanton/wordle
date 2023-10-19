import Row from "../row/row"

const Board = () => {
  return (
    <div>
      {new Array(6).fill(0).map((_, i) => {
        return <Row key={i} />
      })}
    </div>
  )
}

export default Board