const { mkdir, writeFile, unlink } = require('fs').promises
const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')
const { createGzip } = require('zlib')

const targetPath = join(__dirname, './testfolder/lorem_ipsum.bak')
const sourcePath = join(__dirname, './testfolder/lorem_ipsum')
const compressedPath = join(__dirname, './testfolder/lorem_ipsum.bak.zip')

// 1 read the source file
const readSettings = createReadStream(
  sourcePath,
  {
    encoding: 'utf-8',
    highWaterMark: 300
  }
)

// 2. write the source content of the source file to the target file
const fileBak = createWriteStream(
  targetPath,
  {
    encoding: 'utf-8',
    highWaterMark: 300
  }
)

// 3. read content of target and zip it
const readTarget = createReadStream(
  targetPath,
  {
    encoding: 'utf-8',
    highWaterMark: 300
  }
)

// / 4. Write the content of gzipped settings to the .zip file.
const writeZip = createWriteStream(
  compressedPath,
  {
    encoding: 'utf-8',
    highWaterMark: 300
  }
)

// read source -->  write target -> compress target --> delete source and target
readSettings.pipe(fileBak);
fileBak.on('finish', () => {
  readTarget.pipe( createGzip() ).pipe(writeZip);
})

writeZip.on('finish', () => {
  unlink(sourcePath);
  unlink(targetPath);
})

// Az állományok archiválásához kell készítened egy egyszerű alkalmazást.
// Az alkalmazás egy paraméterként megadott útvonalon lévő fájlról készít egy másolatot ugyanabba a könyvtárba.
// A fájl útvonala/neve elég, ha egy változóban van tárolva.
// Az új fájl neve az eredeti fájl neve a végén a .bak kiegészítéssel.
// Ennek a fájlnak a tartalmát egy gz fájlba becsomagoljuk be.
// Amennyiben a minden művelet sikeres volt, az eredeti fájlt és a .bak fájlt is töröljük ki!
