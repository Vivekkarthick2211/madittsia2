const sql = require("./db.js");
const Business =function(){

}

Business.getAll = result => {
    sql.query("SELECT businessname FROM businesstypes", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  };

 Business.findById = (businesstype,result) => {
     console.log(businesstype)
    sql.query(`SELECT fcm_token FROM user_primary_info where business_type='${businesstype}' OR email='${businesstype}'`, (err, res) => {

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

        return;
      }
     result({ kind: "not_found" }, null);
    });
  }; 
  module.exports=Business;