const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
// const favs = require('../utils/favs');

const router = Router();

router.get('/rickandmorty/onsearch/:id', getCharById);
router.get('/rickandmorty/detail/:id', getCharDetail);

router.post('/rickandmorty/fav', (req, res) => {
  const { id, image, name, gender, species } = req.body;
});
router.get('/rickandmorty/fav', (req, res) => {
  res.send('POST request to homepage');
});
router.delete('/rickandmorty/fav/:id', (req, res) => {
  res.send('POST request to homepage');
});

module.exports = router;
