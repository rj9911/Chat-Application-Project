# Chat Application using Web Socket
socket.emit -> sent to its own socket and recieved by it only
io.emit -> send to the other sockets also

## Concept of Broadcast
socket.broadcast.emit -> msg sent to every other socket expect the current one(Window).

# Concept of Rooms
As the name suggested, used in making chat rooms. Room consists of some people and when msg is sent to the room. Everyone's in the room will recieved the msg.
Like a Facebook Messenger.

