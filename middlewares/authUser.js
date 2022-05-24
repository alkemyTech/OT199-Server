/**
 * Middleware para corroborar que el token pertenezca a un user
 */
function AuthUser (req, res, next) {
   

    if (!req.headers.authorization) {
        res.status(403).json({ msg: "Acceso no autorizado" });
    } else {
        
        next();

        

    }
}

module.exports = AuthUser;