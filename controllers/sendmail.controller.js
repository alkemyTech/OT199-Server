const orgController = require('../controllers/organization.controller');
const welcomeMailSrv = require('../services/welcomeMail');

const sendMail = async (addressTo) => {

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
                value: orgData.address
            }
        ]
    };

    // usa servicio para armar Welcome y enviar
    await welcomeMailSrv.sendMail(data, orgData.address, addressTo);

    console.log(data);
}

module.exports = {
    sendMail
};