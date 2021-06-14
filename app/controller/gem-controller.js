var gemtab=require('../model/gem-model')

exports.gemregister=(req,res)=>{
    var reg_gem=new gemtab({
      user_id:req.body.user_id,
        name_of_entrepreneur:req.body.name_of_enterprise,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        passbook:req.body.passbook,
        pancard:req.body.pancard, 
        bankdetails:req.body.bankdetails,
        it_return:req.body.it_return,
        udyam:req.body.udyam,
        cheque:req.body.cheque
    })
    gemtab.insertgem(reg_gem,(err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status:400,
                message:err
            })
        }
        res.send({
            status:200,
            message:data
        })
    })
}

exports.findall = (req, res) => {
    gemtab.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err
      });
     
    else res.send({
      status:200,
      msg:"Okk ",
      data:data
    });
  });
  };
