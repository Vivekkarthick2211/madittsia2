const sql = require("./db.js");

const Madittsia_update = function(register) {
    this.first_name = register.fname,
    this.last_name = register.lname,
    this.phone_no= register.phone,
    this.gender = register.gender,
    this.Address= register.address,
this.qualification = register.qualification,
    this.business_type = register.business_type
  }
  Madittsia_update.update_profile=(email,upd_prof,result)=>{
    console.log('update',upd_prof)
    sql.query(`update user_register set ? where email='${email}';`,upd_prof,(err,res)=>{
      if(err){
        console.log(err)
        result(null,err)
      }
      result(null,{id:res.email,...upd_prof})
    })
  
  }
  module.exports=Madittsia_update