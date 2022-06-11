// Frontend Code
// This is for client side Doing Work
let socket = io()

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').click(() => {
    socket.emit('login' , {
        username : $('#inpUsername').val() ,
        password : $('#inpPassword').val() // when the login event happens these 2 things comes from client to server.
    })
    // Goto network tab and check the webSocket link you see the login with username.
})

socket.on('logged_in' , () => { // when this logged in event works
   $('#loginBox').hide()
   $('#chatBox').show()  // opposite works performed here hide the loginbox and show the chat box when logged in event happens.
})
socket.on('login_failed' , () => {
    window.alert('Username or Password wrong')
})

$('#btnSendMsg').click(() => {
    socket.emit('msg_send', {
       to : $('#inpToUser').val(),
       msg : $('#inpNewMsg').val()
       // This above is done to check to whom i have send the msg, & who send the msg.
       // Client side Stuff
    })
})

socket.on('msg_rcvd',(data) => { // Whenevr i See this msg as 'msg_rcvd' we will get data on my client side. 
    $('#ulMsgs').append($('<li>')
    //.text(data.msg))
    .text(
    `[${data.from}] : ${data.msg}`  // this way we wing show up in the frontend.
    ))
// whenever I see msg_rcvd we append li with text data.
})