const net = require('net')

const server = net.createServer((socket) => {

	socket.on("connect", () => {
		console.log("Client connected!")
	})

	socket.on("close", () => {
		console.log("Client disconnected!")
	})
	
	socket.on("data", (data) => {
		let jsonData

		try{
			jsonData = JSON.parse(data.toString('utf-8'))
		} catch (err) {
			console.log(err)
			socket.destroy(err)
		}

		console.log(jsonData)
		console.log(JSON.stringify(jsonData))

	})
	
})

server.listen(44000, () => {
	console.log("Listening on port 44000")
})