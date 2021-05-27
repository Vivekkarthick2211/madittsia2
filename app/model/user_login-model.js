const sql = require("./db.js");
const Users=function(){

};
Users.findById = (customerId, result) => {
    console.log(customerId);
    sql.query(`SELECT user_id,password FROM user_register WHERE email = '${customerId}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found customer: ", res[0]);
        var iv="a4b8c6d2e0f5g7f5";
         var password=res[0]['password']
        result(null,{iv,password} );
        return;
      }
      // not found Customer with the id
      //result(err, null);
     result({ kind: "not_found" }, null);
    });
  };
module.exports=Users;