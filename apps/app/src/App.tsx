import { useState } from 'react'
import './App.css'
import Board from './components/Board/board'
import { initBoard } from './components/Helpers/game.helper'

interface gameState {
  board: string[][]
}
function App() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null)
  const [board, setBoard] = useState<gameState['board']>(initBoard())

  const handleAttack = (coordenades: string) => {
    console.log(coordenades)
    // send coordenades to server
    // receive response from server
    // update board
    setSelectedCell(coordenades)
  }

  return (
    <div className="App">
      <Board onClick={handleAttack} />
    </div>
  )
}

export default App
