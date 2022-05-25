/**
 * Middleware para corroborar que el token pertenezca a un user
 * 
 *  
 */

const token= require("../helpers/generateToken")
async function AuthUser (req, res, next) {
   
   console.log(req.headers);
    if (!req.headers.authorization) {
        res.status(403).json({ msg: "Acceso no autorizado" });
    } else {

       /*  let tokenVerificado = await token.verifyToken(req.headers.authorization)
        console.log(tokenVerificado); */
        
        next();

    }
}

module.exports = {AuthUser};