const Madittsia_primary = require("../model/primary-info-model");

 
// Create and Save a new Customer
exports.primary= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const primarydetails = new Madittsia_primary({
    /* first_name: req.body.fname ,
    last_name : req.body.lname ,
    phone_no:  req.body.phone , */
    user_id:req.body.user_id,
    email : req.body.email , 
    business_type:  req.body.business_type ,
    company_name: req.body.company_name , 
    service_category:  req.body.service_category ,
    service_type: req.body.service_type ,  
    fcm_token: req.body.fcm_token 
   /*    Address:  req.body.address ,
    pincoode : req.body.pincoode ,
    dateofbirth:  req.body.dateofbirth ,
    gender:  req.body.gender ,
    aadhar_no:  req.body.aadhar_no ,
    qualification:  req.body.qualification ,
    landmark : req.body.landmark ,
    city:  req.body.city ,
    state : req.body.state ,
    company_name:  req.body.company_name ,
    service_category:  req.body.service_category ,
    service_type: req.body.service_type , */
  });


  // Save Customer in the database
  Madittsia_primary.create(primarydetails, (err, data) => {
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

// Retrieve all Customers from the database.
/* exports.register_people = (req, res) => {
    Madittsia.getAlll((err, data) => {
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


// Update a Customer identified by the customerId in the request
/* exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};*/

// Delete a Customer with the specified customerId in the request
/* exports.delete = (req, res) => {
  Explora.remove(req.params.productid,req.params.userid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.productid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.productid
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
}; */
/*
// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};
 */