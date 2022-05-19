require ('dotenv').config();
const sgMail = require('sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const sendMail = async(msg) => {
    try{
        await sgMail.send(msg);
        console.log("Mesaje enviado satisfactoriamente!");
    } catch (error){
        console.log(error);

        if (error.response){
            console.error(error.response.body);
        }
    }
};

sendMail({
    to: "abc@gmail.com",
    from: "abc@gmail.com",
    subject:"Esta ONG te saluda atentamente!!" ,
    text: "Lorem impsum..." ,
});