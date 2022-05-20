const {Categorie} = require('../models')

class Categories{
  static getAllCategories( req, res ){

    Categorie.findAll()
      .then(data =>{
        res.send(data)
      })
      .catch(error => res.send(error))
    
  }
  
  
}



// module.exports =  Categories
module.exports =  Categories