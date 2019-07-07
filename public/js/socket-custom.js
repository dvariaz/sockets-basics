let socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('Conexion perdida con el servidor');
})

// Enviar informacion
socket.emit('sendMessage', {
    user: 'David',
    msg: 'Hello World! .l.'
}, (res) => {
    console.log(res);
});

socket.on('sendMessage', (msg) => {
    console.log(msg);
})
