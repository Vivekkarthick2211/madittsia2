
const Services = require("../model/service-model");

exports.servicesget = (req, res) => {
    Services.getAll((err, data) => {
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
    Services.findById(req.params.servicename, (err, data) => {
      var servicename=req.params.servicename;
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
            message: "Error retrieving Customer with id " + req.params.servicename +res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
      service:servicename,
       data:data});
   }); 
  };  

  exports.service = (req, res) => {
    Services.findByIdd(req.params.service, (err, data) => {
      var servicenamee=req.params.service;
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
            message: "Error retrieving Customer with id " + req.params.service+res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
      service:servicenamee,
       data:data});
   }); 
  };  