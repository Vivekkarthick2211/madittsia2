const sql = require("./db.js");

var gem_tables=function(gem){
    this.name_of_entrepreneur=gem.name_of_entrepreneur;
    this.socialcategory=gem.socialcategory;
    this.gender=gem.gender;
    this.name_of_enterprise=gem.name_of_enterprise;
    this.typeoforganisation=gem.typeoforganisation;
    this.address=gem.address;
    this.mailid=gem.mailid;
    this.passbook=gem.passbook;
    this.pancard=gem.pancard;
    this.udyam=gem.udyam;
    this.cancelled_cheque_leaf=gem.cancelled_cheque_leaf;
    this.it_returns_user_id_and_Password=JSON.stringify(gem.it_returns_user_id_and_Password)
    this.bankpass_book=gem.bankpass_book
}

gem_tables.insertgem=(gemreg,result)=>{
    sql.query(`insert into gem_registered set?`,gemreg,(err,res)=>{
        if(err){
            result(null,err)
        }
        result(null,{res,...gemreg})
    })
}
gem_tables.getAll = result => {
    sql.query("SELECT * FROM gem_registered", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res); 
    });
  }


module.exports=gem_tables;
