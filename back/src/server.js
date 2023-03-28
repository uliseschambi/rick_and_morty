require('dotenv').config();
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
server.use(express.json());
server.use('/', router);

server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});
