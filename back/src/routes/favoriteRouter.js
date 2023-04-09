const { Router } = require('express');
const addFavHandler = require('../handlers/addFavHandler');
const deleteFavHandler = require('../handlers/deleteFavHandler');

const favoriteRouter = Router();

favoriteRouter.post('/', addFavHandler);
favoriteRouter.delete('/', deleteFavHandler);

module.exports = favoriteRouter;
