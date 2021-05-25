var needs=require('../model/needs-models')
const {v4 : uuidv4} = require('uuid')

exports.postneeds=(req,res)=>{
    var need=new needs({
        
        user_id:uuidv4(),
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
        community_certificate:req.body.community_certificate,
        education_qualification:req.body.education_qualification,
        project_report:req.body.project_report,
        valid_quotation_with_gst:req.body.valid_quotation_with_gst,
        ex_serviceman:req.body.ex_serviceman,
        differentlyabled:req.body.differentlyabled,
        transgendersshouldapplywithvalidcertificate:req.body.transgendersshouldapplywithvalidcertificate,
        gst_certificate:req.body.gst_certificate
    })
    needs.inserting(need,(err,data)=>{
        
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