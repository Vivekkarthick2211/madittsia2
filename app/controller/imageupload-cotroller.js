const fileupload=require('../model/imageupload-model')
var fs = require('fs');
    

exports.images=(req,res)=>{

const imageupd=new fileupload({
        file:req.files.file
        
    });


    fileupload.uploadfile(req.params.email,req.params.sub,imageupd,(err,data)=>{
       
        if(err){
            res.send({
                status:400,
                msg:err

            })
        }
        res.send({
            status:200,
            path:data,
            // name:
        })
    })

}