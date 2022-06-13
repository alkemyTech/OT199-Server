const fs = require('fs')
const path = require('path')

class DecodeImage {
  static async getImageDecoded(imgBase64){
    let type;
    let extensionType;
    let data;
    if(imgBase64.startsWith('data:')){
      const found = imgBase64.match(/data:\S*;base64/g);
      data = imgBase64.split(';base64,').pop();
      type = found && found[0].slice('data:'.length, ';base64'.length * -1);
      extensionType = type.split('/')[1];
      
    }else{
      
      const signatures = {
        JVBERi0: "application/pdf",
        R0lGODdh: "image/gif",
        R0lGODlh: "image/gif",
        iVBORw0KGgo: "image/png",
        "/9j/": "image/jpg"
      };
      
      
      for (let signature in signatures) {
        if (imgBase64.indexOf(signature) === 0) {
          type=signatures[signature]
          data= imgBase64
          extensionType=type.split('/')[1];
        }
      }
    }
      const nameFile = `${Date.now().toString()}.${extensionType}`
      const buffer = Buffer.from(data,'base64');

      try{
        fs.writeFileSync(path.join(__dirname,'..','public','img',nameFile),buffer)
        return nameFile

      }catch(e){
        return null
      }
      
      

   
  }
}
module.exports=DecodeImage