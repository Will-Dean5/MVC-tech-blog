const ex = require("express").Router();
const models = require("../models");

ex.get("/", async (req, res) =>{
    const data = await models.Post.findAll()
    .catch((err) =>{
        throw err;
    }) 
    const posts = data.map((post) => post.get({plain : true}));
    res.render("ex", {posts: posts});
})

ex.post("/", async (req, res) =>{

})

module.exports = ex;