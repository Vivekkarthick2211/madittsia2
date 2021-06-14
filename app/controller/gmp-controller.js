var gmp=require('../model/gmp-model')
const {v4 : uuidv4} = require('uuid')


exports.postgmp=(req,res)=>{
    var reg_uy=new gmp({
        
        user_id:req.body.user_id,
        name_of_entrepreneur:req.body.name_of_enterprise,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        aadharcard:req.body.aadharcard
    })

    gmp.insert(reg_uy,(err,data)=>{
        
        if(err){
            console.log(err)
            res.send({
                status:400,
                msg:err
            })
        }
        res.send({
            status:200,
            msg:data
        })
    })

}