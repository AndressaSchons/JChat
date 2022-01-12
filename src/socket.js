const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
    });

    //bem vindo
    socket.emit('menssage', 'Seja bem vindo');

    socket.broadcast.emit('menssage', 'Um usuário entrou no chat');

    socket.on('disconnect', () => {
        io.emit('message', 'Um usuário saiu do chat')
    })
        socket.on('chatMessage', (msg => {
            io.emit('message', msg)
        }))
});