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

    socket.on('msg_send' , (data) => {  // here data is the messg that we typed in the input box will be received in terminal as mssg recieved + value enterd in input box.
      //  console.log('received' , data.msg)
      //io.emit('msg_rcvd' , data) // emit on io not on socket.
      //socket.emit('msg_rcvd' , data) // emit on socket not on io.
      socket.broadcast.emit('msg_rcvd' , data) // Broadcst done
      // this means that msg send to every other socket except the current one(window)
     // The difference between when emit is done on socket or io is :
     // 1. When socket.emit happens,this means the msg we typed in input box is only remains in one window,and showed up in other window i.e msg send to its own socket.    
     // 2. When io.emit happens,this means the msg we typed in input box is sent also in other windows and everyone can see that msg.    

    // We want that msg should to everyone in the list. ->( io.emit )

    })
})

app.use('/' , express.static(__dirname + '/public'))
// '/' => denotes as root folder and static is syntax to include the directory
// app.listen(3344, () => {

server.listen(3344, () => {
    console.log('Started server')
})
// Runs the server on certain port

