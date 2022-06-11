# Chat Application using Web Socket

socket.emit -> sent to its own socket and recieved by it only
io.emit -> send to the other sockets also
socket.broadcast.emit -> msg sent to every other socket expect the current one(Window).