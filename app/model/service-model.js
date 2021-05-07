const sql = require("./db.js");
const Services=function(){
    
}
Services.getAll = result => {
    sql.query("SELECT id,name,description,service_id FROM maditssia_sub_service", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        
        return;
      }
      //console.log(res[0]['username'])
      console.log("customers: ", res);
      result(null, res);
      
    }); 
  };

  Services.findById = (servicename, result) => {
    console.log(servicename)
    sql.query(`Select id,name,service_id from  maditssia_sub_service where service_id=(SELECT service_id FROM maditssia_main_service WHERE service_name= '${servicename}')`, (err, res) => {

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


  Services.findByIdd = (service, result) => {
    console.log(service)
    sql.query(`Select service_name from  maditssia_main_service where service_id=(SELECT service_id FROM maditssia_sub_service WHERE name='${service}')`, (err, res) => {

      if (err) {
        console.log("error: ", err);
        console.log(err)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res);
        result(null,res);
        console.log(res)
       // console.log(res[0])
        return;
      }
     result(res, null);
    });
  }; 
  


  module.exports=Services;