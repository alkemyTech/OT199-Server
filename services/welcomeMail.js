const ejs = require('ejs');
const read = require('fs').readFileSync;
const join = require('path').join;
const sendgrid = require('../utils/sendgrid');

class WelcomeMailService {

    static async sendMail(data, addressTo, addressFrom) {

        // ruta template
        const str = read(join(__dirname, '../views/welcomeEmail.ejs'), 'utf8');

        // body para el mail
        const body = ejs.compile(str)(data);
        const subject = `Welcome to ${data.ongName}`;

        // envía mail
        await sendgrid.sendMail(addressTo, addressFrom, subject, body);
    }
}
module.exports = WelcomeMailService;