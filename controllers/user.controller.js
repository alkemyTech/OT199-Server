const { User } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const bcrypt = require('bcryptjs');
const sendmailController = require('../controllers/sendmail.controller');

class UserController {

    static async logIn(req, res) {
        const {
            body: { email, password },
        } = req;
        try {
            const userFound = await User.findOne({
                where: { email }
            });

            if (userFound) {
                const matchPassword = bcrypt.compareSync(password, userFound.password);
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
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

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
};

module.exports = UserController;