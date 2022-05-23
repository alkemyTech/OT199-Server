const ejs = require('ejs');
const read = require('fs').readFileSync;
const join = require('path').join;
const sendgrid = require('../utils/sendgrid');


const sendMail = async (data, addressTo, addressFrom) => {

    // ruta template
    const str = read(join(__dirname, '../views/welcomeEmail.ejs'), 'utf8');

    // body para el mail
    const body = ejs.compile(str)(data);
    const subject = `Welcome to ${data.name}`;

    // envía mail
    await sendgrid.sendMail(addressTo, addressFrom, subject, body);
}

module.exports = {
    sendMail
};