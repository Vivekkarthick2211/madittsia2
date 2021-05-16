const sql = require("./db.js");
const MenuMadittsia =function(){

}

MenuMadittsia.getAlll = result => {
    sql.query("SELECT * FROM maditssia_main_service", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  };
MenuMadittsia.getAll = result => {
    sql.query("SELECT * FROM menu", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  };
  
  MenuMadittsia.findById = (menuId, result) => {
    sql.query(`SELECT * FROM menu WHERE menuid= '${menuId} order by menuid asc'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        console.log(err.code,err.sqlMessage)
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null,res[0] );
        return;
      }
     result({ kind: "not_found" }, null);
    });
  }; 
module.exports =MenuMadittsia;