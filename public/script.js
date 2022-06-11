// Frontend Code
// This is for client side Doing Work
let socket = io()

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').click(() => {
    socket.emit('login' , {
        username : $('#inpUsername').val()
    })
    // Goto network tab and check the webSocket link you see the login with username.
})

socket.on('logged_in' , () => { // when this logged in event works
   $('#loginBox').hide()
   $('#chatBox').show()  // opposite works performed here hide the loginbox and show the chat box when logged in event happens.
})

$('#btnSendMsg').click(() => {
    socket.emit('msg_send', {
       to : $('#inpToUser').val(),
       msg : $('#inpNewMsg').val()
       // This above is done to check to whom i have send the msg, & who send the msg.
       // Client side Stuff
    })
})