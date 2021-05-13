var doc_register=require("../model/user_doc_register_model");

exports.regdoc=(req,res)=>{
    var documents=new doc_register({
        email:req.body.email,
        adhar_card:req.body.adhar_card,
        bankpassbook:req.body.bankpassbook
    })

    doc_register.findone(documents,(err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status:400,
                msg:err
            })
        }
        res.send({
            status:200,
            data:data
        })
    })
}