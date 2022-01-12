const socket = io();

socket.on('message', message => {
    console.log(message);
})

//Puxa o chat por id
const chatForm = document.getElementById('chatPart');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //pega a mensagem do chat
    const msg =e.target.elemensts.msg.value;

    //envia mensagem pro chat
    socket.emit('mensagem', msg);
})