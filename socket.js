const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "207.246.125.67:8080",
        methods: ["GET", "POST"]
    }
});


let usersArray = [];

io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('user', user => {
        if(usersArray.indexOf(user) == -1 ){
            console.log(user)
            socket.emit('newUser', user);
        }else {
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