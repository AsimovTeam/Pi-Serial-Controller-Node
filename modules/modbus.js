const event = require('events').eventEmitter
const serial = require('serialport')

function getPorts() {
    serial.list()
        .then((value) => {
            return value
        })
        .catch((error) => {
            event.emit('error')
            console.log(error)
        })
}