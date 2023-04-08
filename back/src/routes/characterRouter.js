const { Router } = require('express');
const createCharHandler = require('../handlers/createCharHandler');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

const characterRouter = Router();

characterRouter.post('/', createCharHandler);

characterRouter.get('/onsearch/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
characterRouter.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharDetail(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = characterRouter;
