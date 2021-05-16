const sql = require("./db.js");
const Roles=function(){
    
}
Roles.getAll = result => {
    sql.query("SELECT * FROM roles", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("roles: ", res);
      result(null, res); 
    });
  };

  Roles.findById = (rolesname, result) => {
    sql.query(`SELECT menuid FROM roles WHERE rolesname= '${rolesname}' order by menuid asc`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res);
        result(null,res );
        return;
      }
     result({ kind: "not_found" }, null);
    });
  }; 

  module.exports=Roles;