const sql = require("./db.js");
const subservices=function(ins){
  this.mainservice=ins.mainservice
  this.description=ins.description,
  this.name=ins.name
  // this.service_id=ins.service_id
}
//maditssia_main_service WHERE service_name= 
  subservices.findById = (subs, result) => {
    sql.query(`SELECT * FROM ${subs}`, (err, res) => {

      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res);
        result(null,res);
        console.log(res)
        console.log(res[0])
        return;
      }
     result({ kind: "not_found" }, null);
    });
  };
  subservices.insert=(inserting,result)=>{
    sql.query(`select service_id from maditssia_main_service where service_name='${inserting["mainservice"]}'`,(err,resu)=>{
      if(err){
        console.log(res)
        console.log(err)
        
      }
     
        console.log(resu)
        console.log(resu[0]['service_id'])
        // result(resu,null)
    

    sql.query(`insert into maditssia_sub_service(description,name,service_id)  values('${inserting['description']}','${inserting['name']}',${resu[0]['service_id']})`,(err,res=>{
      if (err) {
        console.log("error: ", err);
        console.log(err)
        result(err, null);
        return;
      }
      console.log(res)
      result(res)
    }))
  })
  } 

  module.exports=subservices;