const { Logger } = require('./logger')
const { createReadStream, createWriteStream, rename } = require('fs')
const { join } = require('path')

const logger = new Logger()

const sourcePath = join(__dirname, './lorem.txt')
const targetPath = join(__dirname, './loremCopy.txt')

// 1 read the source file
const readStream = createReadStream(sourcePath, {
  encoding: 'utf-8'
})

// calpitalize the first letters
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

readStream.on('string', (chunk) => {
  const CapitalizeString = chunk.split('').map(item => capitalizeFirstLetter(item)).join('')
  logger.succes('File has been transformed successfully')
  console.log(CapitalizeString)
    .catch((err) => console.log('\x1b[31m', err.message))
})


logger.emit('string', readStream)

// write the target file

const writeStream = createWriteStream(targetPath)


readStream.pipe(writeStream)
