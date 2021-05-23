var fs = require('fs');
const sql = require("./db.js");
const file=function(img){
    this.file=img.file

}
file.uploadfile=(email,sub,images,result)=>{
    // console.log(dir2,"dir2")
    console.log(email)
    console.log("imagess",images)
    const dir = `./images/${email}`;
            
                if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
                }
            const dir2=`${dir}/${sub}`
            console.log(dir2,"sdfsdafsdfsdf")
            if (!fs.existsSync(dir2)) {
                
                fs.mkdirSync(dir2, {
                    recursive: true
                });
                }
        console.log(images,"asdfsdfsdf")
            var img=images.file
            var filename=img.name;
            console.log(dir)
            result1=[]
            snd_img=[]
            for(var i=0;i<1;i++){
                // console.log(i[files])
                var math=Math.floor(Math.random()*90000) + 10000
                result1.push(math)
            console.log(result)
                if(filename == img.name){
                    result1+=img.name
                    console.log(result1)
                    snd_img.push(result1)
                }
            }
            console.log("asdiofsdfj",snd_img)
            img.mv(`${dir2}/${snd_img}`,(err,res)=>{

                if(err){
                    console.log(err)
                    result(null,err)
                }
                
            })
            sql.query(`insert into images(path,images) values('${dir2}','${dir2}/${snd_img}')`,(err,res)=>{
                if(err){
                    console.log(err)
                    result(null,err)
                }
                result(null,res)
            })
}



module.exports=file;



