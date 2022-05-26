const bcryptjs = require('bcryptjs');
const {
    User
} = require('../models');
const sendmailController = require('./sendmailController');
const httpStatus = require('../helpers/httpStatus');
const generateToken = require('../helpers/generateToken')

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
            body: {
                email,
                password
            },
        } = req;
        try {
            const userFound = await User.findOne({
                where: {
                    email
                }
            });

            if (userFound) {
                const matchPassword = bcryptjs.compareSync(password, userFound.password);
                if (matchPassword) {
                    res.status(httpStatus.OK).json({
                        token: generateToken.tokenSign(userFound)
                    });

                } else {
                    res.status(httpStatus.BAD_REQUEST).json({
                        msg: 'User or Password Incorrect'
                    });
                }
            } else {
                res.status(httpStatus.BAD_REQUEST).json({
                    msg: 'User or Password Incorrect'
                })
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong'
            });
        }
    }

    static async getAll(req, res) {

        let userList;
        try {
            userList = await User.findAll();
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong'
            });
        }
        res.status(httpStatus.OK).send(userList);
    }

    static async updateDataUser(req, res) {

        const id = req.params.id;
        const {
            firstName,
            lastName,
            email,
            password,
            image,
        } = req.body;

        let userFound;
        try {
            // recupera en DB por PK
            userFound = await User.findByPk(id);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong'
            });
        }
        if (!userFound) {
            res.status(httpStatus.NOT_FOUND).json({
                msg: 'Something went wrong'
            });
        } else {
            // Encrypt password
            const salt = bcryptjs.genSaltSync();
            userFound.password = bcryptjs.hashSync(password, salt);

            // update User
            userFound.firstName = firstName;
            userFound.lastName = lastName;
            userFound.email = email;
            userFound.image = image;

            try {
                await userFound.save();

                res.status(httpStatus.OK).json({
                    msg: 'Update has been successful',
                    userFound
                });
            } catch (error) {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    msg: 'Something went wrong'
                });
            };

        }
    }
};

module.exports = UserController;