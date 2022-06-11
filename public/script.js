// Frontend Code
// This is for client side Doing Work
let socket = io()    // io is a type of function that we get in socket variable

// Create identifier for my frontend

let btnSend = document.getElementById('btnSend')
let inpMsg = document.getElementById('inpMsg')
let ulMsgList = document.getElementById('ulMsgList')

btnSend.onclick = function() {
    socket.emit('msg_send', { // Displayed this msg when this event happens
      msg : inpMsg.value
    }) 
    inpMsg.value = ''  // Check in network section in inspect that now message is sent. if clicked on send
}

socket.on('msg_rcvd' , (data) => { // this whole thing enters the input box msg to the li box downside.
    let liNewMsg = document.createElement('li')
    liNewMsg.innerText = data.msg
    ulMsgList.appendChild(liNewMsg)
})

