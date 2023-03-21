const ProductManager = require('../models/productManager.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {

  createProductManager: function ( req, res ) {
    ProductManager.create( req.body )
      .then( newProductManager => {
        res.json({ results: newProductManager })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },


  findAllProductManagers: function ( req, res ) {
    ProductManager.find()
      .then( allProductManagers => {
        res.json({ results: allProductManagers })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },


  findOneProductManager: function ( req, res ) {
    ProductManager.findOne({ _id: req.params.id })
      .then( oneProductManager => {
        res.json({ results: oneProductManager })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },


  updateOneProductManager: function ( req, res ) {
    ProductManager.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then( updateOneProductManager => {
        res.json({ results: updateOneProductManager })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err })) 
  },
  
  
  deleteOneProductManager: function ( req, res ) {
    ProductManager.deleteOne({ _id: req.params.id })
      .then( deleteOneProductManager => {
        res.json({ results: deleteOneProductManager })
      })
      .catch( err => res.json({ message: "HERE'S THE ERROR", error: err }))
  },
  

}




// req.body
//  takes form data
// req.params.id
//  takes
// { new: true, runValidators: true }
//  takes validations