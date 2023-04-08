const { Router } = require('express');
const createUserHandler = require('../handlers/createUserHandler');

const userRouter = Router();

userRouter.post('/', createUserHandler);

module.exports = userRouter;
