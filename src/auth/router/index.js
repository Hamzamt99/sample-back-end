'use strict';

const express = require('express');
const authRouter = express.Router();

const basicAuth = require('../middleware/basic.js');
const bearerAuth = require('../middleware/bearer.js');
const {
  handelDelete,
  handleSignin,
  handleSignup,
  handleSecret,
  handleGetlist,
  handlePostlist,
  handlePostProduct,
  handleUpdatelist,
  handelDeleteProduct,
  handleGetProduct
} = require('../router/handlers.js');

authRouter.post('/signup', handleSignup);
authRouter.post('/signin', basicAuth, handleSignin);
authRouter.get('/todo', handleGetlist);
authRouter.post('/todo', handlePostlist);
authRouter.put('/todo/:id', handleUpdatelist);
authRouter.delete('/todo/:id', handelDelete);
authRouter.post('/product', handlePostProduct);
authRouter.delete('/product/:id', handelDeleteProduct);
authRouter.get('/product', handleGetProduct);




authRouter.get('/secret', bearerAuth, handleSecret);

module.exports = authRouter;