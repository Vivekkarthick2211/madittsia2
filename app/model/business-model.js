const sql = require("./db.js");
const Business =function(){

}

Business.getAll = result => {
    sql.query("SELECT * FROM user_primary_info", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  };

 Business.findById = (businesstype,email, result) => {
     console.log(businesstype)
    sql.query(`SELECT fcm_token FROM user_primary_info where business_type='${businesstype}' OR email='${businesstype}'`, (err, res) => {

      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  //jeeeevan
      if (res.length) {
        console.log("found customer: ", res);
        result(null,res);
        console.log(res)
        //jeevan
        return;
      }
     result({ kind: "not_found" }, null);
    });
  }; 
  module.exports=Business;