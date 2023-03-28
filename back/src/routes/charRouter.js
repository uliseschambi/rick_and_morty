const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');

const charRouter = Router();

charRouter.get('/onsearch/:id', async (req, res) => {
  try {
    res.status(200).json(await getCharById(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
charRouter.get('/detail/:id', async (req, res) => {
  try {
    res.status(200).json(await getCharDetail(req));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = charRouter;
