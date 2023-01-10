const express = require('express');
const cors = require('cors')
const crypto = require('crypto');


const PORT = 3000;
const socketio = require('socket.io');
const app = express();


app.use(express.json())
app.use(cors())


const currentGames ={
    game1: {
        user1:{
            board: [],
        }, 
        user2:{
            board: [],
        }
    },
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
        const gameID = crypto.randomUUID()
        const userID = crypto.randomUUID()
        socket.join(gameID)
        currentGames[gameID] = {players: [userID]}
        console.log('user created a game: ', gameID)
        callback({roomID, userID})
    })

    socket.on('joinGame', ( gameID, callback) => {
        console.log('user joined to ', gameID)
        if(!currentGames[gameID]){
            console.log('game does not exist')
            socket.emit('err-message', 'Game does not exist')   
            return
        }
        if(Object.keys(obj).length >= 2){
            console.log('game is full')
            socket.emit('err-message', 'Game is full')   
            return
         }
        const userID = crypto.randomUUID()
        console.log('user joined to ', gameID)
        socket.join(gameID)
        currentGames[gameID].players.push(userID)
        callback({userID})
        socket.emit('message','Welcome to the game')
        socket.broadcast.to(gameID).emit('message', 'Another player joined the game')
    })

    socket.on('sendBoard', (gameId, user, board) => {
        const game = currentGames[gameId]
        game[user].board = board      
    })
})