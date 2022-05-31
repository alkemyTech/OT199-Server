const awsS3 = require('./awsS3');
const {validateImage} = require('image-validator');

class Uploader{
  static async imgUploadAWS(file,title){
    const fileValidation = await validateImage(file);
    if(!fileValidation){
      return(false);
    }
    
    const S3 = new awsS3;
    const uploadFile = undefined;
   
    try {
      uploadFile = S3.updateFile(file, title);
    } catch (error){
      return (false);
    }

    return uploadFile.Location; 
  }
}

module.exports = Uploader;