const net = require('net')
const errors = require('./modules/errors')
const isJSON = require('is-json')
const middleman = require('./modules/middleman')
const os = require('os')

const server = net.createServer((socket) => {

	socket.on("connect", () => {
		console.log("Client connected!")
	})

	socket.on("close", () => {
		console.log("Client disconnected!")
	})
	
	socket.on("data", (data) => {
		if(isJSON(data)) {
			middleman.interpret(data, (response) => {
				socket.write(JSON.stringify(response))
			})
		} else {
			socket.write(errors.notJson(data))
			console.log("data was not json, terminating socket.")
			docket.destroy()
		}
	})
	
})

server.listen(44000, () => {
	console.log("Listening on port 44000")
})