const agency = require("../model/agency-model");



// Create and Save a new Customer
exports.agencyregister= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const agencyregister = new agency({
   // user_id:uuidv4(),
    agencyname: req.body.agencyname,
    ownerofagency : req.body.ownerofagency ,
    providingservices:  req.body.providingservices ,
    mailid : req.body.mailid ,
    address : req.body.address , 
    phonenumber:  req.body.phonenumber 
    /* expertisearea : req.body.expertisearea ,
    contactdetail:  req.body.contactdetail , */

  });


  // Save Customer in the database
  agency.create(agencyregister, (err, data) => {
    //console.log("email")
    if (err)
      res.status(500).send({
        status:500,
        msg:"duplicate" 
      });
    else res.send({
      status:200,
      msg:"Okk ",
      data
    });
  });
};

exports.update_agency=(req,res)=>{
  agency.update(req.params.id,new agency(req.body),(err,data)=>{
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
exports.getagencymembers = (req, res) => {
    agency.getagency((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      }); 
    else res.send({
      status:200,
      msg:"Okk ",
      data:data
    });
  });
};
/* exports.expertlist = (req, res) => {
    expert.getexpertslist((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      }); 
    else res.send({
      status:200,
      msg:"Okk ",
      data:data
    });
  });
}; */
