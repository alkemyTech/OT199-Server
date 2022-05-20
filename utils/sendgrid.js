require ('dotenv').config();
//requerimos dotev.config para configurar nuestras variables de entorno y llamamos a la funcion config

const sgMail = require('sendgrid/mail');
//extraemos el paquete sendgrid/mail en la variable sgMail

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

//Con la variable sgMail vamos a tomar la apikey que seteamos en el arcivo .env y se la damos a sendgrid con la function setApiKey

  async function sendMail (msg) {
    try{
        await sgMail.send(msg);

        //Creo una funcion asincrona async await, para enviar el msg, mediante el metodo send que se encuentra en el objeto sgMail

    } catch (error){
        console.log(error);
        if (error.response){
            console.error(error.response.body);
        }

        //Utilizamos catch para ver los errores.
    }
};

//De la siguiente forma ejecutamos el metodo sendEmail

/* sendMail({
    to: "req.body.email",
    from: "abc@gmail.com",
    subject:"Esta ONG te saluda atentamente!!" ,
    text: "Lorem impsum..." ,
}); */