const sql = require("./db.js");
const subservices=function(){
    
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

  module.exports=subservices;