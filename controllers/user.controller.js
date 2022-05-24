const bcryptjs = require('bcryptjs');
const {
    User
} = require('../models');
const sendmailController = require('../controllers/sendmail.controller');

class UserController {

    static async register(req, res) {

        const {
            firstName,
            lastName,
            email,
            password,
            image = null,
            roleId = null
        } = req.body;

        const user = User.build({
            firstName,
            lastName,
            email,
            password,
            image,
            roleId
        });

        // Encrypt password
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        try {
            await user.save();
        } catch (error) {
            return res.status(500).json({
                msg: error
            });
        };

        // envia mail
        await sendmailController.sendMail(email);

        res.status(200).json({
            msg: 'Registration has been successful',
            user
        });
    };
};

module.exports = UserController;