const exp  = require('express').Router();
const models = require('../models');

exp.get('/', async (req, res) =>{ 
  const data = await models.Post.findAll()
  .catch((err) =>{
      throw err;
  })
  const posts = data.map((post) => post.get({plain: true}));
  res.render('all', {posts})
})

module.exports = exp;