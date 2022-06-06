const ejs = require('ejs');
const read = require('fs').readFileSync;
const join = require('path').join;
const sendgrid = require('../utils/sendgrid');

class WelcomeMailService {

    static async sendMail(data, addressTo, addressFrom, subject) {

        // ruta template
        const str = read(join(__dirname, '../views/templateEmail.ejs'), 'utf8');

        // body para el mail
        const body = ejs.compile(str)(data);

        // envía mail
        await sendgrid(addressTo, addressFrom, subject, body);
    }
}
module.exports = WelcomeMailService;