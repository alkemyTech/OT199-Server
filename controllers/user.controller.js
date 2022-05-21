const { User } = require('../models');
const httpStatus = require('../helpers/httpStatus')

class UserController {

    static async logIn(req, res) {
        const {
            body: { email, password },
        } = req;
        const userFound = await User.findOne({ where: { email } });

        if (userFound) {
            const matchPassword = bcrypt.compareSync(password, userFound.password);
            if (matchPassword) {
                res.status(httpStatus[200]).send(userFound);
            } else {
                res.status(httpStatus[400]).json({ msg: 'Invalid Password' });
            }
        } else {
            res.status(httpStatus[500]).json({ msg: 'Something went wrong' });
        }
    }
}

exports.module = UserController;