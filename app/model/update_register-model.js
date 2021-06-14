const sql = require("./db.js");

const Madittsia_update = function(register) {
    this.first_name = register.fname,
    this.last_name = register.lname,
    this.dateofbirth = register.dateofbirth,
    this.phone_no= register.phone,
    this.gender = register.gender,
    this.qualification = register.qualification,
    this.business_type = register.business_type,
    this.current_address= register.current_address,
    this.business_address= register.business_address,
    this.pincode = register.pincode

  }
  Madittsia_update.update_profile=(email,upd_prof,result)=>{
    console.log('update',email)

    sql.query(`update user_register set first_name='${upd_prof['first_name']}',last_name='${upd_prof['last_name']}',dateofbirth='${upd_prof['dateofbirth']}',phone_no='${upd_prof['phone_no']}',gender='${upd_prof['gender']}',current_address='${upd_prof['current_address']}',business_address='${upd_prof['business_address']}',qualification='${upd_prof['qualification']}',business_type='${upd_prof['business_type']}',pincode='${upd_prof['pincode']}'  where email='${email}';`,(err,res)=>{

    // sql.query(`update user_register set ? where email='${email}';`,upd_prof,(err,res)=>
      if(err){
        console.log(err)
        result(null,err)
      }
      console.log({id:res.email,...upd_prof})
      result(null,{id:res.email,...upd_prof})
    })
  
  }
  module.exports=Madittsia_update