const MentorMadittsia = require("../model/mentor-model.js");

 
// Create and Save a new Customer
exports.mentorregister= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const mentorregisterdetails = new MentorMadittsia({
    first_name: req.body.fname ,
    last_name : req.body.lname ,
    email : req.body.email,
    ccode: req.body.ccode,   
    phone: req.body.phone,
    location: req.body.location,   
    sectors: req.body.sectors,
    genre : req.body.genre,
    current_job: req.body.current_job,
    current_emp :req.body.current_emp,
    interest_mentor : req.body.interest_mentor,
    listof_interest: req.body.listof_interest,
    prof_skills :req.body.prof_skills,
    interested_maditssia :req.body.interested_maditssia 
  });


  // Save Customer in the database
  MentorMadittsia.create(mentorregisterdetails, (err, data) => {
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

// Retrieve all Customers from the database.
 exports.registered_people = (req, res) => {
    MentorMadittsia.getAll((err, data) => {
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
exports.findOne = (req, res) => {
  MentorMadittsia.findById(req.params.email, (err, data) => {
     if (err) {
       // var resco=208
       if (err.kind === "not_found") {
          console.log(err)
         res.status(404).send({
            status:404,
            error:'Not found'
         });
       } else {
         res.status(500).send({
           message: "Error retrieving Customer with id " + req.params.email +res.statusCode
         });
       }
     } 
    else res.send({
     status:200,
     messsage:'retrive successfully',
      data:data});
  }); 
 };  