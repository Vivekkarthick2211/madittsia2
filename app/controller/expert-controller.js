const expert = require("../model/expert-model");



// Create and Save a new Customer
exports.expertregister= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const expertregister = new expert({
   // user_id:uuidv4(),
    firstname: req.body.fname ,
    lastname : req.body.lname ,
    qualification:  req.body.qualification ,
    email : req.body.email ,
    positionheld : req.body.positionheld , 
    yearofexp:  req.body.yearofexp ,
    expertisearea : req.body.expertisearea ,
    contactdetail:  req.body.contactdetail ,

  });


  // Save Customer in the database
  expert.create(expertregister, (err, data) => {
    //console.log("email")
    if (err)
      res.status(500).send({
        //message:
        //  err.message==
        status:500,
        msg:"duplicate"
          // ||
          // "Some error occurred while creating the Customer."
      });
    else res.send({
      status:200,
      msg:"Okk ",
      data
    });
  });
};
exports.expertregister_people = (req, res) => {
    expert.getexperts((err, data) => {
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
  // res.send(err)
};
