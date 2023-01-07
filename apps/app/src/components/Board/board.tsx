import './board.css'

export default function Board(props: any) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  return (
    <section>
      <div className="board-title">
        <span />
        {rows.map((row: string) => {
          return <span key={row}>{row}</span>
        })}
      </div>

      <div className="board">
        {rows.map((row: string, indexRow: number) => {
          return (
            <div key={row} role="row" className="board-row">
              <span key={row}>{columns[indexRow]}</span>
              <div className="a">
                {columns.map((col: string) => {
                  return (
                    <button
                      className="board-cell"
                      key={`${row}${col}`}
                      onClick={() => props.onClick(`${row}${col}`)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
function handleClickEvent(event: Event | undefined) {
  throw new Error('Function not implemented.')
}
