const axios = require('axios');

const getCharDetail = (res, ID) => {
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
          status: data.status,
          origin: data.origin,
          species: data.species,
        })
      );
    })
    .catch(error => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};

module.exports = getCharDetail;
