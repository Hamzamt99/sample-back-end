'use strict';

const { users, todo, product } = require('../models/index.js');

async function handleSignup(req, res, next) {
  try {
    let userRecord = await users.create(req.body);
    console.log(req.body);
    const output = {
      user: userRecord.username,
      token: userRecord.token,
    };
    res.status(201).json(userRecord);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleSignin(req, res, next) {
  try {

    res.status(200).json(req.user);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    console.error(e);
    next(e);
  }
}
async function handleGetlist(req, res, next) {
  try {
    const userRecords = await todo.findAll({});
    res.status(200).json(userRecords);
  } catch (e) {
    console.error(e);
    next(e);
  }
}
async function handlePostlist(req, res, next) {
  try {
    const obj = req.body;
    const data = await todo.create(obj);
    res.status(201).json({ data });
  } catch (e) {
    console.error(e);
    next(e);
  }
}
async function handleUpdatelist(req, res, next) {
  try {
    const id = req.params.id;
    const obj = req.body
    let updatedRecord = await todo.update(obj, { where: { id } })
    const userRecords = await todo.findAll({});

    res.status(200).json(userRecords);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handelDelete(req, res, next) {
  try {
    const id = req.params.id;
    const userRecords = await todo.findOne({ where: { id } });
    let updatedRecord = await todo.destroy({ where: { id } })
    res.status(204).json(userRecords);
  } catch (e) {
    console.error(e);
    next(e);
  }
}


async function handlePostProduct(req, res, next) {
  try {
    const obj = req.body;
    const data = await product.create(obj);
    res.status(201).json({ data });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handelDeleteProduct(req, res, next) {
  try {
    const id = req.params.id;
    const userRecords = await product.findOne({ where: { id } });
    let updatedRecord = await product.destroy({ where: { id } })
    res.status(204).json(userRecords);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function handleGetProduct(req, res, next) {
  try {
    const userRecords = await product.findAll({});
    res.status(200).json(userRecords);
  } catch (e) {
    console.error(e);
    next(e);
  }
}


function handleSecret(req, res, next) {
  res.status(200).send('Welcome to the secret area!');
}

module.exports = {
  handleSignup,
  handleSignin,
  handleGetUsers,
  handleSecret,
  handleGetlist,
  handlePostlist,
  handleUpdatelist,
  handelDelete,
  handlePostProduct,
  handelDeleteProduct,
  handleGetProduct
};