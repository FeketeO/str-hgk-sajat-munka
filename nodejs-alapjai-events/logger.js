const { Eventmitter } = require('events')

class Logger extends Eventmitter {
  succes (msg) {
    console.log('\x1b[32m', msg)
  }

  error (errmsg) {
    console.log('\x1b[31m', errmsg)
  }
}

module.exports = {
  Logger
}
