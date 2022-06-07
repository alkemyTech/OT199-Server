const orgController = require('./organizationController');
const welcomeMailSrv = require('../services/welcomeMail');

class SendMailController {
    static async sendWelcomeMail(addressTo) {

        // datos de org
        const orgData = await orgController.getData();

        // data armado de html Welcome
        const data = {
            img: orgData.image,
            ongName: orgData.name,
            text: orgData.welcomeText,
            ongContact: [{
                    type: 'Phone',
                    value: orgData.phone
                },
                {
                    type: 'Email',
                    value: orgData.email
                }
            ],
            subject :`Welcome to ${orgData.name}`
        };

        // usa servicio para armar Welcome y enviar
        await welcomeMailSrv.sendMail(data, addressTo, orgData.email, data.subject);
    }

    static async sendContactMail(addressTo) {

        // datos de org
        const orgData = await orgController.getData();

        // data armado de html Welcome
        const data = {
            img: orgData.image,
            ongName: orgData.name,
            text: "¡Gracias por contactarte, en la brevedad se comunicarán con usted!",
            ongContact: [{
                    type: 'Phone',
                    value: orgData.phone
                },
                {
                    type: 'Email',
                    value: orgData.email
                }
            ],
            subject : '¡Gracias por contactarte con nosotros!'
        };

        // usa servicio para armar Welcome y enviar
        await welcomeMailSrv.sendMail(data, addressTo, orgData.email, data.subject);
    }
}
module.exports = SendMailController;