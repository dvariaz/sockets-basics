const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        msg: 'Despidete de tu cuenta maquinola'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data)

        // if(msg.user){
        //     callback({
        //         ok: true
        //     });
        // }else{
        //     callback({
        //         ok: false
        //     })
        // }


    })
})
