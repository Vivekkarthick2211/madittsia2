const Madittsia = require("../model/register-model-madittsia.js");
const crypto=require('crypto');
const key="a1b5c8d0e4f2g3h7i5j0k1l4m6n9f0b3";
const iv="a4b8c6d2e0f5g7f5";
function encrypt(text) {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }
 
// Create and Save a new Customer
exports.register= (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const registerdetails = new Madittsia({
    first_name: req.body.fname ,
    last_name : req.body.lname ,
    phone_no:  req.body.phone ,
    email : req.body.email ,
    password : encrypt(req.body.password) , 
    Address:  req.body.address ,
    pincode : req.body.pincode ,
    dateofbirth:  req.body.dateofbirth ,
    gender:  req.body.gender ,
    aadhar_no:  req.body.aadhar_no ,
    qualification:  req.body.qualification ,
    business_type:  req.body.business_type ,
   /*  landmark : req.body.landmark ,
    city:  req.body.city ,
    state : req.body.state ,
    company_name:  req.body.company_name ,
    service_category:  req.body.service_category ,
    service_type: req.body.service_type , */
    fcm_token: req.body.fcm_token 
  });


  // Save Customer in the database
  Madittsia.create(registerdetails, (err, data) => {
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
 exports.register_people = (req, res) => {
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

exports.serviceOne = (req, res) => {
 Madittsia.findById(req.params.email, (err, data) => {
  //  var businesstype=req.params.businesstype;
    //var businesstype=req.params.email
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
    
     data:data, 

   
 }); 
})
}

exports.findmail=(req,res)=>{
  Madittsia.find_email((err,data)=>{
    if(err){
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

/*
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