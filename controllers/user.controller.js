const { User } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const bcrypt = require('bcryptjs');

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
}
module.exports = UserController;