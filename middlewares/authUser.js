const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function AuthUser(req, res, next) {
    // comprobar si existe el token

    if (!req.headers.authorization) {
        res.status(403).json({ msg: "Acceso no autorizado" });
    } else {
        
        //comprobar validez del token

        let token = req.headers.autorizathion

        jwt.verify(token, authConfig.secret, (err) => {

            if (err) {
                res.status(500).json({msg: "Ha ocurrido un problema al decodificar el token", err});
            } else {


                next();

            }
        })


    }
}