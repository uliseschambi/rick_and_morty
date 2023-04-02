const { Router } = require('express');
const getFavorites = require('../controllers/getFavorites');
const createFavorite = require('../controllers/createFavorite');
const updateFavorite = require('../controllers/updateFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const favRouter = Router();

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.

const validate = (req, res, next) => {
  const { id, name, species, gender, image } = req.body;
  if (!id || !name || !species) return res.status(400).json({ erros: 'Validation error.' });
  else next();
};

favRouter.post('/', validate, async (req, res) => {
  const { id, name, species, gender, image } = req.body;
  try {
    const newFavorite = await createFavorite({ id, name, species, gender, image });
    res.status(200).json(newFavorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.get('/', async (req, res) => {
  try {
    res.status(200).json(await getFavorites());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

favRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await updateFavorite(id, req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await deleteFavorite(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = favRouter;
