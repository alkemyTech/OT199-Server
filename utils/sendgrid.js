require ('dotenv').config();
//requerimos dotev.config para configurar nuestras variables de entorno y llamamos a la funcion config

const sgMail = require('sendgrid/mail');
//extraemos el paquete sendgrid/mail en la variable sgMail

/* sgMail.setApiKey(process.env.SENDGRID_APIKEY); */

//Con la variable sgMail vamos a tomar la apikey que seteamos en el arcivo .env y se la damos a sendgrid con la function setApiKey

class SendGrid {

   static sendEmailBySendgrid(){ return sgMail.setApiKey(process.env.SENDGRID_APIKEY);
   }
};