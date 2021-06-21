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
