const sql = require("./db.js");

// constructor
const Madittsia_primary = function(primarydetails) {
    //this.id = registerdetails.first_name,
/*     this.first_name = registerdetails.first_name,
    this.last_name = registerdetails.last_name,
    this.phone_no= registerdetails.phone_no, */
    this.email = primarydetails.email,
 /*    this.password= registerdetails.password,   
    this.Address= registerdetails.Address, 
    this.pincode = registerdetails.pincode,   
    this.dateofbirth = registerdetails.dateofbirth,
    this.gender = registerdetails.gender,
    this.aadhar_no = registerdetails.aadhar_no,
    this.qualification = registerdetails.qualification,*/
    this.business_type = primarydetails.business_type,
/*   this.landline_no= registerdetails.landline_no,
    this.city = registerdetails.city,
    this.state = registerdetails.state, */  
    this.company_name = primarydetails.company_name,
    this.service_category=primarydetails.service_category,
    this.service_type= primarydetails.service_type,
    this.fcm_token = primarydetails.fcm_token
}
Madittsia_primary.create = (primarydetails, result) => {
            sql.query("INSERT INTO user_primary_info SET ?", primarydetails, (err, res) => {
                       if (err) {
                           console.log("error: ", err);
                          result(err, null);
                           return;
                        }
                         console.log("created wishlist ", { id: res.insertId, ...primarydetails });
                       // console.log(res)
                        result(null, { id: res.insertId, ...primarydetails });
                      });
            // result(null ,{ id: res.insertId, ...wishlistdetails }); 
             //
           //  result({ kind: "not_found" }, null);
          //*//
         // result({ kind: "not_found" }, null);
/*  }) */
};

//jsjdjdaj
Madittsia_primary.getAlll = result => {
  sql.query("SELECT * FROM user_primary_info", (err, res) => {
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

module.exports =Madittsia_primary;

