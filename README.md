# Chat Application using Web Socket
socket.emit -> sent to its own socket and recieved by it only
io.emit -> send to the other sockets also

## Concept of Broadcast
socket.broadcast.emit -> msg sent to every other socket expect the current one(Window).

# Concept of Rooms
As the name suggested, used in making chat rooms. Room consists of some people and when msg is sent to the room. Everyone's in the room will recieved the msg.
Like a Facebook Messenger.

# Feature Added
1. After Logged in ->
  You can send message to one person and also to all persons,
  using the above theory. We hv made two Btns in which one btn sends the msg to the specific person For eg. you hv to write : John ,so the msg would be sent to specific person only not to all the peron you have logged in.But if not written any name then by default the msg would be sent to all the persons that are logged in to that server.   

