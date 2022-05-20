const bcryptjs = require('bcryptjs');
const { User } = require('../models');

class UserController {

    static async register(req, res) {
        
        try {
            const { firstName, lastName, email, password, image = null, roleId = null } = req.body;
    
            const user = User.build({ firstName, lastName, email, password, image, roleId });
    
            // Encrypt password
            const salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync(password, salt);
    
            await user.save();
    
            res.status(200).json({
                msg: 'Registration has been successful',
                user
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        };
    };
};

module.exports = UserController;
