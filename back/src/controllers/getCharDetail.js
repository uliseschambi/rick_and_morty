const { KEY, URL } = process.env;
const axios = require('axios');

const getCharDetail = req => {
  const { id } = req.params;
  return axios
  .get(`${URL}/character/${id}?key=${KEY}`).then(response => {
    const { id, image, name, gender, status, origin, species } = response.data;
    return { id, image, name, gender, status, origin, species };
  });
};

module.exports = getCharDetail;
