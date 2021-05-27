var udyam=require('../model/udyam-register-model')

exports.udyamregister=(req,res)=>{
    var udytable=new udyam({
        user_id:req.body.user_id,
        aadhar_no:req.body.aadhar_no,
        name_of_entrepreneur:req.body.name_of_entrepreneur,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        pancard:req.body.pancard,
        dateofcommencement:req.body.dateofcommencement,
        bankdetails:req.body.bankdetails,
        accountnumber:req.body.accountnumber,
        ifsc_code:req.body.ifsc_code,
        majoractivity:req.body.majoractivity,
        gst_number:req.body.gst_number,
        itreturn:req.body.itreturn,
        turnover:req.body.turnover
    })

    udyam.insert_udy(udytable,(err,data)=>{
        if(err){
            console.log(err)
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
exports.getudyamregister=(req,res)=>{

udyam.getUdyamreg((err,data)=>{
    if(err){
        console.log(err)
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