const db = require('../models')

let controller = {
  index: (req, res) => {
    db.categories.findAll()
      .then(data => {
        res.status(200).json({
          meta: {
            response: true
          },
          data
        })
      })
      .catch(error => res.status(500).json({
        meta: {
          response: false
        },
        error
      }))
  }
}

module.exports = controller