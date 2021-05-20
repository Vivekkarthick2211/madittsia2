const sql = require("./db.js");
const SubBusiness =function(){

}

/* SubBusiness.getAll = result => {
    sql.query("SELECT business_types FROM businesstypes", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  }; */

 SubBusiness.findById = (maincategory, result) => {
     console.log(maincategory)
    sql.query(`SELECT Code,Description,maincategory FROM sub_business_types where maincategory='${maincategory}'`, (err, res) => {

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
  module.exports=SubBusiness;