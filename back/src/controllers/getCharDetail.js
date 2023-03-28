const { KEY, URL } = process.env;
const axios = require('axios');

const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios
    // .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .get(`${URL}/character/${id}?key=${KEY}`) // api henry
    .then(({ data }) => {
      res.status(200).json({
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species,
      });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;
