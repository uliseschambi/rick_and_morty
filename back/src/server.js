const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const server = express();

// MIDDLEWARES
server.use(cors()); // seguridad
server.use(morgan('dev')); // información de req y res.
server.use(express.json()); // parsea el json de req.body a obj js.

// ROUTES
server.use('/rickandmorty', router); // server.use(router);
server.use('*', (req, res) => {
  res.status(404).json({ error: 'URL not found.' });
});

module.exports = server;

// cors
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });
