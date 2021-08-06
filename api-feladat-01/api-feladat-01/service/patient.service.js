const fsp = require('fs').promises
const { join } = require('path')

const read = async () => {
  const jsonConent = await fsp.readFile(
    join('.', 'db', 'patients.json'), 'utf8')

  return JSON.parse(jsonConent)
}

module.exports = {
  read
}
