const { Router } = require('express');
const characterRouter = require('./characterRouter');
const favoriteRouter = require('./favoriteRouter');
const userRouter = require('./userRouter');

const router = Router();

router.use(characterRouter);
router.use('/fav', favoriteRouter);
router.use('/user', userRouter);

module.exports = router;
