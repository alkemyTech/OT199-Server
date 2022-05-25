const orgController = require('./organization.controller');
const welcomeMailSrv = require('../services/welcomeMail');

class SendMailController {
    static async sendMail(addressTo) {

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
            ]
        };

        // usa servicio para armar Welcome y enviar
        await welcomeMailSrv.sendMail(data, addressTo, orgData.email);
    }
}
module.exports = SendMailController;