// Backend Code
// created the http library
const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

// Why we have written server?
const server = http.createServer(app)
const io = socketio(server)
// localhost:3344/socket.io/socket.io.js
// You will get the JS file using the above link. bcoz of this above line.

io.on('connection' ,(socket) => {
    console.log('connected with socket id =' , socket.id)
    
    socket.on('login' , (data) => {
      socket.join(data.username)  // I will make socket join this room
      socket.emit('logged_in') // Send this event back to client. // When we click o start Logged in msg sent back to client and also chat box will be show and loginbox hides.
    })
})

app.use('/' , express.static(__dirname + '/public'))
// '/' => denotes as root folder and static is syntax to include the directory
// app.listen(3344, () => {

server.listen(3344, () => {
    console.log('Started server')
})
// Runs the server on certain port

