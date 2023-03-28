require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const PORT = process.env.PORT || 3001;
const server = express();

// middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/rickandmorty', router); // server.use(router);

server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});

// cors
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });
