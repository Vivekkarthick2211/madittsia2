var serv=require('../model/services_for_app-model')

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

exports.services_qualification=(req,res)=>{
    serv.findById_qualification(req.params.serv,req.params.user_id,req.params.studies,(err,data)=>{
    if(err){
      console.log(err)
      res.send({
        status:400,
        err:err
      })
    }
    res.send({
      status:200,
      data:data
    })
  })
}

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