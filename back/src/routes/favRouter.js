const { Router } = require('express');
const getFavorites = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const updateFavorite = require('../controllers/updateFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const favRouter = Router();

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.
favRouter.get('/', async (req, res) => {
  try {
    res.status(200).json(await getFavorites());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.post('/', async ({ body }, res) => {
  try {
    res.status(200).json(await postFavorite(body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await updateFavorite(id, req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await deleteFavorite(id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = favRouter;
