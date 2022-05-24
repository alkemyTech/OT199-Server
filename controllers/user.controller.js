const bcryptjs = require('bcryptjs');
const {
    User
} = require('../models');
const sendmailController = require('../controllers/sendmail.controller');
const httpStatus = require('../helpers/httpStatus');

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
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            });
        };

        // envia mail
        await sendmailController.sendMail(email);

        res.status(httpStatus.OK).json({
            msg: 'Registration has been successful',
            user
        });
    };

    static async logIn(req, res) {
        const {
            body: { email, password },
        } = req;
        try {
            const userFound = await User.findOne({
                where: { email }
            });

            if (userFound) {
                const matchPassword = bcryptjs.compareSync(password, userFound.password);
                if (matchPassword) {
                    res.status(httpStatus.OK).send(userFound);
                } else {
                    res.status(httpStatus.BAD_REQUEST).json({ msg: 'User or Password Incorrect' });
                }
            } else {
                res.status(httpStatus.BAD_REQUEST).json({ msg: 'User or Password Incorrect' })
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });
        }
    }

};

module.exports = UserController;
