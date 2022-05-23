const { User } = require('../models');
const { StatusCodes } = require('http-status-codes');

class UserController {

    static async logIn(req, res) {
        const {
            body: { email, password },
        } = req;
        try {
            const userFound = await User.findOne({ where: { email } });
            if (userFound) {
                const matchPassword = bcrypt.compareSync(password, userFound.password);
                if (matchPassword) {
                    res.status(StatusCodes.OK).send(userFound);
                } else {
                    res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Invalid Password' });
                }
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });
        }
    }
}

exports.module = UserController;