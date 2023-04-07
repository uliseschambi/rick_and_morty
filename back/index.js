const { conn } = require('./src/db');
const server = require('./src/server');
require('dotenv').config();
const PORT = process.env.PORT || 3001; // para el deploy website

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log('Listening on PORT', PORT);
    });
  })
  .catch(err => console.log(err));
