var fs = require('fs');
const sql = require("./db.js");

const file=function(img){
    this.file_upload=img.file_upload
    

}
var image
var images
file.uploadfile=(email,sub,imagess,result)=>{
    // console.log(dir2,"dir2")
    console.log(email)
    console.log("imagess",imagess['file_upload'])
    // images=[];
    // images.push(images)
    // console.log("img2",file)

    const dir = `D:\\madittsia_images\\${email}`;
            
                if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
                }
            const dir2=`${dir}\\${sub}`
            console.log(dir2,"sdfsdafsdfsdf")
            if (!fs.existsSync(dir2)) {
                
                fs.mkdirSync(dir2, {
                    recursive: true
                });
                }
        if(imagess['file_upload'].length == undefined){
            imagess['file_upload']=[imagess['file_upload']]
        }
        console.log(imagess['file_upload'].length,"asdfsdfsdf")
        
        snd_img=[]
        test=[];
        test1=[];
        for(let j=0;j<imagess['file_upload'].length;j++){
            console.log(imagess['file_upload'][j])
        
            var img=imagess['file_upload'][j]
            var filename=img.name;
            console.log(dir)

            result1=[]
            for(var i=0;i<1;i++){
                var math=Math.floor(Math.random()*90000) + 10000
                result1.push(math)
                console.log(result1)
                if(filename == img.name){
                    result1+=img.name
                    console.log(result1)
                    snd_img.push(result1)
                }
            }
            console.log("asdiofsdfj",snd_img)
            
            img.mv(`${dir2}\\${snd_img}`,(err,res)=>{
                if(err){
                    console.log(err)
                    result(null,err)
                }
                
            })
        }
        for(let s=0;s<snd_img.length;s++){
            console.log(`${dir2}\\${snd_img[s]}`)
            test1.push(`${dir2}\\${snd_img[s]}`)
            image_name=snd_img[s]

        }
        images={"path":test1,"image":image_name}
           console.log("",test1[0],test1[2])

            result(null,images)
}
module.exports=file;



