import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board/board'
import { initBoard } from './components/Helpers/game.helper'
import socket from './utils/socket'

interface gameState {
  board: string[][]
}
function App() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null)
  const [board, setBoard] = useState<gameState['board']>(initBoard())
  const [gameID, setGameID] = useState<string | null>(null)

  const createGame = () => {
    socket.emit('createGame', (roomID: string) => {
      console.log(roomID)
    })
  }

  const joinGame = () => {
    socket.emit('joinGame', gameID, (userid: string) =>{
      console.log(gameID)
      console.log( {userid})

    })
  }

  const handleAttack = (coordenades: string) => {
    console.log(coordenades)
    setSelectedCell(coordenades)
  }

  useEffect(() => {
    socket.on('err-message', (message: string) => {
      console.log(message)
    })
  },[])

  useEffect(() => {
    socket.on('message', (message: string) => {
      console.log(message)
    })
  },[])

  return (
    <div className="App">
      <div>
        <button onClick={createGame}>Create game</button>
        <input onChange={(event) => setGameID(event.target.value)}></input>
        <button onClick={joinGame}>Join game</button>
      </div>
      <br/>
      <Board onClick={handleAttack} />
    </div>
  )
}

export default App
