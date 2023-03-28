const { Router } = require('express');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const favRouter = Router();

favRouter.get('/onsearch/:id', async (req, res) => {
  try {
    res.status(200).json(await getCharById(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = favRouter;
