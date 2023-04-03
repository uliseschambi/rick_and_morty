const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

const charRouter = Router();

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.
charRouter.get('/onsearch/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
charRouter.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharDetail(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = charRouter;
