const express = require('express');
const cors = require('cors')
const crypto = require('crypto');


const PORT = process.env.PORT || 3000;
const socketio = require('socket.io');
const app = express();


app.use(express.json())
app.use(cors())


const currentGames ={

}

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const io = require('socket.io')(server, {
    cors: {
      origin: '*'
    }
  })
  
  io.on('connection', (socket) => {

    socket.on('createGame', (callback) => {
        const roomID = crypto.randomUUID()
        socket.join(roomID)
        currentGames[roomID] = { players: 1 }
        console.log('user created a game: ', roomID)
        callback(roomID)
    })

    socket.on('joinGame', ({ gameID }) => {
        if(!currentGames[gameID]){
            console.log('game does not exist')
            socket.emit('err-message', 'Game does not exist')   
            return
        }
        if(currentGames[gameID].players >= 2){
            console.log('game is full')
            socket.emit('err-message', 'Game is full')   
            return
         }
        console.log('user joined to ', gameID)
        socket.join(gameID)
        currentGames[gameID].players++
        socket.emit('message','Welcome to the game')
        socket.broadcast.to(gameID).emit('message', 'Another player joined the game')
    })
})