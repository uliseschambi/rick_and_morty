const { Router } = require('express');
const getFavorites = require('../controllers/getFavorites');
const getFavoritesByName = require('../controllers/getFavoritesByName');
const createFavorite = require('../controllers/createFavorite');
const validate = require('../middleware/validate');
const updateFavorite = require('../controllers/updateFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const favRouter = Router();

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.

favRouter.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    const favorites = name ? await getFavoritesByName(name) : await getFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.post('/', validate, async (req, res) => {
  // sacar el id.
  const { id, name, species, gender, image } = req.body;
  try {
    const newFavorite = await createFavorite({ id, name, species, gender, image });
    res.status(200).json(newFavorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, species, gender, image } = req.body;
  try {
    const updatedFavorite = await updateFavorite(id, { name, species, gender, image });
    res.status(200).json(updatedFavorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFavorite = await deleteFavorite(id);
    res.status(200).json(deletedFavorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = favRouter;
