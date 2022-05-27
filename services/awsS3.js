const S3 = require('aws-sdk/clients/s3')
require('dotenv').config()


class s3Service{
    constructor (){
        this.storage = new S3({
            accessKeyId : process.env.AWS_ACCESS_KEY,
            secretAccessKey :process.env.AWS_SECRET_KEY
        })
    }

    // Metodo de prueba para corroborar la conexión, 
    getObjectsAll = (bucketName = process.env.AWS_BUCKET)=>{
        const params = {
            Bucket: bucketName
        }
        return this.storage.listObjects(params).promise()
    }

    


}

/* Al requerir el servicio dentro del archivo que lo utilizara, 
recomendacion llamar la variable del require "awsS3",
luego incidir la clase del servicio en una variable awsS3
EJ: S3 = new awsS3
luego de eso tendria disponible los metodos de la clase
*/
module.exports = s3Service