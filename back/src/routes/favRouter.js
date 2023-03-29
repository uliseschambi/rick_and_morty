const { Router } = require('express');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const favRouter = Router();

favRouter.get('/', async (req, res) => {
  try {
    res.status(200).json(await getFavorite(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.post('/', async (req, res) => {
  try {
    console.log(req.body.adfasdf);
    res.status(200).json(await postFavorite(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.delete('/:id', async (req, res) => {
  try {
    res.status(200).json(await deleteFavorite(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = favRouter;
