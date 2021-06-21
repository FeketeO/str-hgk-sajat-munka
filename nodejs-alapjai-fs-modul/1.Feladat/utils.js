const { mkdir, writeFile } = require('fs').promises

const fileCreator = () => {
  mkdir('controllers')
    .then(() => mkdir('routers'))
    .then(() => mkdir('views'))
    .then(() => writeFile('./controllers/site.controller.js', 'SITE.CONTROLLER'))
    .then(() => writeFile('./routers/site.router.js', 'SITE.ROUTER'))
    .then(() => writeFile('./views/index.html', 'INDEX'))
    .then(() => writeFile('app.js', 'APP'))
}

fileCreator()

// NEM ÍGY OLDOTTAM MEG, DE NAGYON TETSZIK:

// utils.js.

// const { mkdir, writeFile } = require('fs').promises

// const createStarterTemplate = (folders, files) => {
//     folders.map(folder => mkdir(folder))
//     files.map(file => writeFile(file, ''))       
// }

// module.exports = createStarterTemplate

// utilsmasik.js
// const createStarterTemplate = require('./utils')
// const folders = ['controllers', 'routers', 'views']

// const files = [
//   './controllers/site.controller.js',
//   './routers/site.router.js',
//   './views/index.html',
//   './app.js'
// ]
// createStarterTemplate(folders,files) 

// VAGY:
// utils:
// const { mkdir, writeFile } = require('fs').promises;

// const createFolders = async (folders) =>
//   await folders.map( folder => mkdir(folder) );

// const createFiles = async (files) =>
//   await files.map( file => writeFile(file, '') );

// module.exports = {
//     createFolders, 
//     createFiles
// };

// utilsmasik:
// const { createFolders, createFiles } = require('./utils');

// const folders = ['controllers', 'routers', 'views'];

// const files = [
//   './controllers/site.controller.js',
//   './routers/site.router.js',
//   './views/index.html',
//   './app.js'
// ];

// createFolders(folders)
//   .then(() => createFiles(files));