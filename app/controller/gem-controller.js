var gemtab=require('../model/gem-model')

exports.gemregister=(req,res)=>{
    var reg_gem=new gemtab({
        name_of_entrepreneur:req.body.name_of_enterprise,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        passbook:req.body.passbook,
        pancard:req.body.pancard,
        udyam:req.body.udyam,
        cancelled_cheque_leaf:req.body.cancelled_cheque_leaf,
        it_returns_user_id_and_Password:req.body.it_returns_user_id_and_Password,
        bankpass_book:req.body.bankpass_book
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
