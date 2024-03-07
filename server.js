require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const AWS = require('aws-sdk');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

AWS.config.update({
    region: 'us-east-1', // Your AWS region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set in your .env file
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Set in your .env file
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    // Setup your AWS Transcribe connection here
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
