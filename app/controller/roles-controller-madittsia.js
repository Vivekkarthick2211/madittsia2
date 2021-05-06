const rolesmadittsia=require("../model/roles-model-madittsia.js");

exports.findall = (req, res) => {
    rolesmadittsia.getAll((err, data) => {
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
    rolesmadittsia.findById(req.params.rolesname, (err, data) => {
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
            message: "Error retrieving Customer with id " + req.params.rolesname +res.statusCode
          });
        }
      } 
     else res.send({
      status:200,
      messsage:'retrive successfully',
       data:data});
   }); 
  };  