/**
 * Middleware para corroborar que el token pertenezca a un user
 * 
 *  
 */

 const { verifyToken } = require("../helpers/generateToken");
 const httpStatus = require("../helpers/httpStatus");
 
 async function AuthUser(req, res, next) {
 
     try {
 
         if (!req.headers.authorization) {
             res.status(httpStatus.FORBIDDEN).json({ msg: "Acceso no autorizado" });
             return;
 
         }
 
         const token = req.headers.authorization.split(" ").pop();
 
         const tokenData = await verifyToken(token);
         
         if (tokenData.id){
             next();
         }
         else{
             res.status(httpStatus.FORBIDDEN).json({ msg: "Acceso no autorizado" });
         }
 
 
     } 
         catch (error) {
             res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                 msg: 'Something went wrong'
             });
 
     }
 }
 
 module.exports =  AuthUser ;