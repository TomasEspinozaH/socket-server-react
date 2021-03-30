class Sockets {
  constructor(io) {
    this.io = io;
    this.socketsEvents();
  }

  socketsEvents() {
    //On connection
    this.io.on('connection', socket => {
      // Escuchar evento
      socket.on('mensaje-al-servidor', data => {
        console.log(data);

        this.io.emit('mensaje-del-servidor', data);
      });
    });
  }
}

module.exports = Sockets;
