const awsS3 = require('./awsS3');

class Uploader{
  static async imgUploadAWS(file,title){
    const allowedExtensions = ['jpg', 'png', 'bmp', 'gif', 'tif'];
    const extension = file.split('.')[1];
    
    const validExtension = allowedExtensions.includes(extension);
    
    if(!validExtension){
      return ('File not allowed');
    }
    
    const S3 = new awsS3();
    const uploadFile = await S3.updateFile(file,title);
    return (uploadFile.Location); 
  }
}

module.exports = Uploader;