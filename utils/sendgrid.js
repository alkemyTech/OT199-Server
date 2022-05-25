/**
 * extraemos el paquete sendgrid/mail en la variable sgMail.Con la variable sgMail vamos a tomar la apikey que seteamos en el arcivo .env y
 * se la damos a sendgrid con la function setApiKey
 * Esta funcion asincrona sendEmail es la encargada de enviar el email
 * @param{string} msg Aqui seteamos el email que queremos enviar
 */
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);
//
async function sendMail(to, from, subject, body) {
     
    const msg = {
        to,from,subject,html:body
    }

    try {
        await sgMail.send(msg);

    } catch (error) {
        console.log(error);
    }
};

module.exports = {sendMail};