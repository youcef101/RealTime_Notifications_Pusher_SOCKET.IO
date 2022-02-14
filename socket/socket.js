export let onlineUsers = [];

export const addUser = (username, socketId) => {
    !onlineUsers.some(user => user.username === username) &&
        onlineUsers.push({ username, socketId });
    return onlineUsers
}

export const removeUser = (socketId) => {
    return onlineUsers.filter(user => user.socketId !== socketId);
}

export const getUser = (username) => {
    const user = onlineUsers.find(user => user.username === username);
    return user
}