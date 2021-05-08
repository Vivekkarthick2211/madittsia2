const subservices = require("../model/subservice-model");
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
  
exports.insert_serv_doc=(req,res)=>{
  console.log()
  var insert_serv= new subservice({
    subs_name_document:req.body.subs_name_document,
  })
  

  subservice.insert_services_tables(req.params.main_name,new subservice(req.body),(err,data)=>{
    console.log(req.params.main_name)
    console.log("sadfsdf")
    if(err){
      console.log(err)
      res.send({
        status:404,
        msg:"err"

      })
     
    }
    res.send({
      status:200,
      msg:"document inserted",
      table_name:req.body.subs_name_document,
      data
    })
  })
}

exports.insert_subserv=(req,res)=>{
  var insert_tab= new subservice({
    mainservice:req.body.mainservice,
    description:req.body.description,
    name:req.body.name,
    document:req.body.document
    

    // service_id:req.body.service_id
  })

  console.log("asdfsdfsdf",insert_tab)

  subservice.insert(insert_tab,(err,data)=>{

    if (err) {
      // var resco=208
        console.log(err)
        res.status(404).send({
           status:404,
           error:'Not found'
        }) 
      }
   else res.send({
    status:200,
    messsage:'inserted successfully',
     data:data});
     //hi
 }); 
 
}

exports.updating_serv=(req,res)=>{
  subservice.update(req.params.id,new subservice(req.body),(err,data)=>{
    if(err){
      res.send({
        status:400,
        msg:"err",
        err:err
      })
    }
    res.send({
      status:200,
      msg:"updated",
      data
    })
  })
}