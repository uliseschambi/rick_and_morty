const { KEY, URL } = process.env;
const axios = require('axios');

const getCharById = id => {
  return axios.get(`${URL}/character/${id}?key=${KEY}`)
  // axios return una prop llamada data.
  .then(({ data }) => {
    return {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
  });
};

module.exports = getCharById;
