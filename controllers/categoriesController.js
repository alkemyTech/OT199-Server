const db = require('../models')


class Categories{
  getAllCategories( req, res ){
    db.Categorie.findAll()
      .then(data =>{
        res.send(data)
      })
      .catch(error => res.send(error))
    
  }
}

let CategoriesController = new Categories

module.exports = CategoriesController