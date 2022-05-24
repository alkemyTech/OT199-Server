const bcryptjs = require('bcryptjs');
const { User } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class UserController {

  static async register(req, res) {
      
    const { firstName, lastName, email, password, image = null, roleId = null } = req.body;
    
    const user = User.build({ firstName, lastName, email, password, image, roleId });
    
    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    try {
      await user.save();
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          msg: error
      });
    };

    res.status(httpStatus.OK).json({
      msg: 'Registration has been successful',
      user
    });
  };
};

module.exports = UserController;
