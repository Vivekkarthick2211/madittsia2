const subservice=require("../model/subservice-model");

exports.serviceOne = (req, res) => {
    subservice.findById(req.params.subs, (err, data) => {
      var subservicename=req.params.subs;
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
            message: "Error retrieving Customer with id " + req.params.subs +res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
      service:subservicename,
       data:data});
       //hi
   }); 
  };  