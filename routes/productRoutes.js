const mongoose = require('mongoose');
const ProfilePic = require("../models/profilepic");

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    let products = await ProfilePic.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, ({body}, res) => {
    ProfilePic
    .create(body)
    .then((res) => res.json())
    .catch((err) => {
      res.json(err);
    })
  
    // let product = await Product.create(req.body);
    // return res.status(201).send({
    //   error: false,
    //   product
    // })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}