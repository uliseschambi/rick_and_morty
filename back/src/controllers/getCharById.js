const axios = require('axios');
const { KEY, URL } = process.env;

const getCharById = (res, ID) => {
  axios
    // .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .get(`${URL}/character/${ID}?key=${KEY}`) // api henry
    .then(({ data }) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
        })
      );
    })
    .catch(error => {
      res.writeHead(500, { 'Content-Type': 'text/plain' }).end(error.message);
    });
};

module.exports = getCharById;
