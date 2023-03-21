const http = require('http');
const data = require('./utils/data');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('rickandmorty/character')) {
      return res.statusCode(200);
    }
    return res.statusCode(400);
  })
  .listen(3001, 'localhost');

//   crear un condicional que pregunte si la url incluye el string rickandmorty/character. En caso de que si lo incluya, obtén el personaje por id que llega por req.url y que coincida con el personaje en el archivo data.js (deberás importar este archivo).

//   Envía como respuesta un JSON con toda la información del personaje.
