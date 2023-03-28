const { Router } = require('express');
const charRouter = require('./charRouter');
const favRouter = require('./favRouter');

const router = Router();

router.use(charRouter);
// router.use('/fav', favRouter);

module.exports = router;
