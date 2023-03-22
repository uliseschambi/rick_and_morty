const http = require('http');
const getCharById = require('./controllers/getCharById');
const getCharDetail = require('./controllers/getCharDetail');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('onsearch')) {
      const idURL = req.url.split('/').pop();
      return getCharById(res, idURL);
    }

    if (req.url.includes('detail')) {
      const idURL = req.url.split('/').pop();
      return getCharDetail(res, idURL);
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  })
  .listen(3001, 'localhost');

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Solucina el problema de seguridad de CORS.
//     if (req.url.includes('rickandmorty/character')) {
//       const idURL = req.url.split('/').pop();
//       // Con doble igual se soluciona el problema de comparar un string con un number.
//       const idData = data.find(character => {
//         return character.id == idURL;
//       });
//       if (idData) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         return res.end(JSON.stringify(idData));
//       } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         return res.end(JSON.stringify({ error: 'Character not found' }));
//       }
//     }

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');
//   })
//   .listen(3001, 'localhost');
