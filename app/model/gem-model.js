
const sql = require("./db.js");

var gem_tables=function(gem){
  this.user_id=gem.user_id
    this.name_of_entrepreneur=gem.name_of_entrepreneur;
    this.socialcategory=gem.socialcategory;
    this.gender=gem.gender;
    this.name_of_enterprise=gem.name_of_enterprise;
    this.typeoforganisation=gem.typeoforganisation;
    this.address=gem.address;
    this.mailid=gem.mailid;
    this.passbook=gem.passbook;
    this.pancard=gem.pancard;
    this.bankdetails=gem.bankdetails
    this.it_return=gem.it_return
    this.udyam=gem.udyam;
    this.cheque=gem.cheque;
    
    
}

gem_tables.insertgem=(gemreg,result)=>{
    sql.query(`insert into gem_register set?`,gemreg,(err,res)=>{
        if(err){
          console.log(err)
            result(null,err)
        }
        result(null,{res,...gemreg})

        var read_mode=false;
        sql.query(`insert into notification_tab(user_id,mail,message,read_mode) values('1','${gemreg['mailid']}','${gemreg['mailid']} joined on GEM',${read_mode})`,(err,res)=>{
            if(err){
                console.log(err)
                result(null,err)
            }
            // result(null,res)
        })
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
