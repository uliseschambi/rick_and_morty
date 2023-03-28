const { KEY, URL } = process.env;
const axios = require('axios');

const getCharDetail = req => {
  const { id } = req.params;
  return axios
  .get(`${URL}/character/${id}?key=${KEY}`)
  .then(({ data }) => {
    return {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      status: data.status,
      origin: data.origin,
      species: data.species,
    };
  });
};

module.exports = getCharDetail;
