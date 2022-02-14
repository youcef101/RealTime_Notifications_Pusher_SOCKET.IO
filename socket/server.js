import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUser, removeUser, getUser } from './socket.js';

//app config
dotenv.config()
const port = process.env.PORT


//socket config
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    }
});



//socket transmission
io.on('connection', socket => {
    socket.on('newUser', (username) => {
        addUser(username, socket.id)

    })

    //receive like notifications
    socket.on('sendLikeNotifications', (data) => {
        console.log(data)
        const user = getUser(data?.receiver);
        user && io.to(user.socketId).emit('sendLikeNotificationsBack', data)
    })

    //receive message notifications
    socket.on('sendNotifications', (data) => {
        console.log(data)
        const user = getUser(data?.receiver);
        user && io.to(user.socketId).emit('sendNotificationsBack', data)
    })

    //disconnect socket
    socket.on('disconnect', () => {
        removeUser(socket.id)
    })
})

//server listen
httpServer.listen(port, () => {
    console.log(`Listen on localhost:${port}`)
})

