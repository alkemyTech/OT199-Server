
function AuthUser (req, res, next) {
    // comprobar si existe el token

    if (!req.headers.authorization) {
        res.status(403).json({ msg: "Acceso no autorizado" });
    } else {
        
        next();

        

    }
}