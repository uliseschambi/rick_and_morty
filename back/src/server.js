const http = require('http');
const data = require('./utils/data');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Solucina el problema de seguridad de CORS.
    if (req.url.includes('rickandmorty/character')) {
      const idURL = req.url.split('/').pop();
      // Con doble igual se soluciona el problema de comparar un string con un number.
      const idData = data.find(character => {
        return character.id == idURL;
      });
      if (idData) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(idData));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Character not found' }));
      }
    }
    res.end('fuera del if');
  })
  .listen(3001, 'localhost');
