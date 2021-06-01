const sql = require("./db.js");

// constructor
const Madittsia = function(registerdetails) {
    //this.id = registerdetails.first_name,
    this.user_id=registerdetails.user_id
    this.first_name = registerdetails.first_name,
    this.last_name = registerdetails.last_name,
    this.gender = registerdetails.gender,
    this.dateofbirth = registerdetails.dateofbirth,
    this.business_type = registerdetails.business_type, 
    this.qualification = registerdetails.qualification,
    this.annual_income=registerdetails.annual_income,
    this.social_category=registerdetails.social_category,
    this.phone_no= registerdetails.phone_no,
    this.alternative_phone_no=registerdetails.alternative_phone_no,
    this.email = registerdetails.email,
    this.business_address= registerdetails.business_address,
    this.permanent_address= registerdetails.permanent_address,
    this.pincode = registerdetails.pincode,
    this.password= registerdetails.password['encryptedData'],
    this.fcm_token = registerdetails.fcm_token
}




Madittsia.create = (registerdetails, result) => {
            sql.query("INSERT INTO user_register SET ?", registerdetails, (err, res) => {
                       if (err) {
                           console.log("error: ", err);
                          result(err, null);
                           return;
                        }
                         console.log("created wishlist ", { id: res.insertId, ...registerdetails });
                       // console.log(res)
                        result(null, { id: res.insertId, ...registerdetails });
                      });
            // result(null ,{ id: res.insertId, ...wishlistdetails }); 
             //
           //  result({ kind: "not_found" }, null);
          //*//
         // result({ kind: "not_found" }, null);
/*  }) */
};

//jsjdjdaj

Madittsia.getAlll = result => {
  sql.query("SELECT user_id,first_name,last_name,gender,dateofbirth,business_type,qualification,annual_income,social_category,phone_no,alternative_phone_no,email,business_address,permanent_address,pincode,password,confirm_password FROM user_register", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    //console.log(res[0]['username'])
    console.log("customers: ", res);
    result(null, res);
    
  });
};

Madittsia.find_email=(result) =>{
  sql.query(`select email from user_register`,(err,res)=>{
    if(err){
      result(null,err)
    }
    result(null,res)

  })
}
Madittsia.check_mail=(mail,result)=>{
  sql.query(`select email from user_register where email='${mail}'`,(err,res)=>{
    if(err){
      console.log(err)
      result(null,result)
    }
  })


}

Madittsia.findById = (email, result) => {

 sql.query(`SELECT first_name,last_name,gender,phone_no,Aadhar_no,email,Address,qualification,business_type FROM user_register where email='${email}'`, (err, res) => {

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




/* 
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};
*/
/* Madittsia.remove = (id, idx,result) => {
  sql.query(`DELETE FROM wishlist WHERE product_id = '${id}' and user_id='${idx}'`,  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
}; */
/*
Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
}; */

module.exports =Madittsia;
// module.exports=Madittsia_update;

