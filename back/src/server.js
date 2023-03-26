const http = require('http');
const getCharById = require('./controllers/getCharById');
const getCharDetail = require('./controllers/getCharDetail');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', '*');
    // res.setHeader('Access-Control-Expose-Headers', '*');

    if (req.url.includes('onsearch')) {
      const ID = req.url.split('/').pop();
      return getCharById(res, ID);
    }

    if (req.url.includes('detail')) {
      const ID = req.url.split('/').pop();
      return getCharDetail(res, ID);
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' }).end('okay');
  })
  .listen(3001, 'localhost');
