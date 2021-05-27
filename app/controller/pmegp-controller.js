var pmegp=require('../model/pmegp-model')

const {v4 : uuidv4} = require('uuid')

exports.postpmegp=(req,res)=>{
    var reg_pmegp=new pmegp({
        
        user_id:req.body.user_id,
        name_of_entrepreneur:req.body.name_of_enterprise,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        aadharcard:req.body.aadharcard,
        pancard:req.body.pancard,
        passport_size_photo:req.body.passport_size_photo,
        project_report:req.body.project_report,
        valid_quotation_with_gst:req.body.valid_quotation_with_gst,
        ex_serviceman:req.body.ex_serviceman,
        differently_abled:req.body.differently_abled,
        transgender_certificate:req.body.transgender_certificate
    })
    // var userId = uuidv4()
    pmegp.insert_pmeg(reg_pmegp,(err,data)=>{
        
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