const Menu = require("../model/menu-model");


exports.findalll = (req, res) => {
    Menu.getAlll((err, data) => {
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
exports.findall = (req, res) => {
    Menu.getAll((err, data) => {
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
  // Find a single Customer with a customerId
   exports.findOne = (req, res) => {
   Menu.findById(req.params.menuId, (err, data) => {
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
            message: "Error retrieving Customer with id " + req.params.menuId +res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
       data:data});
   }); 
  };  