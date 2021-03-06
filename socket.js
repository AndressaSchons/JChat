const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


let usersArray = [];

io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('user', user => {
        if(usersArray.indexOf(user) == -1 ){
            console.log(user)
            socket.emit('newUser', user);
            console.log(usersArray)
            socket.emit('userArray', usersArray);
            console.log(usersArray)

        } else {
            console.log("Error");
        }
    })


    socket.on('message', msg =>{
        socket.emit('newMessage', msg);
        socket.broadcast.emit('newMessage', msg);
    })


    socket.broadcast.emit('menssage', 'Um usuário entrou no chat');

    socket.on('disconnect', () => {
        console.log('user disconnected');
        io.emit('message', 'Um usuário saiu do chat')
    })
        socket.on('chatMessage', (msg => {
            io.emit('message', msg)
        }))
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});