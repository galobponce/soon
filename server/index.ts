import http from 'http';
import { Server, Socket } from 'socket.io';


// Creamos servidor http
const httpServer = http.createServer();


const port = Number(process.env.DEFAULT_PORT) || 5500;


// Creamos un socket indicando que aceptamos llamados de cualquier origen
const io = new Server(httpServer, {
    cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});


// Esperamos a que un socket cliente se conecte con nuestro socket servidor
io.on("connection", (socket: Socket) => {


    // Le mandamos su id para confirmar la conexión y
    // que se identifique a nivel usuario
    // (Tener en cuenta que el id de socket se utiliza como id de usuario)
	socket.emit("socket-id", socket.id);


	// Cuando nos piden terminar la conexión
	socket.on("disconnect", () => {
		socket.broadcast.emit("call-ended")
	});


	// Cuando nos piden llamar a un usuario
	socket.on("call-user", ({ from, name, user, data }) => {
		io.to(user).emit("call-user", { from, name, data });
	});


	// Cuando nos piden responder una llamada
	socket.on("answer-call", ({ to, data }) => {
		io.to(to).emit("call-accepted", data)
	});
});


// Corremos el servidor
httpServer.listen(port, () => console.log(`http server running at port: ${port}`));