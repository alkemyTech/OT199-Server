const { User } = require('../models');

class DBValidators {

    static async emailExists(email) {
        const user = await User.findOne({ where: { email } });

        if (user) {
            throw new Error(`An user whit email '${ email }' already exists.`);
        };
    };
};

module.exports = DBValidators;
