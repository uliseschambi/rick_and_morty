const axios = require('axios');

const getCharById = (res, ID) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(
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
      return res.end(error);
    });
};

module.exports = getCharById;
