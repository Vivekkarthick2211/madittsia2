var Madittsiaupd=require('../model/update_register-model')


exports.update_prof=(req,res)=>{
    const updateing=new Madittsiaupd({
      first_name: req.body.fname ,
      last_name : req.body.lname ,
      dateofbirth:req.body.dateofbirth,
      phone_no:  req.body.phone ,
      email : req.body.email ,
      current_address:  req.body.current_address ,
      business_address:req.body.business_address,
      gender:  req.body.gender,
      qualification:  req.body.qualification ,
      business_type:  req.body.business_type ,
      pincode:req.body.pincode
  
    })
    console.log(req.params.email)
    console.log(req.body.fname,req.body.lname,req.body.phone,req.body.address)

    Madittsiaupd.update_profile(req.params.email,new Madittsiaupd(req.body),(err,data)=>{

    if(err){
      console.log(err)
      res.send({
        status:500,
        msg:err
      })
    }
    res.send({
      status:200,
      msg:data
    })
  })
  }