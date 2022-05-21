var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.delete('/users/:id', async (req, res) => {
try {
  const { id } = req.params;
  const deleteUser = await User.destroy({ where: {id: id} });

  if(deleteUser){
    res.status(200).json({ msg: `${deleteUser} was deleted`})
  } else {
    res.status(400).json({ msg: 'Cannot delete user'})
  }
  
} catch (error) {
  res.status(500).json({ msg: 'Something went wrong' });
}


})

module.exports = router;
