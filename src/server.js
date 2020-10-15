// importar dependência
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

// iniciando express
const server = express()

// usando arquivos estáticos
server
  .use(express.static('public'))

  // configurar template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // criar rota
  .get('/', pages.index)

// ligar servidor
server.listen(5500)