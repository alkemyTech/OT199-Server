const awsS3 = require('./awsS3');
const {validateImage} = require('image-validator');

class Uploader{
  static async imgUploadAWS(file,title){
    const S3 = new awsS3();
    const uploadFile = await S3.updateFile(file,title);

    return (uploadFile.Location); 
  }
}

module.exports = Uploader;