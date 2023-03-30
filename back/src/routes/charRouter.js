const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

const charRouter = Router();

// Nunca pasar res o req completo.
// El Handler no sabe lo que hace el Controller.
charRouter.get('/onsearch/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await getCharById(id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
charRouter.get('/detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await getCharDetail(id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = charRouter;
