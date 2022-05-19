var express = require('express');
var router = express.Router();
var { check } = require('express-validator');
const user = require('../models/user');
var User = require('../models/user');
var bcrypt = require('bcryptjs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/login', [
  check('email', 'must be a valid email').notEmpty().isEmail(),
  check('password').notEmpty().isString()
],
async (req, res) => {
  const { 
    body: email, password } = req;
  try{  
  const userFound = await User.findOne({ where: { email } });

  if(!userFound){
      res.status(400).json({ok: false})
  }

  if (userFound) {
      const matchPassword = bcrypt.compareSync(password, userFound.password);
      if (matchPassword) {
        return user;
      } else {
        res.status(401).json({ msg: 'Invalid Password' });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
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
