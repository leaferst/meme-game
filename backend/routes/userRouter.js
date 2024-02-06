const express = require('express');
const userRouter = express.Router();
const userContoller = require('../controllers/userController');


userRouter.get('/', userContoller.getAllUsers);
// userRouter.get('/:id', userContoller.getAUser);
// userRouter.delete('/:id', userContoller.deleteUser);
// userRouter.post('/:id/cart', userContoller.addItem);

module.exports = userRouter;