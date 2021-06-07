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

    sql.query(`update user_register set first_name='${upd_prof['first_name']}',last_name='${upd_prof['last_name']}',phone_no='${upd_prof['phone_no']}',gender='${upd_prof['gender']}',Address='${upd_prof['Address']}',qualification='${upd_prof['qualification']}',business_type='${upd_prof['business_type']}'  where email='${email}';`,(err,res)=>{

    // sql.query(`update user_register set ? where email='${email}';`,upd_prof,(err,res)=>
      if(err){
        console.log(err)
        result(null,err)
      }
      result(null,{id:res.email,...upd_prof})
    })
  
  }
  module.exports=Madittsia_update