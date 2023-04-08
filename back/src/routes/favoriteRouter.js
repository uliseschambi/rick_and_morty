const { Router } = require('express');
const addFavHandler = require('../handlers/addFavHandler');

const favoriteRouter = Router();

favoriteRouter.post('/', addFavHandler);

module.exports = favoriteRouter;
