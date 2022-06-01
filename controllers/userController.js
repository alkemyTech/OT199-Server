const { User } = require('../models');
const bcryptjs = require('bcryptjs');
const httpStatus = require('../helpers/httpStatus');
const sendmailController = require('./sendmailController');
const generateToken = require('../helpers/generateToken')

class UserController {

    static async deleteUser(req, res) {
        try {
          const { id } = req.params;
          const deleteUser = await User.destroy({ where: { id: +id } });
          if (deleteUser) {
            return res.status(httpStatus.OK).send({ msg: `the User was deleted` });
          }
          return res
            .status(httpStatus.BAD_REQUEST)
            .json({ msg: 'Cannot delete user' });
        } catch (error) {
          res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ msg: 'Something went wrong, the server was unable to complete your request' });
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
        const salt = bcryptjs.genSaltSync(10);
        bcryptjs.hashSync(user.password, salt);

        //Access_token
        const token = generateToken.tokenSign(user);

        try {
            await user.save();
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong, the server was unable to complete your request'
            });
        };

        // envia mail
        await sendmailController.sendMail(email);

        res.status(httpStatus.OK).json({
            msg: 'Registration has been successful',
            token,
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
                msg: 'Something went wrong, the server was unable to complete your request'
            });
        }
    }

    static async getAll(req, res) {

        let userList;
        try {
            userList = await User.findAll();
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong, the server was unable to complete your request'
            });
        }
        res.status(httpStatus.OK).send(userList);
    }

    static async updateDataUser(req, res) {

        const id = req.params.id;
        const fieldUpdate = req.body;
        const {
            password
        } = fieldUpdate;

        if (password) {
            // Encrypt password
            const salt = bcryptjs.genSaltSync();
            const newPassword = bcryptjs.hashSync(password, salt);
            fieldUpdate.password = newPassword;
        }
        try {
            await User.update(fieldUpdate, {
                where: {
                    id
                }
            });
            res
                .status(httpStatus.OK)
                .json({
                    msg: 'Update has been successful'
                });
        } catch (error) {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: 'Something went wrong, the server was unable to complete your request'
                });
        };
    }
};

module.exports = UserController;
