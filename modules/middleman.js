const events = require('events').EventEmitter
const os = require('os')

let debug = false

async function interpret(data, callback) {
    let response = {}

    if(isDebug) {
        response.debug = true
        response.timestamp = Date.now(),
        response.system = {
            cpu: os.cpus(),
            freemem: os.freemem()
        }
    }

    //handle le data pour les mouvements
    if(data.hasOwnProperty('movement')) {
        
    }

    events.on('error', () => {
        response.error = true
        //Trouver une façon de fermer le socket et de se reset
    })

    callback(await response)
}

function isDebug(data) {
    if(data.hasOwnProperty("debug") && data[debug] === true) {
        debug = true
        return true
    } else {
        debug = false
        return false
    }
}

module.exports = {
    interpret: interpret
}