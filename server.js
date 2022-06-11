// Backend Code
// created the http library
const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')
const { SocketAddress } = require('net')

// Why we have written server?
const server = http.createServer(app)
const io = socketio(server)
// localhost:3344/socket.io/socket.io.js
// You will get the JS file using the above link. bcoz of this above line.

let users = {
   'Priyam' : 'no%867'
}
let socketMap = {} // empty objectww

io.on('connection' ,(socket) => {
    console.log('connected with socket id =' , socket.id)
    
    function login(s,u) { //s -> socket , u -> data.username
        s.join(u) // I will make socket join this room if the password is correct
         // I will make socket join this room
        s.emit("logged_in") // Send this event back to client. // When we click o start Logged in msg sent back to client and also chat box will be show and loginbox hides. // Send this event back to client. // When we click o start Logged in msg sent back to client and also chat box will be show and loginbox hides.
        socketMap[s.id] = u // in the socket map object array
        console.log(socketMap)
    }
    
    socket.on('login' , (data) => {
    // Key - value pairs
      if(users[data.username]){ // if ths data.username key exists
       if(users[data.username] == data.password){ // if that correct do the same thing
          login(socket ,data.username)
       } else {
        socket.emit('login_failed') // log in failed if password is incorrect
       }
    }else {
        users[data.username] = data.password // if above thing doesn't happen then we see it's a new user, we add his new username with password.
       login(socket , data.username) // we hv made function login as it will make my code easier.
      }
      console.log(users) //see the state on teh server.
    })
    // In my Server side script
    socket.on('msg_send' ,(data) => { // if I found msg_send we return teh data
      data.from = socketMap[socket.id] // to from data is going meand senders username.
      if(data.to) { // If data.to exists then this if executed
         io.to(data.to).emit('msg_rcvd' ,data) // Send in this room (io.to)
      } else {
        socket.broadcast.emit('msg_rcvd',data)
      }
    })
})

app.use('/' , express.static(__dirname + '/public'))
// '/' => denotes as root folder and static is syntax to include the directory
// app.listen(3344, () => {

server.listen(3344, () => {
    console.log('Started server')
})
// Runs the server on certain port

