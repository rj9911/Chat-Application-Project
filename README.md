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

2. Proper Password based Log in system ->
  As we hv seen anybody can log from two Different names, we need to make system more secure, we hv given the security that none other one can login the other's account with different password. If first times login then password is sent but for second time you hv to login with your previous password that you hv set for the particular username.

  When a person log in we expect him to give username as well password.
  Here First person Logged in with username and password.These credentials will hv saved in the terminal only.and When same username try to access try to access with different password other than in credentials then pop up msg shows that incorrect username or password. And now Login for the same username happen only when you given the previous password with which you hv loggedin earlier.

 # Q. How this SocketMap is useful?
  We can tell the person name who sends the msg by seeing the id from socketMap.
  We want every client who logged in to validate to the server who the client is.
  We will not trust what the client says we hv to check from server side.

 # Conclusions
 This is how websocket works using Socket.io . This is not a production ready code as there are security concerns in this. 

