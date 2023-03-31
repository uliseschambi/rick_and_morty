const { KEY, URL } = process.env;
const axios = require('axios');

const getCharDetail = id => {
  return axios.get(`${URL}/character/${id}?key=${KEY}`).then(response => {
    // Destructuring.
    const { id, image, name, gender, status, origin, species } = response.data;
    // return obj nuevo solo con la key >>> la key se llama igual que el value (ES6)
    return { id, image, name, gender, status, origin, species };
  });
};

module.exports = getCharDetail;
