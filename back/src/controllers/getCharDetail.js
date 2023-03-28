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

// const getCharDetail = (res, ID) => {
//   axios
//     // .get(`https://rickandmortyapi.com/api/character/${ID}`)
//     .get(`${URL}/character/${ID}?key=${KEY}`) // api henry
//     .then(({ data }) => {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(
//         JSON.stringify({
//           id: data.id,
//           image: data.image,
//           name: data.name,
//           gender: data.gender,
//           status: data.status,
//           origin: data.origin,
//           species: data.species,
//         })
//       );
//     })
//     .catch(error => {
//       res.writeHead(500, { 'Content-Type': 'text/plain' }).end(error.message);
//     });
// };

module.exports = getCharDetail;
