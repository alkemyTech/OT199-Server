const jwt = require('jsonwebtoken')

class generateToken{

    // genera el token y con los datos del usuario
    static tokenSign(user){
        return jwt.sign(
            {
                id:user.id,
                role:user.roleId
            },
            process.env.JWT_SECRET,
            {
            expiresIn:"1h"
            }
        )
    }
    // verifica que sean los mismos codigos del token
    static async verifyToken(token){
        try{
            return jwt.verify(token,process.env.JWT_SECRET)
        } catch(e){
            return null
        }
    
    }

}


module.exports=generateToken