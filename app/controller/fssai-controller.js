const fssaireg = require('../model/fssai-model')

exports.insert_fssai=(req,res)=>{
    var insfssai=new fssaireg({
      user_id:req.body.user_id,
        name_of_entrepreneur:req.body.name_of_entrepreneur,
        socialcategory:req.body.socialcategory,
        gender:req.body.gender,
        name_of_enterprise:req.body.name_of_enterprise,
        typeoforganisation:req.body.typeoforganisation,
        address:req.body.address,
        mailid:req.body.mailid,
        aadhar_no:req.body.aadhar_no,
        pancard:req.body.pancard,
        udyam:req.body.udyam
    })

    fssaireg.insert_fassi(insfssai,(err,data)=>{
        if(err){
            res.send({
                status:500,
                message:err
            })
        }
        res.send({
            status:200,
            message:data
        })
    })

}
exports.findall_fssai = (req, res) => {
    fssaireg.getAll((err, data) => {
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
