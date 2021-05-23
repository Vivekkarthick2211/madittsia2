const fileupload=require('../model/imageupload-model')
var fs = require('fs');
    

exports.images=(req,res)=>{

const imageupd=new fileupload({
        file:req.files.file
        
    });


    fileupload.uploadfile(req.params.email,req.params.sub,imageupd,(err,data)=>{
        // console.log(req.params.email)
        // var createfolder=req.params.email
        // var sub=req.params.sub
        //     const dir = `./images/${createfolder}`;
            
        //         if (!fs.existsSync(dir)) {
        //         fs.mkdirSync(dir, {
        //             recursive: true
        //         });
        //         }
        //     const dir2=`${dir}/${sub}`
        //     console.log(dir2,"sdfsdafsdfsdf")
        //     if (!fs.existsSync(dir2)) {
                
        //         fs.mkdirSync(dir2, {
        //             recursive: true
        //         });
        //         }
        // console.log(imageupd,"asdfsdfsdf")
        //     var img=imageupd.file
        //     var filename=img.name;
        //     console.log(dir)
        //     result=[]
        //     snd_img=[]
        //     for(var i=0;i<1;i++){
        //         // console.log(i[files])
        //         var math=Math.floor(Math.random()*90000) + 10000
        //         result.push(math)
        //     console.log(result)
        //         if(filename == img.name){
        //             result+=img.name
        //             console.log(result)
        //             snd_img.push(result)
        //         }
        //     }
        //     console.log("asdiofsdfj",snd_img)
        //     img.mv(`${dir2}/${snd_img}`,(err)=>{

        //         if(err){
        //             console.log(err)
        //             result(null,err)
        //         }
        //     })
        if(err){
            res.send({
                status:400,
                msg:err

            })
        }
        res.send({
            status:200,
            data
        })
    })

}