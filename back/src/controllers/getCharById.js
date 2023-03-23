const axios = require('axios');

const getCharById = (res, ID) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${ID}`)
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
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};

module.exports = getCharById;
