const logIn = require('express').Router();
const model = require('../models');

logIn.get('/', async(req, res) => {
  res.render('logIn');
});

logIn.post('/', async(req, res) => {
  try{
    const data = await model.User.create({
      username: req.body.username,
      password: req.body.password,
      isOnline: true,
    })
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json(data);
    throw err;
  }
});

module.exports = logIn;