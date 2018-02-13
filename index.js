const net = require('net')

const server = net.createServer((socket) => {

	socket.on("connect", () => {
		console.log("Client connected!")
	})

	socket.on("close", () => {
		console.log("Client disconnected!")
	})
	
	socket.on("data", (data) => {
		try{
			console.log(data.toString('utf-8'))
			console.log(JSON.parse(data.toString('utf8')).message)
		} catch (ex) {
			console.log(ex)
		}
	})
	
})

server.listen(44000, () => {
	console.log("Listening on port 44000")
})